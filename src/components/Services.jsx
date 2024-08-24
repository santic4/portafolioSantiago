import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Desarrollo Front-End',
    description: 'Diseño y maquetación de interfaces de usuario (UI) usando HTML, CSS y JavaScript.',
    description1: 'Creación de aplicaciones interactivas con React y frameworks/librerías.',
    description2: 'Adaptación de sitios web para que sean responsive y funcionen bien en dispositivos móviles.',
    description3: 'Optimización de la experiencia de usuario (UX).'
  },
  {
    title: 'Desarrollo Back-End',
    description: 'Desarrollo de APIs RESTful.',
    description1: 'Creación y mantenimiento de bases de datos.',
    description2: 'Adaptación de sitios web para que sean responsive y funcionen bien en dispositivos móviles.',
    description3: 'Integración de servicios de terceros, como pasarelas de pago o sistemas de correo electrónico.'
  },
  {
    title: 'Despliegue',
    description: 'Configuración y gestión de servidores (Apache, Nginx).',
    description1: 'Monitoreo y mantenimiento de la infraestructura',
    description2: 'Implementación de prácticas de seguridad en la infraestructura y el código.',
  },
  {
    title: 'Optimización y Mantenimiento',
    description: 'Refactorización de código para mejorar el rendimiento.',
    description1: 'Actualización de proyectos para utilizar las últimas tecnologías.',
    description2: 'Identificación y corrección de errores o bugs.',
    description3: 'Soporte y mantenimiento continuo del sitio web.'
  },
  {
    title: 'Desarrollo Full Stack',
    description: 'Desarrollo completo de aplicaciones web desde cero.',
    description1: 'Desarrollo de aplicaciones web en tiempo real (WebSockets).'
  },
  {
    title: 'Testing y Documentación',
    description: 'Módulos de testing unitarios e integrales para garantizar la correcta funcionalidad de los sistemas, con librerías como Mocha y Supertest.',
    description1: 'Documentación de API con el fin de facilitar su comprensión, integración y legibilidad; proporcionando una guía detallada de aspectos y funcionalidades.'
  },
  {
    title: 'Servicios Adicionales',
    description: 'Optimización SEO (Search Engine Optimization) para mejorar la visibilidad en buscadores.',
    description1: 'Creación de dashboards y paneles de administración personalizados.',
    description3: 'Integración con redes sociales y servicios externos.'
  }
];

const Services = () => {
  return (
    <section id="services">
      <h2>Servicios</h2>
      <div className="services-grid"  data-aos="fade">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            {service.description && <p>- {service.description}</p>}
            {service.description1 && <p>- {service.description1}</p>}
            {service.description2 && <p>- {service.description2}</p>}
            {service.description3 && <p>- {service.description3}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
