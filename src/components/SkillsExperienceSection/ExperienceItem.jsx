import React from "react";

const ExperienceItem = ({ experience }) => {
  return (
    <div className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h5 className="text-lg font-semibold dark:text-gray-300 text-gray-900">
        {experience.title}
      </h5>
      <p className="text-sm text-blue-500 dark:text-blue-400">
        {experience.company}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {experience.years}
      </p>
    </div>
  );
};

export default ExperienceItem;
