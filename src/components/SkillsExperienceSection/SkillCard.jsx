const SkillCard = ({ skill }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-4xl mb-2">{skill.icon}</div>
      <span className="dark:text-gray-300 text-gray-900">{skill.name}</span>
    </div>
  );
};

export default SkillCard;
