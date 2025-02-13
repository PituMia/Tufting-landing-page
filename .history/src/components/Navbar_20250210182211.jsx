import React from "react";
import Logo from "../assets/logo.jpg"


const NavbarLinks = [
    {
        id: 1,
        title: "Inicio",
        link: "/"
    },
    {
        id: 2,
        title: "Nosotros",
        link: "#"
    },
    {
        id: 3,
        title: "Contactos",
        link: "#"
    },
    {
        id: 4,
        title: "Soporte",
        link: "#"
    },

]


const Navbar = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div>
                <ul>

                    {NavbarLinks.Map((link) => (
                        <li 
                        key = {link.id}>
                            
                        </li>
                    ))}

                </ul>
            </div>
        </div >
    )

}

export default Navbar