import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Button from "../Button/Button";

function Navbar() {
    const [menu, setMenu] = useState(false);

    const handelMenu = () => {
        setMenu(!menu);
    };

    return (
        <div className="fixed top-0 w-full font-poppins z-20">
            <div className="absolute bg-secondary w-full z-20 h-16">
                <div className="h-full py-2 flex items-center justify-center border-b border-primary/60">
                    <div
                        className="absolute group hover:bg-primary bg-secondary group w-8 h-8 left-5 rounded-full border border-primary flex items-center justify-center duration-300"
                        onClick={handelMenu}
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className="group-hover:text-secondary text-primary duration-300"
                        />
                    </div>
                    <div className="h-full">
                        <img
                            src={Logo}
                            alt="Rahul Resorts"
                            className="h-full"
                        />
                    </div>
                    <div className="group absolute right-5">
                        <Button
                            className={
                                "w-max bg-primary text-secondary group-hover:bg-secondary group-hover:text-primary border border-primary duration-300"
                            }
                            link={"https://www.makemytrip.com/hotels/rahul_resorts-details-ananthagiri.html?msockid=124c080dd42564983f441d8dd52d65a4"}
                            value={"Book"}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`text-primary bg-secondary shadow-lg shadow-black/30 h-screen w-full xs:w-72 absolute z-10 pt-24 top-0 ${
                    menu ? "left-0" : "-left-full sm:-left-80"
                } duration-500`}
            >
                <div className="flex items-center justify-start flex-col h-full w-full">
                    <div className="w-full px-5">
                        <div className="uppercase font-semibold border-b border-primary/40 flex items-center justify-between flex-row px-3 h-12">
                            <div>
                                <a href="tel:+">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="text-xl text-primary"
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="mailto:">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="text-2xl text-primary"
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="mailto:">
                                    <FontAwesomeIcon
                                        icon={faWhatsapp}
                                        className="text-2xl text-primary"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="w-full px-5" onClick={handelMenu}>
                        <div className="uppercase font-semibold border-b border-primary/40 flex items-center px-3 h-12 hover:bg-primary/10 duration-300">
                            Home
                        </div>
                    </Link>
                    <Link to="#about" className="w-full px-5" onClick={handelMenu}>
                        <div className="uppercase font-semibold border-b border-primary/40 flex items-center px-3 h-12 hover:bg-primary/10 duration-300">
                            About
                        </div>
                    </Link>
                    <Link to="#gallery" className="w-full px-5" onClick={handelMenu}>
                        <div className="uppercase font-semibold border-b border-primary/40 flex items-center px-3 h-12 hover:bg-primary/10 duration-300">
                            Gallery
                        </div>
                    </Link>
                    <Link to="#contact" className="w-full px-5" onClick={handelMenu}>
                        <div className="uppercase font-semibold flex items-center px-3 h-12 hover:bg-primary/10 duration-300">
                            Contact
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
