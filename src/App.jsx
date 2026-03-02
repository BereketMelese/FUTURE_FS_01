import ThemeProvider from "./Contexts/ThemeProvider";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ScrollDots from "./components/ScrollDots";
import ContactsSection from "./components/ContactsSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        Demo
        <Navbar />
        <ScrollDots />
        <div id="hero">
          <Hero />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact">
          <ContactsSection />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
