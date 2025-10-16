import React from "react";

const About = () => {
  return (
  <section id="about" className="py-16 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
              Passionate Computer Science undergraduate with expertise in
              full-stack web development and modern technologies. Skilled in
              React, Node.js, Django, MongoDB, and cloud deployment. Seeking
              opportunities to apply technical skills and contribute to
              innovative projects in the tech industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-code text-2xl text-primary"></i>
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                  Full-Stack Development
                </h3>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-cloud text-2xl text-primary"></i>
                </div>
                <h3 className="font-semibold text-gray-800">
                  Cloud Technologies
                </h3>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl text-primary"></i>
                </div>
                <h3 className="font-semibold text-gray-800">Web Security</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
