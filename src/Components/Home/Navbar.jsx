import React, {useState} from 'react'
import { useAuth } from '../../Context/AppContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {

  const  [showNav, setShowNav] = useState(false)
 
 const { user } = useAuth()

 const handleShowNav = ()=>{
   
  setShowNav(!showNav)
 }


  return (
    <>
 <div className='bg-white flex lg:flex-row flex-col justify-between px-3 py-4 lg:px-28 lg:py-4 shadow-sm'>
   <div className='lg:w-auto w-full flex justify-between'>
   <span className=' text-2xl flex items-center text-cyan-600 font-medium'>LinkPath</span>
   <span onClick={handleShowNav} className="lg:hidden text-2xl"><FontAwesomeIcon icon={faBars} /></span>
   </div>
   <div className={`flex bg-white lg:flex-row flex-col lg:justify-center items-center  lg:gap-28 lg:static lg:visible lg:opacity-100 absolute h-full lg:w-auto w-full left-0 top-0 lg:h-auto transition-all duration-700 delay-100 ease-in-out  ${showNav ? "visible " : "invisible opacity-0"}`}>
   <span  onClick={handleShowNav} className={` lg:hidden text-3xl absolute right-3 top-2  px-5 py-3`}><FontAwesomeIcon icon={faXmark}  /></span>
   <div className='flex lg:flex-row flex-col gap-3 my-28 lg:my-0'>
   <span  className='flex justify-center items-center text-gray-400 px-2 py-1 text-lg cursor-pointer transition-all delay-75 duration-500 ease-in-out font-normal '>How It Works</span>
   <span  className='flex justify-center items-center text-gray-400 px-2 py-1  text-lg cursor-pointer transition-all delay-75 duration-500 ease-in-out font-normal '>Services</span>
   <span  className='flex justify-center font-normal items-center text-gray-400 text-lg cursor-pointer px-2 py-1  transition-all delay-75 duration-500 ease-in-out  '>Pricing</span>
   </div>

   <div className='flex lg:flex-row flex-col lg:gap-5'>
   <Link to={user? "dashboard" : "login"}  className='flex justify-center items-center text-gray-400 px-2 py-1 text-lg  transition-all delay-75 duration-500 ease-in-out font-normal '  ><span>Sign In</span></Link>
   <Link to={user? "dashboard" : "signup"}  className='flex justify-center items-center text-gray-400 px-2 py-1 text-lg  transition-all delay-75 duration-500 ease-in-out font-normal '  ><span>Create Account</span></Link>
   </div>
   </div>
   
  
    </div>
    </>
   
  )
}

export default NavBar