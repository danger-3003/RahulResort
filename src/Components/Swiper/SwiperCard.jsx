import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'

function SwiperCard({image, title, link, dimensions}) {
  return (
    <div className='mb-16'>
        <div>
            <p>{title}</p>
        </div>
        <div>
            <img src={image} alt="Rahul Resort Room Image" />
        </div>
        <div>
            <div>
                <p>{dimensions}</p>
            </div>
            <a href={link} target='_blank' className='group flex items-center justify-center w-10 h-10 rounded-full border border-primary hover:bg-primary duration-300'>
                <FontAwesomeIcon icon={faChevronLeft} className='text-xl group-hover:text-secondary rotate-180 duration-300'/>   
            </a>
        </div>
    </div>
  )
}

export default SwiperCard