import React from "react";
import Foto from "../assets/hero.jpg"

const Hero = () => {
    return (
        <div>
            <img 
  src={Foto} 
  srcSet={`${Foto} 600w, ${Foto} 1000w, ${Foto} 1920w`} 
  alt="Hero image" 
/>
        </div>
    )
}

export default Hero