import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'WebService RESTful Java',
      description: 'API para gerenciamento de produtos.',
      techs: ['Java', 'Spring Boot', 'Docker'],
      link: 'https://github.com/MarcioCosta013/WebServiceRESTfulJava',
    },
    {
      title: 'Front-end do WebService',
      description: 'Interface para consumir a API REST.',
      techs: ['React', 'JavaScript'],
      link: 'https://github.com/MarcioCosta013/frontWebservicesEmJava',
    },
  ];

  return (
    <div>
      <h2>Projetos</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;