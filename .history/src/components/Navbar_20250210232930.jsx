import React from "react";
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
    return (
        <nav>
            <div className="d-flex justify-content-between">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
                <div>
                    <ul className="list-unstyled">

                        {NavbarLinks.map((link) => (
                            <li
                                key={link.id}
                            >
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <ul className="list-unstyled">

                        {SocialMedia.map((link) => (
                            <li
                                key={link.id}
                            >
                                <a href={link.link}>
                                    <i className={`${link.icon}`}>

                                    </i>
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
            </div >
        </nav>
    )

}

export default Navbar