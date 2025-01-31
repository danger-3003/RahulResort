import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swiper from "../Components/Swiper/Swiper";

function About() {
    const location = useLocation();
    const aboutRef = useRef();

    useEffect(() => {
        if (location.hash === "#about" && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <div ref={aboutRef} className="bg-bg py-20 px-5 sm:px-10 flex items-center justify-center flex-col">
                <div>
                    <div className="flex items-center justify-center flex-col text-center w-[90vw] lg:w-[50rem]">
                        <p className="font-roman text-3xl sm:text-4xl">- Rahul Resort -</p>
                        <p className="mt-5 font-poppins">
                            Nestled in the lush greenery of Araku Valley, Rahul
                            Resorts blends luxury with nature. Surrounded by rolling
                            hills and misty mornings, it's a serene escape for
                            relaxation and adventure. Enjoy elegant stays, local
                            cuisine, and the tranquil beauty of Araku for an
                            unforgettable experience.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Swiper />
            </div>
        </>
    );
}

export default About;
