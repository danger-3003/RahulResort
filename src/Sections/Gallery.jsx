import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import MainImage from "../assets/DroneNight.jpg"
import Drone1 from "../assets/Drone1.jpg"
import Drone2 from "../assets/Drone2.jpg"
import River from "../assets/River.jpg"
import Fire from "../assets/CampFire.jpg"
import NightView from "../assets/NightSky.jpg"

import GroupPic from "../assets/GroupPic.jpg"
import DroneNight from "../assets/DroneNight.jpg"

function Gallery() {
    const location = useLocation();
    const galleryRef = useRef(null);
    useEffect(() => {
        if (galleryRef.current && location.hash === '#gallery') {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div ref={galleryRef} className='flex items-center justify-center flex-col pt-20'>
            <div className='w-full lg:w-[50rem] xl:w-[60rem] flex items-center justify-center flex-col pb-10'>
                <p className='text-center font-semibold font-roman text-2xl xs:text-3xl md:text-5xl mb-10'>Gallery</p>
                <div style={{ background: `url(${MainImage})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full h-52 xs:h-60 sm:h-96 md:h-[30rem] rounded-2xl shadow-lg shadow-black/20'></div>
                <div className='w-screen xl:w-full flex items-center justify-center flex-wrap my-5 gap-[2%] lg:gap-[1rem]'>
                    <div className='w-[45%] lg:w-[27.5rem]'>
                        <img src={Drone1} alt="Drone Shot 1" className='rounded-2xl shadow-lg shadow-black/20' />
                    </div>
                    <div className='w-[45%] lg:w-[27.5rem]'>
                        <img src={Drone2} alt="Drone Shot 2" className='rounded-2xl shadow-lg shadow-black/20' />
                    </div>
                </div>
                <div className='hidden xs:flex w-screen xl:w-full items-center justify-center flex-wrap gap-[2%] lg:gap-[1rem]'>
                    <div className='w-[30%] lg:w-[18rem]'>
                        <img src={River} alt="Rahul Resorts River" className='rounded-2xl shadow-lg shadow-black/20' />
                    </div>
                    <div className='w-[30%] lg:w-[18rem]'>
                        <img src={Fire} alt="Rahul Resorts CampFire" className='rounded-2xl shadow-lg shadow-black/20' />
                    </div>
                    <div className='w-[30%] lg:w-[18rem]'>
                        <img src={NightView} alt="Rahul Resorts CampFire" className='rounded-2xl shadow-lg shadow-black/20' />
                    </div>
                </div>
            </div>
            <div className='bg-bg w-full py-10 flex items-center justify-center'>
                <div className='flex items-center justify-center flex-wrap px-5 w-full gap-10 h-max lg:w-[50rem] py-10'>
                    <div className='hidden md:block'>
                        <img src={DroneNight} alt="Rahul Resort Night View" className='w-[23rem] h-[35rem] lg:w-[25rem] lg:h-[33rem] object-center object-cover' />
                    </div>
                    <div className='w-[25rem] md:w-[18rem] lg:w-[20rem]'>
                        <img src={GroupPic} alt="Rahul Resort Customers" className='w-full object-cover' />
                        <div className='mt-10'>
                            <p className='font-roman text-3xl mb-3'>Your Secluded Haven in Araku Valley</p>
                            <p className='font-poppins font-light'>Escape to the tranquility of Rahul Resort, nestled in the heart of the stunning Araku Valley. Surrounded by lush tropical flora and serene landscapes, our resort offers the perfect sanctuary for relaxation and rejuvenation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery