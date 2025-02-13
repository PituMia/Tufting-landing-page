import React, { useState } from "react";
import Taller from "../assets/taller.jpg"

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Logic to handle form send
        console.log("Formulario enviado", formData);
    };

    return (
        <section className="contact-section py-5" id="contacto" style={{
            padding: "40px 0",
            borderBottom: "5px dashed #D1A5A6", /* Estilo de línea como cuerda */
            background: "#f9f9f9"
          }}>
            <div className="container">
                <h2 className="text-center mb-4">Contáctanos</h2>
                <p className="text-center mb-5">
                    ¿Tienes alguna pregunta sobre nuestras alfombras de tufting o
                    quieres hacer un pedido personalizado? Estamos aquí para
                    ayudarte. No dudes en ponerte en contacto con nosotros.
                </p>

                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Teléfono (opcional)
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Mensaje
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </form>
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">
                        <img
                            src={Taller} 
                            alt="Tu taller de tufting"
                            className="img-fluid rounded-3 shadow-sm"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>
                </div>

                <div className="text-center mt-5">
                    <p className="small">
                        <strong>Dirección: </strong> Calle Ficticia 123, Ciudad, País
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;