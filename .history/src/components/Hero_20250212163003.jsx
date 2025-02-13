import React from "react";
import Foto from "../assets/hero2.jpg"

const Hero = () => {
    return (
        <div>
            <img src={Foto} alt="Hero image" className="img-fluid w-100 d-block" style={{ minHeight: "70vh" }}/>
        </div>
    )
}

export default Hero