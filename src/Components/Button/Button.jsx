import React from 'react'

function Button({className, value, link}) {
  return (
    <div>
        <a className={`${className} px-3 py-1 sm:px-5 sm:py-2 font-poppins`} href={link} target='_blank'>
            {value}
        </a>
    </div>
  )
}

export default Button