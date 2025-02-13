import React from "react";
import Foto from "../assets/hero3.jpg"

const Hero = () => {
    return (
        <section id="hero" style={{
            padding: "40px 0",
            borderBottom: "5px dashed #D1A5A6", /* Estilo de línea como cuerda */
            background: "#f9f9f9"
          }}><div>
            <img
                src={Foto}
                alt="Hero image"
                className="img-fluid w-100 hero-img"
                style={{ height: "auto", minHeight: "70vh", objectFit: "cover" }}
            />
        </div>
        </section>
    )
}

export default Hero