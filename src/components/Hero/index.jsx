const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-8 -left-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-14 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center py-14 md:py-20">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 px-4 py-1.5 text-sm font-medium mb-6">
            Full Stack Web Developer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Building clean,
            <span className="block text-blue-600 dark:text-blue-400">
              user-focused digital experiences
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I am Bekkas. I craft responsive interfaces and scalable backends
            with React, Node.js, and modern web tools. I love turning ideas into
            products that feel fast, intuitive, and reliable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            {["React", "Node.js", "Tailwind CSS", "JavaScript", "MongoDB"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md shadow-blue-500/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-lg font-medium bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-70 h-70 sm:w-85 sm:h-85 lg:w-97.5 lg:h-97.5">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-blue-500/20 via-cyan-500/10 to-transparent dark:from-blue-400/15 dark:via-cyan-400/10 dark:to-transparent" />

            <div className="absolute inset-4 rounded-[1.75rem] overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-white dark:bg-gray-800">
              <img
                src="/images/profile.jpg"
                alt="Bekkas portrait"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700">
              <img src="/images/react.png" alt="React" className="w-8 h-8" />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg border border-gray-200 dark:border-gray-700">
              <img
                src="/images/javascript.png"
                alt="JavaScript"
                className="w-8 h-8"
              />
            </div>

            <div className="absolute bottom-4 right-3 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 px-3 py-2 shadow-lg">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Experience
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                10+ projects built
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
