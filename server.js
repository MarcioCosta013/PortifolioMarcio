import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 5000;

// Configuração do CORS
app.use(
  cors({
    origin: "https://portifolio-marcio.vercel.app/", // Permite apenas requisições deste domínio FRONTEND
    methods: ["GET", "POST"], // Permite os métodos GET e POST
  })
);

// Middleware para processar JSON
app.use(express.json());

// Rota da API
app.get("/api/github", async (req, res) => {
  const token = process.env.GITHUB_TOKEN; // Token do GitHub armazenado em variáveis de ambiente

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

        const repoDetails = repoResponse.data;

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

        const languages = languagesResponse.data;

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
    console.error("Erro na API interna:", error.message);
    res.status(500).json({ error: "Erro ao buscar dados dos repositórios." });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
