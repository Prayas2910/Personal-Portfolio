import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-Commerce Platform",
      description:
        "Developed complete online store using MERN stack with JWT authentication",
      features: [
        "Implemented responsive UI with Tailwind CSS and mobile-first approach",
        "Utilized Prisma ORM with MongoDB for efficient product management",
        "Deployed with separate frontend/backend hosting",
      ],
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Prisma"],
    },
    {
      title: "Team Task Management Application",
      description:
        "Built collaborative tool with real-time updates using Socket.io",
      features: [
        "Created drag-drop interface with React Beautiful DnD library",
        "Implemented role-based access control and team collaboration features",
      ],
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    },
    {
      title: "Library Management System",
      description: "Developed using Django framework with SQL database",
      features: [
        "Implemented user authentication and book management system",
        "Created admin panel for system administration",
      ],
      tech: ["Django", "SQL", "Python", "HTML/CSS"],
    },
  ];

  return (
  <section id="projects" className="py-16 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
        Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-project-diagram text-primary"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <ul className="space-y-2 mb-4">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
