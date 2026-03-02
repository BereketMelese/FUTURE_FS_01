const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-24 py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Left Side - Text Content */}
      <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
        <p className="text-gray-600 dark:text-gray-400 mb-3 text-lg">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-blue-500">
          Bereket Melese
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          Web Developer / Freelancer
        </p>

        <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
          I build responsive, user-friendly websites and web applications with
          clean code and modern design principles.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            Let's Connect
          </a>

          <a
            href="/cv"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative">
          {/* Simple profile image with border */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Simple tech badges - minimal */}
          <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md border border-gray-200 dark:border-gray-700">
            <img src="/images/react.png" alt="React" className="w-8 h-8" />
          </div>

          <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md border border-gray-200 dark:border-gray-700">
            <img
              src="/images/javascript.png"
              alt="JavaScript"
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
