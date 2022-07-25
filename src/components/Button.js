import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-orange-600 text-white font-[Open Sans] py-2 px-8 rounded md:ml-10 hover:bg-orange-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button