import React from "react";

const SupportSection = () => {
    return (
        <section className="support-section py-5" id="soporte">
            <div className="container">
                <h2 className="text-center mb-4">Soporte al Cliente</h2>
                <p className="text-center mb-5">
                    Queremos asegurarnos de que tu experiencia con nuestros productos
                    sea perfecta. Si tienes preguntas sobre la instalación, cuidado o
                    mantenimiento de tus alfombras, estamos aquí para ayudarte.
                </p>

                <div className="row">
                    <div className="col-lg-6">
                        <h5 className="mb-3">¿Cómo obtener ayuda?</h5>
                        <ul className="list-unstyled">
                            <li>
                                <strong>Instalación de alfombras: </strong>
                                Si necesitas ayuda con la instalación, consulta nuestra
                                guía detallada o contacta con nuestro equipo.
                            </li>
                            <li>
                                <strong>Mantenimiento y limpieza: </strong>
                                Te ofrecemos consejos prácticos para cuidar y mantener
                                tus alfombras siempre impecables.
                            </li>
                            <li>
                                <strong>Garantía de productos: </strong>
                                Nuestros productos están cubiertos por una garantía
                                que asegura su durabilidad y calidad.
                            </li>
                            <li>
                                <strong>Políticas de devolución: </strong>
                                Si no estás satisfecho con tu compra, consulta nuestras
                                políticas de devolución para más detalles.
                            </li>
                            <li>
                                <strong>Respuestas a preguntas frecuentes: </strong>
                                Visita nuestra sección de FAQs para obtener respuestas
                                rápidas a las preguntas más comunes.
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">
                        <img
                            src="path/to/support-image.jpg" // Reemplaza con la ruta de la imagen
                            alt="Soporte al cliente"
                            className="img-fluid rounded-3 shadow-sm"
                            style={{ maxHeight: "400px", objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;