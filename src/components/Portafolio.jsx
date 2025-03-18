import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'SELLER SENDER',
    description: 'Esta aplicación automatiza la postventa en Mercado Libre con webhooks. Cuando se concreta una venta, envía mensajes automáticos al comprador, incluyendo el link del producto.Desde el panel de administración, el usuario ve en tiempo real sus publicaciones, asigna mensajes personalizados y crea plantillas. Además, la app guarda los datos y marca las ventas como entregadas. Desarrollada con Node.js y Express, usa MongoDB para la base de datos, React y CSS en el frontend, y autenticación con Mercado Libre. Todo el proceso es 100% automatizado.',
    imageUrl: 'backend-dev.webp',
    liveUrl: 'https://sellersender.onrender.com',
    repoUrl: 'https://github.com/santic4/SellerSender.git'
  },
  {
    title: 'INDIS Indumentaria',
    description: 'E-commerce de ropa desarrollado con React y Node.js. Incluye un carrito dinámico, checkout con Mercado Pago, cálculo de envío según ubicación, filtros avanzados de productos y un panel administrador para gestionar el negocio. El sitio está optimizado para SEO, integrado con Google Search Console y Google Analytics, y corre en un servidor en la nube con NGINX y PM2. Todo con un diseño responsive y funcionalidades modernas.',
    imageUrl: 'gif-indis.gif',
    liveUrl: 'https://indisindumentaria.com.ar',
    repoUrl: 'https://github.com/santic4/api49980.git',
    maintenance: true
  },
  {
    title: 'ALFIL DIGITAL',
    description: 'Tienda en línea de productos digitales: órdenes, autorización, autenticación, metodos de pago ( PayPal, Mercado Pago y Tarjetas) , panel de administrador, correos electrónicos, diseño personalizado y depliegue en Cloud Server.',
    imageUrl: 'alfildigital.gif',
    liveUrl: 'https://alfildigital.com.ar',
    repoUrl: 'https://github.com/santic4/alfil-digital.git'
  },
  {
    title: 'BL NEWS',
    description: 'Plataforma interactiva de noticias y foro alimentado por una API de novedades: Información actualizada.',
    imageUrl: 'blnews.gif',
    liveUrl: 'https://blnews.netlify.app/',
    repoUrl: 'https://github.com/santic4/BlNews.git'
  },
  {
    title: 'Visión Online',
    description: 'Plataforma que ofrece servicios web.',
    imageUrl: 'visiononline.gif',
    liveUrl: 'https://webvision.store/',
    repoUrl: 'https://github.com/santic4/webSantiago.git'
  },
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
              {project.maintenance ? (
                <div className="tooltip-container">
                  <span className="btn-disabled">Ver Proyecto</span>
                  <div className="tooltip">🚧 En mantenimiento 🚧</div>
                </div>
              ) : (
                <a className='btn-proyects-a' href={project.liveUrl} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
              )}
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repositorio de GitHub</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;