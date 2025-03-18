import React from 'react';
import './Home.css'

const Home = () => {

  return (
    <section 
      id="home" 
      className="relative bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      
      <div className='container-left'>
        <div className="home-content-left">
          <h1>¡Hola! Soy Santiago Cañú</h1>
          <h2>Desarrollador de Software</h2>
          <h3>Backend y Frontend</h3>
        </div>
        <div className="home-content">
          <img className='logo-home' src='perfil-pic.jpg' alt="portafolio"></img>
        </div>
      </div>

      <div className="skills-container">
        <div className="skill"><img src="nodejs.png" alt="Node JS"></img></div>
        <div className="skill"><img src="js.png" alt="JavaScript"></img></div>
        <div className="skill"><img src="react.png" alt="React"></img></div>
        <div className="skill"><img src="html-5.png" alt="HTML"></img></div>
        <div className="skill"><img src="css3.png" alt="CSS"></img></div>
        <div className="skill"><img src="express-js.png" alt="express js"></img></div>
        <div className="skill"><img src="git.png" alt="git"></img></div>
        <div className="skill"><img src="github.png" alt="github"></img></div>
        <div className="skill"><img src="database.png" alt="database"></img></div>
        <div className="skill"><img src="figma.png" alt="figma"></img></div>
        <div className="skill"><img src="firebase.png" alt="firebase"></img></div>
        <div className="skill"><img src="canva.png" alt="canva"></img></div>
      </div>

    </section>
  );
};

export default Home;
