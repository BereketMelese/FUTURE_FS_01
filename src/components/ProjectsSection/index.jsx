import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="scroll-mt-24 min-h-screen text-center flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-blue-500">
        My Projects
      </h2>
      <h3 className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-lg">
        Featured Projects
      </h3>
      {/* Add project cards or links here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
