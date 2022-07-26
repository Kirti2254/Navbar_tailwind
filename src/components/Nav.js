import React, { useState } from 'react'
import Button from './Button';


const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"About",link:"/"},
      {name:"Services",link:"/"},
      {name:"Portfolio",link:"/"},
      {name:"Blog",link:"/"},
    ];
    let [open,setOpen]=useState(true);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-40 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Open Sans] 
      text-gray-800'>
      
        <img src="./images/Logo.png" alt="logo"></img>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-10 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-black-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li> 
          ))
        }
        <Button>
          Let's Talk
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav