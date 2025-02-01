import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SwiperCard from "../Components/SwiperCard";
import MarqueeElement from "../Components/MarqeeElement";

import Bg from "../assets/Drone1.jpg"

import Room1 from "../assets/Rooms/DeluxAC.jpg";
import Room2 from "../assets/Rooms/DeluxRoomNAC.jpg";
import Room3 from "../assets/Rooms/PremiumSuit.jpg";

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
            <div ref={aboutRef} className="bg-bg py-20 pt-28 px-5 sm:px-10 flex items-center justify-center flex-col">
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
            <div className="flex items-center justify-center flex-wrap gap-5 py-20 px-5" style={{background:`linear-gradient(to bottom, rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Bg})`,backgroundPosition:"center",backgroundSize:"cover"}}>
                {/* <Swiper /> */}
                <SwiperCard
                    image={Room2}
                    link={
                        "https://www.makemytrip.com/hotels/rahul_resorts-details-ananthagiri.html?msockid=124c080dd42564983f441d8dd52d65a4"
                    }
                    title={"DELUXE NON AC ROOM"}
                    description={"Cozy, budget-friendly, spacious, peaceful, comfortable."}
                />
                <SwiperCard
                    image={Room3}
                    link={
                        "https://www.makemytrip.com/hotels/rahul_resorts-details-ananthagiri.html?msockid=124c080dd42564983f441d8dd52d65a4"
                    }
                    title={"PREMIUM SUIT AC ROOM"}
                    description={"Luxurious, elegant, spacious, modern, exclusive."}
                />
                <SwiperCard
                    image={Room1}
                    link={
                        "https://www.makemytrip.com/hotels/rahul_resorts-details-ananthagiri.html?msockid=124c080dd42564983f441d8dd52d65a4"
                    }
                    title={"DELUXE AC ROOM"}
                    description={"Stylish, airy, relaxing, cool, inviting."}
                />
            </div>
            <div className="flex items-center justify-center bg-bg">
                <div className=" w-full lg:w-[50rem] px-5 py-20">
                    <MarqueeElement />
                </div>
            </div>
        </>
    );
}

export default About;
