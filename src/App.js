import React, { useRef } from 'react';
import './App.css';
import About from './components/About';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';


function App() {
  // const [isAtTop, setIsAtTop] = useState(true);
  const aboutRef = useRef(null); 
  const projectsRef = useRef(null);
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const atTop = window.scrollY < 50; 
  //     setIsAtTop(atTop);
  //   };  
 

  //   handleScroll();

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <div className="App">
    <Header scrollToAbout={scrollToAbout} />
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
