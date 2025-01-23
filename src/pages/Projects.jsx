import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Chamar a API interna
        const response = await axios.get("/api/github");
        setRepos(response.data);
      } catch (err) {
        console.error("Erro ao carregar repositórios:", err);
        setError("Erro ao carregar os repositórios. Tente novamente mais tarde.");
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
