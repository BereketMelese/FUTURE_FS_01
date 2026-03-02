const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-blue-600 dark:text-blue-400 mb-4 text-lg">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl font-bold mb-6">Bereket Melese</h1>

        {/* Paragraph */}
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
          I'm a Full Stack Web Developer passionate about building modern web
          applications. Currently working on my skills in React, Node.js, and
          MongoDB through hands-on projects. I love solving problems and
          creating clean, user-friendly experiences on the web.
        </p>
      </div>
    </section>
  );
};

export default Hero;
