import React from "react";
import Foto from "../assets/hero2.jpg"

const Hero = () => {
    return (
        <div>
            <img 
  src={Foto} 
  alt="Hero image" 
  className="img-fluid w-100 hero-img" 
  style={{ height: "auto", minHeight: "70vh", objectFit: "cover" }}
/>
        </div>
    )
}

export default Hero