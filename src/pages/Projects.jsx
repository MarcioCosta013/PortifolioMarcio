import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

//No vite é usado o "import.meta." para importar as variaveis de controle do ".env".
const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const repoLinks = [
    "https://github.com/MarcioCosta013/WebServiceRESTfulJava",
    "https://github.com/MarcioCosta013/portifolioMarcio",
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      
      if (!githubToken) {
        console.error("Erro: Token do GitHub não encontrado!");
        setError("Erro interno: token não configurado corretamente.");
        return;
      }

      try {
        const repoData = await Promise.all(
          repoLinks.map(async (link) => {
            const match = link.match(/github\.com\/([\w-]+)\/([\w-]+)/);
            if (!match) {
              throw new Error("Link de repositório inválido.");
            }

            const [_, owner, repo] = match;

            const repoResponse = await axios.get(
              `https://api.github.com/repos/${owner}/${repo}`,
              {
                headers: {
                  Authorization: githubToken,
                },
              }
            );

            const languagesResponse = await axios.get(
              `https://api.github.com/repos/${owner}/${repo}/languages`,
              {
                headers: {
                  Authorization: githubToken,
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
        setRepos(repoData);
      } catch (err) {
        console.error("Erro ao carregar repositórios:", err);
        setError("Erro ao carregar os repositórios. Verifique os links ou o token.");
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="bg-lightBg dark:bg-darkBg py-8 pt-20 container mx-auto">
      <div className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText min-h-screen flex flex-col items-center p-9 m-11 border-double border-4 border-darkBg dark:border-lightBg">
        <h2 className="text-4xl font-bold text-primary">Meus Projetos</h2>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="grid grid-cols-3 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.length > 0 ? (
            repos.map((repo, index) => (
              <ProjectCard
                key={index}
                title={repo.title}
                description={repo.description}
                techs={repo.techs}
                link={repo.link}
              />
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;