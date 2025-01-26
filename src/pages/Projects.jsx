import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      console.log("Iniciando fetch de repositórios...");
      try {
        const response = await axios.get(`${window.location.origin}/api/github`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error(`Erro na API: ${response.status}`);
        }

        const contentType = response.headers["content-type"];
        if (contentType && !contentType.includes("application/json")) {
          throw new Error("A API retornou um HTML em vez de um JSON.");
        }

        const data = response.data;
        console.log("Dados recebidos:", data);

        setRepos(data);
      } catch (error) {
        console.error("Erro ao carregar os repositórios:", error.message);
        setError("Erro ao carregar os repositórios.");
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
                title={repo.title || "Título não encontrado"}
                description={repo.description || "Sem descrição"}
                techs={repo.techs || "Nenhuma tecnologia"}
                link={repo.link || "#"}
              />
            ))
          ) : (
            <p className="container mx-auto flex justify-center items-center p-4">{error || "Carregando ou nenhum repositório encontrado..."}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;