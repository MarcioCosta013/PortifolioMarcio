import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <section className="bg-gray-100 py-8 pt-20">
    <div className="container mx-auto bg-gray-600 min-h-screen flex flex-col items-center p-7 m-10">
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
