import React from 'react';
import './Resume.css'
const Resume = () => {
  return (
    <section id="resume">
      <h2>Currículum Vitae</h2>
      <p>Descarga mi CV en PDF para conocer más sobre mi experiencia laboral y académica.</p>
      <a href="/fotos/" download>Descargar CV Español</a>
      <a href="/fotos/" download>Download CV English</a>
    </section>
  );
};

export default Resume;