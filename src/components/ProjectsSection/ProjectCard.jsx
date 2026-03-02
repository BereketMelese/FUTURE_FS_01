import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover overflow-hidden rounded-md mb-4"
        />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {project.type}
        </span>
      </div>
      <div className="p-4 text-left">
        <h4 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
