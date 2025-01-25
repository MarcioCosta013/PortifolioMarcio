import axios from "axios";

export default async function handler(res) {
  const token = process.env.GITHUB_TOKEN; // Token do GitHub armazenado no ambiente seguro

  try {
    const repoLinks = [
      "https://github.com/MarcioCosta013/WebServiceRESTfulJava",
      "https://github.com/MarcioCosta013/portifolioMarcio",
      "https://github.com/MarcioCosta013/TaskTrackerWithJava",
    ];

    const repoData = await Promise.all(
      repoLinks.map(async (link) => {
        const match = link.match(/github\.com\/([\w-]+)\/([\w-]+)/);
        if (!match) throw new Error(`Link de repositório inválido: ${link}`);

        const [_, owner, repo] = match;

        // Buscar detalhes do repositório
        const repoResponse = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/vnd.github+json",
            },
          }
        );

        // Buscar linguagens do repositório
        const languagesResponse = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/languages`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/vnd.github+json",
            },
          }
        );

        return {
          title: repoResponse.data.name,
          description: repoResponse.data.description || "Sem descrição",
          techs: Object.keys(languagesResponse.data).join(", "),
          link,
        };
      })
    );

    console.log("Dados dos repositórios:", repoData);
    res.status(200).json(repoData);
  } catch (error) {
    console.error("Erro na API interna:", error.message);
    res.status(500).json({ error: "Erro ao buscar dados dos repositórios." });
  }
}