import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  document.documentElement.classList.add(theme);

  const toggleTheme = () => {
    const newTheme = setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light",
    );
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    return newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
