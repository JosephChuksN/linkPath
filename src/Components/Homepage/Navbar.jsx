import React, { useState } from 'react'
import { useAuth } from '../../Context/AppContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
 const [show, setShow] = useState(false)
 const { user } = useAuth()
  
 const handleToggle = () =>{
    setShow(!show)
 }


  return (
    <>
 <div className={`bg-white md:flex justify-between px-3 py-4 lg:px-28 lg:py-5 ${show? "shadow-none" : "shadow-md"} lg:shadow-none`}>
   <div className='flex gap-40'>
   <span className='font-bold text-2xl flex items-center text-cyan-700'>LinkPath</span>
   <Link to={user? "dashboard" : "signup"}  className='md:hidden flex items-center text-black font-medium '  ><span>Sign Up</span></Link>
   </div>
   
   <div className='md:flex '>
    <span onClick={handleToggle} className='md:hidden absolute right-3 top-3 p-1 text-2xl'>{!show ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faClose} /> }</span>
  <ul className={`flex flex-col bg-white md:bg-transparent md:flex-row gap-2.5 absolute md:static top-14 w-full text-xl z-40 ${show ? "right-0" : "right-[28rem]"} transition-all ease-in-out shadow-md md:shadow-none delay-150 duration-300`}>
    <li className='pl-3 py-3'>About</li>
    <li className='pl-3 py-3'>Services</li>
    <li className='pl-3 py-3'>Contact</li>
    <Link to={user? "dashboard" : "signup"}><li className='pl-3 py-3 hidden md:block'><span className='bg-cyan-600 px-3 py-2 rounded-md text-white'>Sign Up</span></li></Link>
  </ul>
   </div>

    </div>
    </>
   
  )
}

export default NavBar