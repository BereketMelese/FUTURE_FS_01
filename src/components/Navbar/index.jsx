import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const navlinks = [
    {
      label: "Home",
      target: "#hero",
    },
    {
      label: "Projects",
      target: "#projects",
    },
    {
      label: "Skills",
      target: "#skills",
    },
    {
      label: "Contact",
      target: "#contact",
    },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-900 dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto p-6  flex items-center justify-between">
        <h1 className="uppercase text-xl font-bold">
          Bek<span className="text-blue-500">kas</span>
        </h1>
        <div className="hidden  md:flex items-center gap-6">
          {navlinks.map((link) => (
            <a
              key={link.label}
              href={link.target}
              className="ml-6 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
