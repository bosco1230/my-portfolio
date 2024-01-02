import React, { useState, useEffect } from 'react';

function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setIsImageVisible(false); 

      const changeImageTimeout = setTimeout(() => {
        setCurrentImageIndex(prevIndex => 
          prevIndex + 1 < project.imageUrl.length ? prevIndex + 1 : 0
        );
        setIsImageVisible(true); 
      }, 500); 

      return () => {
        clearTimeout(changeImageTimeout);
        clearTimeout(fadeOutTimeout);
      };
    }, 2500); 

    return () => clearTimeout(fadeOutTimeout);
  }, [currentImageIndex, project.imageUrl.length]);

  if (!project) {
    return null;
  }

  const techStackItems = project.techStack ? project.techStack.split(" ") : [];
  const roleItems = project.role ? project.role.split("   ") : [];
  const learnItems = project.learned ? project.learned.split("   ") : [];

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        {project.imageUrl && project.imageUrl.length > 0 && (
          <img 
            key={currentImageIndex}
            src={project.imageUrl[currentImageIndex]} 
            alt={`Project ${project.title} - ${currentImageIndex}`} 
            className={`modal-image ${isImageVisible ? 'modal-image-visible' : ''}`} 
          />
        )}
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {techStackItems.length > 0 && (
          <>
            <h3>Tech Stack</h3>
            <ul>
              {techStackItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Project Type */}
        <h3>Project Type</h3>
        <p>{project.type}</p>

        {roleItems.length > 0 && (
          <>
            <h3>Role</h3>
            <ul>
              {roleItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {learnItems.length > 0 && (
          <>
            <h3>What I Learned</h3>
            <ul>
              {learnItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;
