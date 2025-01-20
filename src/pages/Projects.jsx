import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

//Antes tem que instalar o 'dotenv' para que permita carregar as variaveis de ambiente...
//npm install dotenv
const githubToken = process.env.REACT_APP_GITHUB_githubToken;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  // Lista de links dos repositórios
  const repoLinks = [
    "https://github.com/MarcioCosta013/WebServiceRESTfulJava",
    "https://github.com/MarcioCosta013/portifolioMarcio",
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoData = await Promise.all(
          repoLinks.map(async (link) => {
            const match = link.match(/github.com\/([\w-]+)\/([\w-]+)/);
            if (!match) {
              throw new Error("Link de repositório inválido.");
            }

            const [_, owner, repo] = match;

            const repoResponse = await axios.get(
              `https://api.github.com/repos/${owner}/${repo}`,
              {
                headers: {
                  Authorization: `token ${githubToken}`,
                },
              }
            );

            console.log("Repo Response:", repoResponse.data);

            const languagesResponse = await axios.get(
              `https://api.github.com/repos/${owner}/${repo}/languages`,
              {
                headers: {
                  Authorization: `token ${githubToken}`,
                },
              }
            );

            console.log("Languages Response:", languagesResponse.data);

            return {
              title: repoResponse.data.name,
              description: repoResponse.data.description,
              techs: Object.keys(languagesResponse.data).join(", "),
              link,
            };
          })
        );
        setRepos(repoData);
      } catch (err) {
        setError("Erro ao carregar os repositórios. Verifique os links.");
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
