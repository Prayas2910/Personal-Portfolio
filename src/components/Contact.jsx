import React from "react";

const Contact = () => {
  return (
  <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Get In Touch
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Phone</p>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">
                        +91 9529611388
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Email</p>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">
                        prayassawwalakhe@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300">Location</p>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">
                        Nagpur, India
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://linkedin.com/in/prayas-sawwalakhe"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/prayas-sawwalakhe"
                    className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="mailto:prayassawwalakhe@gmail.com"
                    className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-colors">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-200 mb-2">Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your message here..."></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
