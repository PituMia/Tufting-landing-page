import React from "react";
import Foto from "../assets/hero3.jpg"

const Hero = () => {
    return (
        <section id="hero" className="position-relative">
            <div>
                <img
                    src={Foto}
                    alt="Hero image"
                    className="img-fluid w-100 hero-img"
                    style={{ height: "auto", minHeight: "70vh", objectFit: "cover" }}
                />
                {/* Texto dentro de la imagen */}
                <div className="scroll-text position-absolute bottom-0 start-50 translate-middle-x mb-4 w-100">
                    <span className="text-white fs-5 fs-md-1 fw-semibold text-uppercase text-center">
                        Desplázate hacia abajo
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero