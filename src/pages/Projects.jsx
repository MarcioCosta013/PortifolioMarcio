import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <section className="bg-gray-100 py-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Meus Projetos</h2>
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