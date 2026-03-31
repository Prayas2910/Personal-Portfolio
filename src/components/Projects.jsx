import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-Commerce Platform",
      description:
        "Developed a complete online store using MERN stack with JWT authentication and secure payment integration.",
      features: [
        "Implemented responsive UI with Tailwind CSS and mobile-first approach for optimal user experience.",
        "Utilized Prisma ORM with MongoDB for efficient product and order management.",
        "Deployed full-stack application with separate frontend/backend hosting on cloud platforms.",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Prisma"],
      year: "2024",
      icon: "fas fa-shopping-cart",
      code: "https://github.com/Prayas2910/shoppi-sphere.git",
    },
    {
      title: "Banking System",
      description:
        "Developed Spring Boot banking system modeling accounts and transactions for basic banking operations.",
      features: [
        "Implemented layered architecture with controllers, services, repositories, and entity/DTO layers.",
        "Built core features including account creation, balance viewing, and fund transfers with transaction records.",
        "Utilized Maven for project management with complete build and test execution capabilities.",
      ],
      tech: ["Spring Boot", "Java", "Maven", "SQL"],
      year: "2024",
      icon: "fas fa-university",
      code: "https://github.com/Prayas2910/Banking-System",
    },
    {
      title: "Music Player",
      description:
        "Designed an offline music player for Android phones that can read and play all songs in device storage.",
      features: [
        "Implemented NotificationManager and RemoteView for interactive notifications with playback controls.",
        "Generated comprehensive list of all songs on the android device with metadata information.",
        "Developed separate Player GUI with cover photo backgrounds and interactive notification widgets.",
      ],
      tech: ["Android", "Java/Kotlin", "NotificationManager"],
      year: "2024",
      icon: "fas fa-music",
      code: "#",
    },
    {
      title: "2048Go Game",
      description: "Developed complete clone of 2048 puzzle game using Go programming language.",
      features: [
        "Implemented core game mechanics including tile movement, merging logic, and score tracking.",
        "Built random tile generation and win/lose condition detection systems.",
        "Served as practical Go programming exercise demonstrating language proficiency.",
      ],
      tech: ["Go"],
      year: "2024",
      icon: "fas fa-gamepad",
      code: "#",
    },
  ];

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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 dark:text-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2s"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of innovative projects spanning full-stack development, mobile applications, and game development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)" }}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="bg-gradient-to-br from-blue-500 to-purple-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow"
                >
                  <i className={`${project.icon} text-white text-2xl`}></i>
                </motion.div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.year}
                    </div>
                  </div>
                  {project.code && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-all"
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {project.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start text-sm text-gray-700 dark:text-gray-400"
                    >
                      <i className="fas fa-check text-green-500 mt-1 mr-3 flex-shrink-0"></i>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-600 dark:text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-300/30 dark:border-blue-500/30 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
