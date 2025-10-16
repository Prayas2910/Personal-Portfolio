import React from "react";

const Footer = () => {
  return (
  <footer className="bg-gray-800 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Prayas Sawwalakhe</h3>
            <p className="text-gray-400 dark:text-gray-400 mt-2">Full-Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/prayas-sawwalakhe"
              className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://github.com/prayas-sawwalakhe"
              className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="mailto:prayassawwalakhe@gmail.com"
              className="text-gray-400 hover:text-white transition-colors">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Prayas Sawwalakhe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
