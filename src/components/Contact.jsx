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
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="name">Tu Nombre</label>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Tu Correo</label>
                </div>
                <div className="form-group">
                    <textarea
                        id="message"
                        name="message"
                        placeholder=" "
                        value={formData.message}
                        onChange={handleChange}
                        className='textarea-message'
                        required
                    ></textarea>
                    <label htmlFor="message">Tu Mensaje</label>
                </div>
                <button className='btn-send' type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;
