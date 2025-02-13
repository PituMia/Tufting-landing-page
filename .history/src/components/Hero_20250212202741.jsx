import React from "react";
import Foto from "../assets/hero3.jpg"

const Hero = () => {
    return (
        <section id="hero" ><div>
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