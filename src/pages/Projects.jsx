import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <section className="bg-gray-100 py-8 pt-20">
    <div className="container mx-auto bg-gray-600 min-h-screen flex flex-col items-center p-7 m-10">
      <h2 className="text-4xl font-bold text-primary">Meus Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-xl font-semibold">Projeto 1</h3>
          <p className="mt-2 text-gray-600">Descrição do projeto.</p>
          <a href="#" className="text-blue-500 hover:underline mt-4 block">Ver Mais</a>
        </div>
        {/* Outros cards de projeto */}
      </div>
    </div>
  </section>
);

export default Projects;