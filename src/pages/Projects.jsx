import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { SlSocialGithub } from "react-icons/sl";
import Button from "../components/Button";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Buscar repositórios do GitHub
    const fetchRepos = async () => {
      try {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        const response = await fetch(
          "https://api.github.com/users/MarcioCosta013/repos",
          {
            headers: {
              //token de somente leitura sem permissoes de escrita
              Authorization: {token},
            },
          }
        );
        const data = await response.json();

        // Adicionar linguagens para cada repositório
        const reposWithLanguages = await Promise.all(
          data.map(async (repo) => {
            const headers = {
              'Authorization': {token},
            };
            const languagesResponse = await fetch(repo.languages_url);
            const languages = await languagesResponse.json();
            return { ...repo, languages: Object.keys(languages).join(", ") };
          })
        );

        setRepos(reposWithLanguages);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="bg-lightBg dark:bg-darkBg py-8 pt-20 container mx-auto">
      <div className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText min-h-screen flex flex-col items-center p-9 m-11 border-double border-4 border-darkBg dark:border-lightBg">
        <h2 className="text-4xl font-bold text-primary mb-6">Meus Projetos </h2>
        <Button
          hrefButton="https://github.com/MarcioCosta013"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialGithub size={30} />
        </Button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <ProjectCard
                key={repo.id}
                title={repo.name}
                description={repo.description || "Sem descrição disponível"}
                techs={repo.languages || "Markdown"}
                link={repo.html_url}
              />
            ))
          ) : (
            <p className="text-lightText dark:text-darkText text-left">
              Carregando projetos...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
