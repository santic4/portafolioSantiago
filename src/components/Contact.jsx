import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Manejar el envío del formulario aquí
    };
  
    return (
      <section id="contact">
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu Correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tu Mensaje"
            value={formData.message}
            onChange={handleChange}
            className='textarea-message'
            required
          ></textarea>
          <button className='btn-send' type="submit">Enviar</button>
        </form>
      </section>
    );
  };

export default Contact;
