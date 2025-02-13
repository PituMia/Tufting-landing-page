import React from "react";
import Foto from "../assets/hero.jpg"

const Hero = () => {
    return (
        <div>
            <img src={Foto} srcset="hero-small.jpg 600w, hero-medium.jpg 1000w, hero-large.jpg 1920w" alt="Hero image"/>
        </div>
    )
}

export default Hero