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
            <div className="d-flex justify-content-between align-items-center px-3  px-sm-4 fixed-top">
                <div className="px-0 py-0" style={{ maxWidth: "10vw" }}>
                    <img src={Logo} alt="Logo" style={{ width: "100px" }} className="img-fluid" />
                </div>
                <div>
                    <ul className="list-unstyled d-flex gap-2 gap-sm-4 gap-md-5 m-0">

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

                <div>
                    <ul className="list-unstyled ">

                        {SocialMedia.map((link) => (
                            <li
                                key={link.id}
                            >
                                <a href={link.link}
                                    target="_blank"
                                    rel="noopener norefferer"
                                    style={{
                                        
                                        display: "inline-block",
                                        transition: "transform 0.3s ease-in-out"
                                    }}
                                >
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