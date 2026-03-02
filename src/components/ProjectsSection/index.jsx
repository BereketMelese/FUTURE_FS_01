import { useState } from "react";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const uniqueTypes = [
  "All",
  ...new Set(projects.map((project) => project.type)),
];

const ProjectsSection = () => {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects =
    selectedType === "All"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <section className="scroll-mt-24 min-h-screen text-center flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-2xl font-semibold mb-6 dark:text-gray-300 text-gray-900">
        My Projects
      </h2>
      <h3 className="text-3xl font-bold mb-12 text-blue-500 dark:text-blue-400">
        Featured Projects
      </h3>
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {uniqueTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 m-2 rounded-full border text-sm font-medium ${
              selectedType === type
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            } transition-colors duration-300`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
