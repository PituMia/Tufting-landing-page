import React, { useState } from "react";
import Logo from "../assets/logo.png"



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

const SocialMedia = [
    {
        id: 1,
        title: "Instagram",
        link: "https://www.instagram.com",
        icon: "bi bi-instagram"
    },
    {
        id: 2,
        title: "Tiktok",
        link: "https://www.tiktok.com",
        icon: "bi bi-tiktok"
    },
    {
        id: 3,
        title: "Facebook",
        link: "https://www.facebook.com",
        icon: "bi bi-facebook"
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="position-relative shadow">
            <div className="d-flex justify-content-between align-items-center px-3  px-sm-4 fixed-top ">
                <div className="px-0 py-0" style={{ Width: "100px" }}>
                    <img src={Logo} alt="Logo" style={{ width: "100px" }} className="img-fluid" />
                </div>
                <div>
                    <ul className="list-unstyled d-flex gap-2 gap-sm-4 gap-md-5 m-0 d-none d-sm-flex d-md-flex shadow-none shadow-lg-sm"">

                        {NavbarLinks.map((link) => (
                            <li
                                key={link.id}
                            >
                                <a
                                    href={link.link}
                                    className="fs-6 fs-sm-5 fs-md-4"
                                    style={{
                                        textDecoration: "none",
                                        display: "inline-block",
                                        transition: "transform 0.3s ease-in-out"
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/*Boton para moviles */}
                <div className="d-sm-none d-flex justify-content-center align-items-center ms-auto">
                    <button onClick={toggleMenu}>
                        {!isOpen ? <i className="bi bi-list"></i> : <i className="bi bi-x-lg"></i>}
                    </button>
                </div>


                <div>
                    <ul className="list-unstyled gap-4 d-none d-sm-flex d-md-flex">

                        {SocialMedia.map((link) => (
                            <li
                                key={link.id}
                            >
                                <a href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "inline-block",
                                        transition: "transform 0.3s ease-in-out"
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}

                                >
                                    <i className={`${link.icon}`}>

                                    </i>
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>

            </div >
            <div className={`position-absolute top-100 start-0 w-100  p-3 ${
                    isOpen ? "d-flex" : "d-none"
                } flex-column align-items-center gap-3 d-sm-none shadow`}>
                {/* Lista de navegación en columna */}
                <ul className="list-unstyled d-grid gap-2">
                    {NavbarLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.link}
                                className="fs-6 fs-sm-5 fs-md-4"
                                style={{
                                    textDecoration: "none",
                                    display: "inline-block",
                                    transition: "transform 0.3s ease-in-out",
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Lista de redes sociales en columna */}
                <ul className="list-unstyled d-flex gap-2">
                    {SocialMedia.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block",
                                    transition: "transform 0.3s ease-in-out",
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <i className={link.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


        </nav>
    )

}

export default Navbar