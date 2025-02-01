import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import MainImage from "../assets/DroneNight.jpg"

function Gallery() {
    const location = useLocation();
    const galleryRef = useRef(null);
    useEffect(() => {
        if (galleryRef.current && location.hash === '#gallery') {
            galleryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div ref={galleryRef} className='flex items-center justify-center flex-col py-20'>
            <div className='w-full lg:w-[50rem] xl:w-[60rem] flex items-center justify-center flex-col'>
                <p className='text-center font-semibold font-roman text-2xl xs:text-3xl md:text-5xl mb-10'>Gallery</p>
                <div style={{background:`url(${MainImage})`, backgroundPosition:"center", backgroundSize:"cover"}} className='w-full h-96 md:h-[30rem]'>
                    {/* <img src={MainImage} alt="Rahul Resorts Night Image" className='h-40'/> */}
                </div>
            </div>
        </div>
    )
}

export default Gallery