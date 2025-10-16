import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg text-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Prayas Sawwalakhe
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Full-Stack Developer
          </p>
          <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
            Passionate about creating innovative web solutions with modern
            technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
              View Projects
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://linkedin.com/in/prayas-sawwalakhe"
              className="text-white hover:text-blue-200 transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/prayas-sawwalakhe"
              className="text-white hover:text-blue-200 transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="mailto:prayassawwalakhe@gmail.com"
              className="text-white hover:text-blue-200 transition-colors">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
