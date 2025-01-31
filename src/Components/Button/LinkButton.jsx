import React from 'react'
import { Link } from 'react-router-dom'

function Button({className, value, link}) {
  return (
    <div>
        <Link className={`${className} px-3 py-1 sm:px-5 sm:py-2`} to={link}>
            {value}
        </Link>
    </div>
  )
}

export default Button