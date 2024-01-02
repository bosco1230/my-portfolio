import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  const aboutRef = useRef(null); 
  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 50; 
      setIsAtTop(atTop);
    };  
 

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="App">
    <header className="App-header">
      <img src="/DSC01409.jpg" alt="Bosco Lam" className="App-image" />
      <h1>Bosco Lam</h1>
      <p>Web Developer</p>
      {isAtTop && (
        <div className="scroll-to-continue">
          <button onClick={scrollToAbout} className="scroll-button">&#8595;</button>
        </div>
      )}
    </header>
    <div ref={aboutRef}>
    <About onProjectsClick={scrollToProjects} />
    </div>
    <div ref={projectsRef}>
    <Projects />
    </div>
    <Contact />
  </div>
  );
}

export default App;
