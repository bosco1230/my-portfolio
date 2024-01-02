import React from 'react';

const Header = ({ scrollToAbout }) => {
  return (
    <header className="App-header">
      <div className='header'>
        <div>
        <h1>Full stack web developer</h1>
        <p>Hi! I'm Bosco Lam, a passionate Full Stack web developer based in Vancouver, BC <img src="https://cdn-icons-png.flaticon.com/512/197/197430.png" alt="Canada Flag" style={{ width: '20px', height: '15px', verticalAlign: 'middle' }} /></p>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/kai-on-lam-a9a705260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: '40px', height: '40px', marginRight: '10px' }}/>
        </a>
        <a href="https://github.com/bosco1230" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{ width: '40px', height: '40px' }}/>
        </a>
      </div>
        </div>
        <img src="/DSC01409.jpg" alt="Bosco Lam" className="App-image" />
      </div>
      <div className="tech-stack">
      <p>Tech Stack:</p>
      <div className="tech-logos">
        <img src="https://cdn-icons-png.flaticon.com/512/888/888859.png" alt="HTML" title="HTML" />
        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS" title="CSS"  />
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" title="JavaScript"  />
        <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" title="React"  />
        <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="Node.js" title="Node.js"  />
        <img src="https://cdn-icons-png.flaticon.com/512/919/919836.png" alt="MongoDB" title="MongoDB" />
              </div>
    </div>
      <div className="scroll-to-continue">
        <button onClick={scrollToAbout} className="scroll-button">&#8595;</button>
      </div>
    </header>
  );
};

export default Header;
