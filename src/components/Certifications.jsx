import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'Desarrollo Web',
    issuer: 'Coder House',
    date: 'Fecha de obtención: 11 de abril de 2023',
    link: 'https://www.coderhouse.com/ar/certificados/645cacea4178d8000279bb17'
  },
  {
    title: 'JavaScript',
    issuer: 'Coder House',
    date: 'Fecha de obtención: 22 de junio de 2023',
    link: 'https://www.coderhouse.com/ar/certificados/64a9f6d2ccd0430002f1e843'
  },
  {
    title: 'React Js',
    issuer: 'Coder House',
    date: 'Fecha de obtención: 10 de agosto de 2023',
    link: 'https://www.coderhouse.com/ar/certificados/64f7bed86ac60f7c46c33e73'
  },
  {
    title: 'Front End',
    issuer: 'Coder House',
    date: 'Fecha de obtención: 10 de agosto de 2023',
    link: 'https://www.coderhouse.com/ar/certificados/64f7bed96ac60f1ab6c33e75'
  },
  {
    title: 'Backend',
    issuer: 'Coder House',
    date: 'Fecha de obtención: 21 de marzo de 2024',
    link: 'https://www.coderhouse.com/ar/certificados/6622bd0bdc75eab8c9406a94/?lang=es'
  },
  {
    title: 'Full Stack',
    issuer: 'Coder House',
    date: 'Fecha de obtención: 21 de marzo de 2024',
    link: 'https://www.coderhouse.com/ar/certificados/663151d8e45afa0019264b8b/?lang=es'
  }
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certificaciones</h2>
      <div className="certifications-grid"  data-aos="fade-up">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">Ver Certificado</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
