import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'ALFIL DIGITAL',
    description: 'Tienda en línea de productos digitales: órdenes, autorización, autenticación, metodos de pago ( PayPal, Mercado Pago y Tarjetas) , panel de administrador, correos electrónicos, diseño personalizado y depliegue en Cloud Server.',
    imageUrl: 'fondo-portafolio.png',
    liveUrl: 'https://alfildigital.com.ar',
    repoUrl: 'https://github.com/tuusuario/proyecto1'
  },
  {
    title: 'Visión Online',
    description: 'Plataforma que ofrece servicios web.',
    imageUrl: 'portfolio-background.jpg',
    liveUrl: 'https://webvision.store/',
    repoUrl: 'https://github.com/tuusuario/proyecto1'
  },
  {
    title: 'BL NEWS',
    description: 'Plataforma interactiva de noticias y foro alimentado por una API de novedades: Información actualizada.',
    imageUrl: 'contact-background.jpg',
    liveUrl: 'https://blnews.netlify.app/',
    repoUrl: 'https://github.com/tuusuario/proyecto1'
  },
  {
    title: 'API REST',
    description: 'Backend para eCommerce con estructura en capas que proporciona un sistema de gestión de productos, usuarios, pagos y pedidos, incluye chat en tiempo real entre clientes y vendedores, y cuenta con documentación del proyecto.',
    imageUrl: 'services-background.jpg',
    liveUrl: '#',
    repoUrl: 'https://github.com/santic4/api49980.git'
  },
  // Añadir más proyectos aquí
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Proyectos</h2>
      <div className="portfolio-grid">
      {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.imageUrl} alt={project.title} />
            <div className='content-porta'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            </div>

            <div className='btn-proyects'>
            {project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
            )}
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Ver Código</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;