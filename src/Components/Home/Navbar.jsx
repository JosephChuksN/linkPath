import React, { useState } from 'react'
import { useAuth } from '../../Context/AppContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'



const NavBar = () => {
 
 const { user } = useAuth()


  return (
    <>
 <div className='bg-white flex  justify-between px-3 py-4 lg:px-28 lg:py-5 shadow-sm lg:shadow-none'>
   
   <span className='font-bold text-2xl flex items-center text-cyan-700'>LinkPath</span>
   <Link to={user? "dashboard" : "signup"}  className='flex j items-center text-white px-2 py-1  hover:bg-cyan-700 transition-all delay-75 duration-500 ease-in-out font-medium bg-cyan-600 rounded-md'  ><span>Sign Up</span></Link>
   
    </div>
    </>
   
  )
}

export default NavBar