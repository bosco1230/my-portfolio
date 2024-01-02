import React, { useState, useCallback, useEffect, useRef } from 'react';
import ProjectModal from './ProjectModal';
import interviewScheduler1 from '../projects/interview-scheduler/screenshot1.png';
import interviewScheduler2 from '../projects/interview-scheduler/screenshot2.png';
import interviewScheduler3 from '../projects/interview-scheduler/screenshot3.png';
import fridgefy1 from '../projects/fridgefy/fridgefy1.png';
import fridgefy2 from '../projects/fridgefy/fridgefy2.png';
import fridgefy3 from '../projects/fridgefy/fridgefy3.png';
import fridgefy4 from '../projects/fridgefy/fridgefy4.png';
import chatApp1 from '../projects/real-time-chat-app/chatApp1.png';
import chatApp2 from '../projects/real-time-chat-app/chatApp2.png';
import chatApp3 from '../projects/real-time-chat-app/chatApp3.png';
import chatApp4 from '../projects/real-time-chat-app/chatApp4.png';
import chatApp5 from '../projects/real-time-chat-app/chatApp5.png';
import chatApp6 from '../projects/real-time-chat-app/chatApp6.png';





const projects = [
  {
    title: "Interview Scheduler",
    description: "Interview Scheduler is a single page application (SPA) built with React that allows users to book, edit and cancel interviews.",
    imageUrl: [interviewScheduler1, interviewScheduler2,interviewScheduler3],
    techStack:"PostgreSQL React.js Scss Node.js ",
    type:"Group Project",
    role:"Setting up routes for passing the interview student name   Creating table in PostSQL   Implementing booking function",
    learned:"Manage data through PostSQL   Setting up different routes at the same time   Dividing roles between team"
  },
  {
    title: "Fridgefy",
    description: "It is a web app that allows you to store your recipes and ingredients that you have in a fridge. Recipes can be filtered by ingredients, cuisine, diet and intolerances.",
    imageUrl: [fridgefy1, fridgefy2,fridgefy3,fridgefy4],
    techStack:"Next.js Styled-components React-router Redux ",
    type:"Group Project",
    role:"Implementing remove recipe function   Creating pop up window when users click on recipe   Mobile responsive styling",
    learned:"Manage data through local storage   Understanding Redux   Communication and solving problems in a big group"
  },
  {
    title: "Real Time Chat App",
    description: "It is a real-time chat application provides a simple and user-friendly platform for one-on-one chat and managing user profile.",
    imageUrl: [chatApp1, chatApp2,chatApp3,chatApp4,chatApp5,chatApp6],
    techStack:"React.js CSS React-router WebSocket Express Node.js MongoDB Firebase",
    type:"Group Project",
    role:"Implementing client side password validation   Managing google login through Firebase   Managing user profile information",
    learned:"Using MongoDB for managing data   implementing google login through firebase   Using websocket for real time update"
  },
  // ... more projects
];
// function truncateDescription(description, maxLength = 100) {
//   if (description.length > maxLength) {
//     return description.substring(0, maxLength) + '...';
//   }
//   return description;
// }
function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);

  const openModal = useCallback(() => {
    document.body.style.overflow = 'hidden'; // Disable scrolling
    console.log('Opening modal with project:', projects[currentProjectIndex]);
    setIsModalOpen(true);
  }, [currentProjectIndex]);

  const closeModal = useCallback(() => {
    document.body.style.overflow = 'unset'; // Re-enable scrolling
    console.log('Closing modal');
    setIsModalOpen(false);
  }, []);
  
  // console.log('Rendering modal, open state:', isModalOpen);

  const currentProject = projects[currentProjectIndex];
  const { title, description, imageUrl } = currentProject;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsImageVisible(false);
      const timeoutId = setTimeout(() => {
        setCurrentImageIndex(prevIndex => 
          prevIndex + 1 < imageUrl.length ? prevIndex + 1 : 0
        );
        setIsImageVisible(true);
      }, 500);
      return () => clearTimeout(timeoutId);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [imageUrl.length, currentImageIndex]);
  const navigateProjects = useCallback((direction) => {
    setCurrentProjectIndex(prevIndex => {
      if (direction === 'prev') {
        return prevIndex > 0 ? prevIndex - 1 : projects.length - 1;
      } else {
        return prevIndex < projects.length - 1 ? prevIndex + 1 : 0;
      }
    });
  }, []);

  return (
    <div>
     <div className='project-whole'>
      <h2>Projects</h2>
      <div className="project-carousel">
        <button onClick={() => navigateProjects('prev')}>&lt;</button>
        <div className="project-body">
          <div className="project">
            <img 
              src={imageUrl[currentImageIndex]} 
              alt={title} 
              className={`project-image ${isImageVisible ? 'project-image-visible' : ''}`} 
            />
            <h3>{title}</h3>
            <p className="project-description">{description}</p>
            <span className="view-more" onClick={openModal}>View More</span>
          </div>
        </div>
        <button onClick={() => navigateProjects('next')}>&gt;</button>
      </div>
      {isModalOpen && (
        <ProjectModal project={projects[currentProjectIndex]} onClose={closeModal} />
      )}
    </div>
    </div>
  );
}
export default Projects;
