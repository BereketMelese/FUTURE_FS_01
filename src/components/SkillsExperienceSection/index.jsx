import SkillCard from "./SkillCard";
import ExperienceItem from "./ExperienceItem";

const SkillsExperienceSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Skills & Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <SkillCard />
        <ExperienceItem />
      </div>
    </section>
  );
};

export default SkillsExperienceSection;
