import React from "react";

const Education = () => {
  return (
  <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <i className="fas fa-graduation-cap text-2xl text-primary"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
                  G H Raisoni College of Engineering and Management, Nagpur
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Expected Graduation: 2027 | Current CGPA: 8.45
                </p>
                <div className=" rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-300 mb-2">
                    Relevant Coursework:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-800 dark:text-gray-200">
                    <span>• Web Development</span>
                    <span>• Database Management</span>
                    <span>• Object-Oriented Programming</span>
                    <span>• Data Structures & Algorithms</span>
                    <span>• Computer Networks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
