import React from 'react'
import { useAuth } from '../../Context/AppContext'
import { Link } from 'react-router-dom'


const NavBar = () => {
 
 const { user } = useAuth()


  return (
    <>
 <div className='bg-white flex  justify-between px-3 py-4 lg:px-52 lg:py-4 shadow-sm '>
   
   <div className='flex gap-10 items-center justify-center'>
   <span className=' text-lg flex items-center text-[#1a73e8] font-medium'>LinkPath</span>
   <div className='flex '>
   <span  className='flex justify-center items-center text-gray-400 px-2 py-1  transition-all delay-75 duration-500 ease-in-out font-normal '>How It Works</span>
   <span  className='flex justify-center items-center text-gray-400 px-2 py-1  transition-all delay-75 duration-500 ease-in-out font-normal '>Services</span>
   <span  className='flex justify-center font-normal items-center text-gray-400 px-2 py-1  transition-all delay-75 duration-500 ease-in-out  '>Pricing</span>
   </div>
   </div>
   
   <div className='flex gap-5'>
   <Link to={user? "dashboard" : "login"}  className='flex justify-center items-center text-gray-400 px-2 py-1  transition-all delay-75 duration-500 ease-in-out font-normal '  ><span>Sign In</span></Link>
   <Link to={user? "dashboard" : "signup"}  className='flex justify-center items-center text-gray-400 px-2 py-1  transition-all delay-75 duration-500 ease-in-out font-normal '  ><span>Create Account</span></Link>
   </div>
    </div>
    </>
   
  )
}

export default NavBar