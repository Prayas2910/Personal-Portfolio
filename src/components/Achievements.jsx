import React from "react";

const Achievements = () => {
  const achievements = [
    {
      title: "Campus Ambassador",
      organization: "Axis VNIT",
      year: "2024",
      icon: "fas fa-award",
    },
    {
      title: "Coding Competitions",
      description: "Active participant in coding competitions and hackathons",
      icon: "fas fa-trophy",
    },
    {
      title: "Open Source Contributor",
      description: "Regular contributor to open-source projects on GitHub",
      icon: "fas fa-code-branch",
    },
    {
      title: "Tech Community",
      description: "Member of college tech clubs and developer communities",
      icon: "fas fa-users",
    },
  ];

  const interests = [
    "Full-Stack Development",
    "Web Security",
    "Open Source",
    "Cloud Technologies",
    "Agile Methodology",
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Achievements
        </h2>

        {/* Achievements */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center"></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <i className={`${achievement.icon} text-primary`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                      {achievement.title}
                    </h4>
                    {achievement.organization && (
                      <p className="text-primary font-semibold">
                        {achievement.organization}
                      </p>
                    )}
                    {achievement.year && (
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {achievement.year}
                      </p>
                    )}
                    {achievement.description && (
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
            Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-primary/10 text-primary px-6 py-3 rounded-full font-medium">
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
