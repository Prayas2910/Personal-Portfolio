import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-Commerce Platform",
      description:
        "Developed a complete online store using MERN stack with JWT authentication and secure payment integration",
      features: [
        "Implemented responsive UI with Tailwind CSS and mobile-first approach for optimal user experience",
        "Utilized Prisma ORM with MongoDB for efficient product and order management",
        "Deployed full-stack application with separate frontend/backend hosting on cloud platforms",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Prisma"],
      year: "2024",
      location: "Nagpur, India",
      code: "https://github.com/Prayas2910/shoppi-sphere.git",
    },
    {
      title: "Team Task Management Application",
      description:
        "Built collaborative productivity tool with real-time updates using Socket.io for seamless team coordination",
      features: [
        "Created drag-and-drop interface with React Beautiful DnD library for intuitive task management",
        "Implemented role-based access control and team collaboration features for secure project organization",
        "Used Prisma with MongoDB for complex data relationships and team workflow management",
      ],
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Prisma"],
      year: "2024",
      location: "Nagpur, India",
      code: "https://github.com/Prayas2910/Team-Task-Management.git",
    },
    {
      title: "Music Player",
      description:
        "Designed an offline music player for Android phones that can read and play all songs in device storage",
      features: [
        "Implemented NotificationManager and RemoteView for interactive notifications with playback controls",
        "Generated comprehensive list of all songs on the android device with metadata information",
        "Developed separate Player GUI with cover photo backgrounds and interactive notification widgets",
      ],
      tech: ["Android", "Java/Kotlin", "NotificationManager"],
      year: "2024",
      location: "Nagpur, India",
      code: "https://github.com/Prayas2910/music-player.git",
    },
    {
      title: "2048Go Game",
      description: "Developed complete clone of 2048 puzzle game using Go programming language",
      features: [
        "Implemented core game mechanics including tile movement, merging logic, and score tracking",
        "Built random tile generation and win/lose condition detection systems",
        "Served as practical Go programming exercise demonstrating language proficiency",
      ],
      tech: ["Go"],
      year: "2024",
      location: "Nagpur, India",
      code: "https://github.com/Prayas2910/2048Go.git",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Built responsive portfolio website showcasing projects and technical skills with modern design principles",
      features: [
        "Implemented modern CSS Grid and Flexbox layouts for optimal visual presentation",
        "Optimized for cross-browser compatibility and mobile devices ensuring wide accessibility",
        "Deployed using modern web hosting solutions with continuous integration and deployment",
      ],
      tech: ["React", "Tailwind CSS", "Netlify/Vercel"],
      year: "2024",
      location: "Nagpur, India",
      code: "https://github.com/Prayas2910/Personal-Portfolio.git",
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
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {project.year} • {project.location}
                  </div>
                </div>
                {project.code && (
                  <div className="text-sm">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline">
                      [Code]
                    </a>
                  </div>
                )}
              </div>
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
