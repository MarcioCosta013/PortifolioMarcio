import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      console.log("Iniciando fetch de repositórios...");
      try {
        const response = await fetch("/api/github", { params: { owner, repo } }); // Chamada para a função serverless
        console.log("Resposta recebida da API:", response);

        if (!response.ok) {
          throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dados recebidos:", data);

        setRepos(data);
      } catch (error) {
        console.error("Erro ao carregar os repositórios:", error);
        setError("Erro ao carregar os repositórios. Verifique os logs.");
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
          {Array.isArray(repos) && repos.length > 0 ? ( //Para garantir que "repos" seja sempre um array.
            repos.map((repo, index) => (
              <ProjectCard
                key={index}
                title={repo.title || "Título não encontrado"}
                description={repo.description || "Sem descrição"}
                techs={repo.techs || "Nenhuma tecnologia"}
                link={repo.link || "#"}
              />
            ))
          ) : (
            <p>{error || "Carregando ou nenhum repositório encontrado..."}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
