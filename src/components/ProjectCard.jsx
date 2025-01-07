import React from 'react';

const ProjectCard = ({ title, description, techs, link }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <p><strong>Tecnologias:</strong> {techs.join(', ')}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
  </div>
);

export default ProjectCard;