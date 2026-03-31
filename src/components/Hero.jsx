import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="pt-32 pb-24 md:pt-40 md:pb-32 gradient-bg text-white dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20"
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Name - Large animated heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 leading-tight">
              Prayas Sawwalakhe
            </h1>
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
          </motion.div>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-blue-200 to-cyan-200"
          >
            Full-Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting innovative digital solutions with modern technologies. Passionate about building
            scalable applications, beautiful UIs, and seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="border-3 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50"
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-8">
            {[
              { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/prayas-sawwalakhe-713034222/", label: "LinkedIn" },
              { icon: "fab fa-github", url: "https://github.com/Prayas2910", label: "GitHub" },
              { icon: "fas fa-envelope", url: "mailto:prayassawwalakhe@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href={social.url}
                title={social.label}
                className="text-white hover:text-blue-200 transition-colors duration-300 p-3 rounded-full hover:bg-blue-500/20"
              >
                <i className={`${social.icon} text-3xl`}></i>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex flex-col items-center"
          >
            <p className="text-blue-200 text-sm mb-3">Scroll to explore</p>
            <div className="border-2 border-blue-400 rounded-full p-3">
              <svg
                className="w-6 h-6 text-blue-400 animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
