import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiDjango, SiMongodb, SiTailwindcss } from "react-icons/si";

import SkillCard from "./SkillCard";
import ExperienceItem from "./ExperienceItem";

import experiences from "../../data/experiences";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
];

const SkillsExperienceSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <h2 className="text-2xl font-semibold mb-6 dark:text-gray-300 text-gray-900">
        My Skills & Experience
      </h2>
      <h3 className="text-3xl font-bold mb-12 text-blue-500 dark:text-blue-400">
        What I Bring to & Where I've Been
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
        <div>
          <h4 className="text-xl font-semibold mb-4 dark:text-gray-300 text-gray-900">
            Skills
          </h4>
          <div className="  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
            {/* Add more skills as needed */}
          </div>
        </div>
        <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 space-y-8">
          <h4 className="text-xl font-semibold mb-4 dark:text-gray-300 text-gray-900">
            Experience
          </h4>
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsExperienceSection;
