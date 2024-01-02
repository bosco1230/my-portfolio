import React from 'react';

function About({ onProjectsClick }) {
  const handleImageClick = () => {
    window.location.href = '/personal-info-page'; // Replace with your URL
  };
  
  return (
    <div className='about-body'>
    <div className='about-section'>
      <div className='about-more'>
      <img src="/me.jpg" alt="Bosco Lam" className="about-image" onClick={handleImageClick} />
      <p className="image-click-prompt">Click on the image to know more about my personal life!</p>
      </div>
      <div className='about'>
        <h2>About Me</h2>
        <h4>A dedicated web developer based in Vancouver, BC</h4>
        <p>Hello! I'm Bosco, a junior web developer with an impressive arsenal skills in HTML, CSS, Javascript, React, Node. I excel in designing and maintaining responsive websites that offers a smooth user experience also managing backend data to ensure safety of user's information. I am also a team player who thirves in collaborating with cross-functional teams to produce outstanding web applications</p>
      </div>
    </div>
    <button onClick={onProjectsClick} className="view-projects-button">View My Projects!</button>
    </div>
  );
}


export default About;
