import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "Go"],
      icon: "fas fa-code",
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3","React.js", "Tailwind CSS", "Responsive Design"],
      icon: "fas fa-palette",
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Django", "REST APIs", "JWT"],
      icon: "fas fa-server",
    },
    {
      title: "Databases & ORM",
      skills: ["MongoDB", "MySQL", "SQLite", "Prisma ORM"],
      icon: "fas fa-database",
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
      icon: "fas fa-tools",
    },
  ];

  return (
  <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <i className={`${category.icon} text-primary`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        {/* <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">English</h4>
              <p className="text-gray-600 dark:text-gray-300">Fluent (Professional)</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Hindi</h4>
              <p className="text-gray-600 dark:text-gray-300">Native Proficiency</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Marathi</h4>
              <p className="text-gray-600 dark:text-gray-300">Native Proficiency</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
