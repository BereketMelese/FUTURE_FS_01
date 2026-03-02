const sections = ["hero", "projects", "skills", "contact"];

const ScrollDots = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-10 flex flex-col gap-3 items-center">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 mx-2 hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-300"
        />
      ))}
    </div>
  );
};

export default ScrollDots;
