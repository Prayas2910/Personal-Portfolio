import React, { useLayoutEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  // Force dark mode only. Apply before paint to avoid flash.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
  }, []);

  return (
    <div className="App bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
