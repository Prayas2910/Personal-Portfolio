import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "Go"],
      icon: "fas fa-code",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Responsive Design"],
      icon: "fas fa-palette",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Django", "REST APIs", "JWT"],
      icon: "fas fa-server",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Databases & ORM",
      skills: ["MongoDB", "MySQL", "SQLite", "Prisma ORM"],
      icon: "fas fa-database",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git/GitHub",
        "Docker",
        "Postman",
        "AWS",
        "Heroku",
        "Netlify",
        "VS Code",
        "Linux",
      ],
      icon: "fas fa-wrench",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Proficient in a diverse range of technologies and tools for building robust, scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
              className="group bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-center mb-5">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`bg-gradient-to-br ${category.color} p-3 rounded-lg mr-4 text-white shadow-lg`}
                >
                  <i className={`${category.icon} text-xl`}></i>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-700 dark:to-gray-600 hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-900 dark:hover:to-purple-900 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
