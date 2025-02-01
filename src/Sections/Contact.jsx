import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import Bg from "../assets/DroneNight.jpg";

function Contact() {
    const location = useLocation();
    const contactRef = useRef(null);
    const [userData, setUserData] = useState({ name: "", email: "", mobile: "", message: "" });
    const handleForm = (e) => {
        e.preventDefault();
        console.log(userData);
    }

    useEffect(()=>{
        if(location.hash==="#contact" && contactRef.current){
            contactRef.current.scrollIntoView({behavior: 'smooth'});
        }
    },[location]);

    return (
        <>
            <div ref={contactRef} className='flex items-center justify-center flex-col px-5 md:px-10 pt-28 py-20 w-full' style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${Bg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <p className='text-secondary font-roman text-3xl sm:text-4xl font-semibold mb-10 text-center'>Want to Know more?</p>
                <div className='bg-black/20 backdrop-blur-xl rounded-xl p-5'>
                    <form onSubmit={handleForm} className='text-secondary font-poppins'>
                        <p className='text-center text-xl font-thin mb-5'>Get in Touch</p>
                        <div className='my-3'>
                            <input type="text" placeholder='Enter your name' value={userData.name} onChange={(e)=>{setUserData({...userData,name:e.target.value})}} className='border-b-2 border-secondary outline-none px-3 py-2 w-full xs:w-60 md:w-80' />
                        </div>
                        <div className='my-3'>
                            <input type="email" placeholder='Enter your Email' value={userData.email} onChange={(e)=>{setUserData({...userData,email:e.target.value})}} className='border-b-2 border-secondary outline-none px-3 py-2 w-full xs:w-60 md:w-80' />
                        </div>
                        <div className='my-3'>
                            <input type="number" placeholder='Enter your mobile number' value={userData.mobile} onChange={(e)=>{setUserData({...userData,mobile:e.target.value})}} className='border-b-2 border-secondary outline-none px-3 py-2 w-full xs:w-60 md:w-80' />
                        </div>
                        <div className='my-3'>
                            <textarea type="text" placeholder='Describe your Message' value={userData.message} onChange={(e)=>{setUserData({...userData,message:e.target.value})}} rows={3} className='border-b-2 border-secondary outline-none px-3 py-2 w-full xs:w-60 md:w-80' />
                        </div>
                        <div className='w-full flex items-center justify-center'>
                            <button type='submit' className='hover:bg-secondary hover:text-primary font-medium border border-secondary px-3 py-1 duration-300'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <iframe className='w-full 2xl:w-[80rem] h-[20rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.1197661209153!2d82.99170737438017!3d18.240441982799606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bc97f5834cfe9%3A0xe5e60bed4092f7f9!2sRahul%20Resorts!5e1!3m2!1sen!2sin!4v1738404388015!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </>
    )
}

export default Contact