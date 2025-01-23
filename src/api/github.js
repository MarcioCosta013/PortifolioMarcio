export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN; // Token do GitHub armazenado no ambiente seguro

  try {
    // Links dos repositórios
    const repoLinks = [
      "https://github.com/MarcioCosta013/WebServiceRESTfulJava",
      "https://github.com/MarcioCosta013/portifolioMarcio",
    ];

    // Buscar informações dos repositórios
    const repoData = await Promise.all(
      repoLinks.map(async (link) => {
        const match = link.match(/github\.com\/([\w-]+)\/([\w-]+)/);
        if (!match) throw new Error("Link de repositório inválido.");

        const [_, owner, repo] = match;

        // Buscar detalhes do repositório
        const repoResponse = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!repoResponse.ok)
          throw new Error(`Erro ao acessar o repositório: ${link}`);

        const repoDetails = await repoResponse.json();

        // Buscar linguagens do repositório
        const languagesResponse = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/languages`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!languagesResponse.ok)
          throw new Error(`Erro ao carregar linguagens: ${link}`);

        const languages = await languagesResponse.json();

        return {
          title: repoDetails.name,
          description: repoDetails.description || "Sem descrição",
          techs: Object.keys(languages).join(", "),
          link,
        };
      })
    );

    res.status(200).json(repoData);
  } catch (error) {
    console.error("Erro na API interna:", error);
    res.status(500).json({ error: "Erro ao buscar dados dos repositórios." });
  }
}
