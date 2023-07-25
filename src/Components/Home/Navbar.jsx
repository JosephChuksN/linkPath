import React, {useState, useEffect, useRef} from 'react'
import { useAuth } from '../../Context/AppContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {

  const  [showNav, setShowNav] = useState(false)
 
 const { user } = useAuth()
 const sidebarRef = useRef()

 const handleShowNav = ()=>{
   
  setShowNav(!showNav)
 }

 useEffect(()=>{
    if(showNav){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = "unset"
    }
 },[showNav])

 useEffect(()=>{
   const handleOutsideClick = (event)=>{
    if(sidebarRef.current && !sidebarRef.current.contains(event.target)){
      setShowNav(false)
    }
   }
   document.addEventListener("mousedown", handleOutsideClick)
   
   return ()=>{
    document.removeEventListener("mousedown", handleOutsideClick)
   }
 },[])


  return (
    <>
 <div className= 'fixed top-0 z-40 bg-[#ffffff06] backdrop-blur-md  lg:static w-full bg-white flex lg:flex-row flex-col justify-between px-3 py-4 lg:px-28 lg:py-4 shadow-sm '>
   <div className='lg:w-auto w-full flex justify-between'>
      <a href="/"><span className=' text-2xl flex items-center text-cyan-600 font-medium'>LINKPATH</span></a>
      <span onClick={handleShowNav} className="lg:hidden text-2xl"><FontAwesomeIcon icon={faBars} /></span>
   </div>
   <div ref={sidebarRef} className={`flex lg:h-auto h-[100vh] lg:bg-transparent bg-white lg:flex-row flex-col lg:justify-between items-center  lg:gap-28 lg:static  absolute lg:w-3/5 w-[70%] lg:border-0 border-r-[1px] top-0  transition-all duration-700 delay-100 ease-in-out  ${showNav ? "left-0" : "-left-96"}`}>
   <span  onClick={handleShowNav} className={` lg:hidden text-3xl absolute right-3 top-2 text-cyan-600  px-5 py-3`}><FontAwesomeIcon icon={faXmark}  /></span>
   <div className='flex lg:flex-row flex-col gap-3 mb-10 mt-28 lg:my-0 lg:justify-center justify-start w-32 lg:w-auto'>
     <a onClick={handleShowNav} href="#guide"><span  className='flex  items-center font-medium lg:px-2 py-1 text-lg cursor-pointer transition-all delay-75 duration-300 ease-in-out hover:text-cyan-600 hover:underline underline-offset-4 '>How It Works</span></a>
     <a onClick={handleShowNav} href="#contact"><span  className='flex  items-center font-medium lg:px-2 py-1  text-lg cursor-pointer transition-all delay-75 duration-300 ease-in-out hover:text-cyan-600 hover:underline underline-offset-4   '>Contact</span></a>
   </div>
   <div className='flex lg:flex-row flex-col justify-start gap-5 w-32 lg:w-auto '>
   <Link to={user? "dashboard" : "login"}  onClick={handleShowNav} >
    <span className='flex bg-cyan-600 justify-center w-2/3 lg:w-auto items-center text-white rounded-lg px-2 py-1 text-sm shadow-md shadow-cyan-600 hover:bg-cyan-700 hover:scale-105  transition-all delay-75 duration-500 ease-in-out  ' >
      LOG IN
    </span>
   </Link>
   <Link to={user? "dashboard" : "signup"} onClick={handleShowNav}  >
    <span className='flex justify-center items-center text-cyan-600  w-2/3 lg:w-auto px-2 py-1 shadow-md shadow-gray-300 border border-cyan-600 rounded-lg text-sm hover:border-cyan-300 hover:shadow-cyan-300 hover:bg-cyan-300 hover:text-white hover:scale-105  transition-all delay-75 duration-300 ease-in-out  ' >
      SIGN UP
    </span>
   </Link>
   </div>
  
   </div>
  
  
    </div>
    </>
   
  )
}

export default NavBar