import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: "fas fa-code",
      title: "Full-Stack Development",
      description: "Expert in MERN stack and modern web technologies",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Technologies",
      description: "AWS, Docker, and cloud deployment expertise",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Web Security",
      description: "JWT authentication and secure coding practices",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get to know my background and expertise
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 border border-blue-200 dark:border-blue-900/30 shadow-xl"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-light">
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science undergraduate</span> with practical expertise in full-stack web development and modern technologies. With hands-on experience building scalable applications using <span className="font-semibold">React, Node.js, Django, MongoDB,</span> and cloud platforms, I'm dedicated to creating innovative digital solutions. I thrive on challenges that push my technical boundaries and am eager to contribute to impactful projects in the tech industry.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="text-center p-6 rounded-xl bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg"
                  >
                    <i className={`${item.icon} text-2xl text-white`}></i>
                  </motion.div>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
