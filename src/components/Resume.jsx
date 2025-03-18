import React from 'react';
import './Resume.css'
const Resume = () => {
  return (
    <section id="resume">
      <h2>Currículum Vitae</h2>

      <p>Descarga mi CV en PDF para conocer más sobre mi experiencia laboral y académica.</p>

      <div className='btn-resu'>
      <a href="santiagocanucv.pdf" download>Descargar CV Español</a>
      <a href="santiagocanucv.pdf" download>Download CV English</a>
      </div>
    </section>
  );
};

export default Resume;