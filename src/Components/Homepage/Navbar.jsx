import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
 const [show, setShow] = useState(false)
  
 const handleToggle = () =>{
    setShow(!show)
 }


  return (
    <>
 <div className={`bg-white md:flex justify-between px-3 py-4 lg:px-28 lg:py-5 ${show? "shadow-none" : "shadow-md"} lg:shadow-none`}>
   <div className='flex gap-32'>
   <span className='font-bold text-2xl flex items-center '>LinkPath</span>
   <span className='md:hidden flex items-center text-white bg-blue-600  px-2 rounded-md'>Get Started</span>
   </div>
   
   <div className='md:flex '>
    <span onClick={handleToggle} className='md:hidden absolute right-3 top-3 p-1 text-2xl'>{!show ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faClose} /> }</span>
  <ul className={`flex flex-col bg-white md:bg-transparent md:flex-row gap-2.5 absolute md:static top-14 w-full text-xl z-40 ${show ? "right-0" : "right-[24.5rem]"} transition-all ease-in-out shadow-md lg:shadow-none delay-150 duration-300`}>
    <li className='pl-3 py-3'>About</li>
    <li className='pl-3 py-3'>Services</li>
    <li className='pl-3 py-3'>Contact</li>
    <li className='pl-3 py-3 hidden md:block'><span className='bg-blue-600 px-3 py-2 rounded-md text-white'>Get Started</span></li>
  </ul>
   </div>

    </div>
    </>
   
  )
}

export default NavBar