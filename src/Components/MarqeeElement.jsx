import React from 'react'
import Marquee from "react-fast-marquee";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsWash, faWifi, faHeadphones, faFan, faTemperatureFull, faBroom } from '@fortawesome/free-solid-svg-icons';

function MarqeeElement() {
  return (
    <>
        <div className='flex items-center justify-center flex-col w-full font-poppins'>
            <p className='font-roman text-3xl xs:text-4xl md:text-5xl font-semibold uppercase'>Our Amenities</p>
            <Marquee pauseOnHover autoFill gradient gradientColor='#f7f7f7' gradientWidth={20} className='mt-10'>
                <div className='flex items-center justify-start flex-col gap-2 mx-3'>
                    <FontAwesomeIcon icon={faFan} className='text-primary text-3xl'/>
                    <p className='text-center'>Air<br />Conditioner</p>
                </div>
                <div className='flex items-center justify-start flex-col gap-2 mx-3'>
                    <FontAwesomeIcon icon={faHandsWash} className='text-primary text-3xl'/>
                    <p className='text-center'>Sanitization</p>
                </div>
                <div className='flex items-center justify-start flex-col gap-2 mx-3'>
                    <FontAwesomeIcon icon={faHeadphones} className='text-primary text-3xl'/>
                    <p className='text-center'>24/7<br />Support</p>
                </div>
                <div className='flex items-center justify-start flex-col gap-2 mx-3'>
                    <FontAwesomeIcon icon={faWifi} className='text-primary text-3xl'/>
                    <p className='text-center'>Free Wifi</p>
                </div>
                <div className='flex items-center justify-start flex-col gap-2 mx-3'>
                    <FontAwesomeIcon icon={faTemperatureFull} className='text-primary text-3xl'/>
                    <p className='text-center'>Hot & Cold<br />Water</p>
                </div>
                <div className='flex items-center justify-start flex-col gap-2 mx-3'>
                    <FontAwesomeIcon icon={faHandsWash} className='text-primary text-3xl'/>
                    <p className='text-center'>Sanitization</p>
                </div>
                <div className='flex items-center justify-start flex-col gap-2 mx-3'>
                    <FontAwesomeIcon icon={faBroom} className='text-primary text-3xl'/>
                    <p className='text-center'>Neat &<br />Clean</p>
                </div>
            </Marquee>
        </div>
    </>
  )
}

export default MarqeeElement