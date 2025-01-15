import React from "react";

const ProjectCard = ({ title, description, techs, link }) => (
  <div className="bg-gray-100 border rounded p-10">
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{description}</p>
    <p className="text-sm text-gray-600">{techs}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Ver Mais
    </a>
  </div>
);

export default ProjectCard;