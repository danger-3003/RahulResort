import React,{useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import Bg from "../assets/Entrance.jpg";
import Button from "../Components/Button/LinkButton";

function Home() {
    const location = useLocation();
    const homeRef = useRef(null);

    useEffect(()=>{
        if(location.pathname=="/" && homeRef.current){
            homeRef.current.scrollIntoView({behavior: 'smooth'});
        }
    },[location]);

    return (
        <div ref={homeRef} className="py-20 pt-32 md:py-40 md:pt-52 lg:pt-60 lg:pb-60 font-poppins h-max w-full flex items-center justify-center" style={{background:`linear-gradient(to bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url(${Bg})`,backgroundPosition:"center",backgroundSize:"cover"}}>
            <div className="text-secondary flex items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-col text-center w-[90vw] lg:w-[40rem] xl:w-[50rem]">
                    <p className="font-roman text-2xl sm:text-4xl tracking-wider uppercase font-extralight"><span className="font-semibold">Rahul Resorts</span> – A Serene Escape in <span className="font-semibold">Araku Valley.</span></p>
                    <p className="font-poppins font-extralight text-lg sm:text-xl mt-5">Nestled amidst the lush greenery of Araku Valley, Rahul Resorts offers a perfect blend of luxury and nature.</p>
                </div>
                <div className="mt-5 group">
                    <Button value={"Explore"} className={"border border-secondary group-hover:bg-secondary group-hover:text-primary duration-300"} link={"#about"} />
                </div>
            </div>
        </div>
    );
}

export default Home;
