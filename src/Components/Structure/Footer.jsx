import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='w-full bg-black h-max text-secondary flex items-center justify-center flex-col pt-10'>
            <div className='font-poppins font-extralight flex items-center justify-center flex-wrap gap-3 mb-10'>
                <Link to="/">Home</Link>
                <Link to="/#about">About</Link>
                <Link to="/#gallery">Gallery</Link>
                <Link to="/#contact">Contact</Link>
            </div>
            <div className='w-full px-5 lg:w-[60rem] pb-10 flex items-center justify-center md:justify-between flex-wrap gap-5 sm:gap-10 md:gap-5'>
                <div>
                    <img src={Logo} alt="" className='h-40 w-40'/>
                </div>
                <div className='w-80 flex items-start justify-center flex-col gap-2'>
                    <div className='flex items-start justify-center flex-row'>
                        <FontAwesomeIcon icon={faLocationDot} className='mt-1 mr-5 text-xl'/>
                        <a href="https://maps.app.goo.gl/JzPcZGt7CmCtPsAS7">Rahul Resorts, Ananthagiri, Mardhaguda, Araku - Visakhapatnam Rd, Araku Valley, Andhra Pradesh 535145</a>
                    </div>
                    <div className='flex items-start justify-center flex-row'>
                        <FontAwesomeIcon icon={faPhone} className='mt-1 mr-4 text-lg'/>
                        <a href="tel:+91 9121484444">+91 9121484444</a>
                    </div>
                    <div className='flex items-start justify-center flex-row'>
                        <FontAwesomeIcon icon={faEnvelope} className='mt-1 mr-4 text-lg'/>
                        <a href="mailto:rahulresortvizag@gmail.com">rahulresortvizag@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className='w-full px-5 sm:px-10'>
                <div className='w-full border-t border-secondary/50 flex items-center justify-center'>
                    <div className='w-full py-4 lg:w-[60rem] flex items-center justify-center xs:justify-between flex-col xs:flex-row'>
                        <div className=' flex items-center justify-start gap-5'>
                            <a href="">
                                <FontAwesomeIcon icon={faWhatsapp} className='text-secondary text-2xl'/>
                            </a>
                            <a href="">
                                <FontAwesomeIcon icon={faInstagram} className='text-secondary text-2xl'/>
                            </a>
                            <a href="">
                                <FontAwesomeIcon icon={faFacebook} className='text-secondary text-2xl'/>
                            </a>
                        </div>
                        <div className='text-secondary font-roman mt-2 xs:mt-0'>
                            <p>Rahul Resorts, Araku</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer