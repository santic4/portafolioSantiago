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

        fetch('https://formspree.io/f/xknlrvqa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert('Mensaje enviado con éxito');
            setFormData({ name: '', email: '', message: '' }); // Limpiar formulario después del envío
        })
        .catch(error => {
            alert('Hubo un error al enviar el mensaje');
            console.error('Error:', error);
        });
    };
    
    return (
        <section id="contact">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Tu Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tu Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Tu Correo</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu Correo"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Tu Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tu Mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        className='textarea-message'
                        required
                    ></textarea>
                </div>
                <button className='btn-send' type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;
