import React from 'react'
import Button from "../Components/Button/Button";

function SwiperCard({ image, title, link, description }) {

    return (
        <div className='flex items-center justify-center flex-col w-[90%] xs:w-[16rem] sm:w-[20rem] gap-3 bg-secondary border border-primary rounded-xl shadow-xl shadow-black/10'>
            <div className='w-full'>
                <img src={image} alt="Rahul Resort Room Image" className='w-full xs:w-[16rem] xs:h-[11rem] sm:w-[20rem] sm:h-[14rem] rounded-xl rounded-b-2xl' />
            </div>
            <div className='flex items-center justify-center flex-col w-[90%]'>
                <div className='h-20 mb-3'>
                    <p className='font-semibold text-xl font-roman mb-3'>{title}</p>
                    <p className='font-poppins font-light text-sm mb-3'>{description}</p>
                </div>
                <div className='w-full flex items-end justify-end my-5'>
                    <Button
                        link={link}
                        className={"border border-primary bg-secondary text-primary hover:text-secondary hover:bg-primary flex items-center justify-center duration-300"}
                        value={
                            <p>
                                <span>Book</span>
                            </p>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default SwiperCard