import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <section className="bg-lightBg dark:bg-darkBg py-8 pt-20 container mx-auto">
    <div className="bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText min-h-screen flex flex-col items-center p-9 m-11 border-double border-4 border-darkBg dark:border-lightBg">
      <h2 className="text-4xl font-bold text-primary">Meus Projetos</h2>
      <div className="grid grid-cols-3 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>

        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>
        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>
        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>
        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>
        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>
        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>
        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>
        <div>
          <ProjectCard
            title="Projeto 1"
            description="Descrição do Projeto 1"
            techs="Tecnologia 1, Tecnologia 2"
            link="https://github.com/MarcioCosta013"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
