import React, {useState, useRef, useEffect} from 'react'
import { useAuth } from '../../Context/AuthContext'
import {useNavigate}   from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faArrowRightFromBracket, faBell, faGear } from '@fortawesome/free-solid-svg-icons'



const Header = ({avater}) => {
  const {user, logout} = useAuth()
    const [show, setShow] = useState(false)
    const [logoutShow, setLogoutShow] = useState(false)
    const logoutSecRef = useRef()
  const navigate = useNavigate()
 
const handleShow =() =>{
  setLogoutShow(true)
}

const handleOutsideclick = (e) =>{
   if(logoutSecRef.current && !logoutSecRef.current.contains(e.target)){
    setLogoutShow(false)
   }
}

useEffect(()=>{
  document.addEventListener('mousedown', handleOutsideclick)
  return document.removeEventListener('mousedown', handleLogout)
})
    
 const handleLogout = async () =>{
    
  try{
      await logout()
      navigate('/login')
  } catch (e) {
      alert(e.message)
  }
}
  return (
   <>
    <div className='flex flex-col gap-10 md:flex-row md:justify-between md:items-center py-5 px-2'>
        
            <span className='text-2xl font-semibold text-cyan-700'>Linkpath</span>
         <div className='flex gap-5 items-center w-full md:w-[40%] px-2'>
            <span onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}} className='flex justify-between  cursor-pointer  text-cyan-600 bg-slate-300/30  rounded-full  md:px-4 md:py-1 p-2 w-full md:w-[75%] '>
                {`linkpath//${user.email.substring(0, user.email.indexOf("@")).replace(/[0-9]/g, '')}`}
                <span className={`${show? 'lg:block' : "lg:hidden"}`}><FontAwesomeIcon icon={faCopy} /></span>
            </span>
          <span className='text-[1.3rem] text-slate-400/60 md:static absolute top-[1.4rem] right-20 '><FontAwesomeIcon icon={faBell} /></span>
            <span onClick={handleShow} className=' z-20 md:w-14 w-12 h-12 md:h-14 rounded-full absolute top-2.5 right-3 md:static flex items-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${avater.profilePic})`}}></span>
            <span className='w-4 h-4 bg-red-600 rounded-full absolute top-[1.4rem] right-[4.5rem] lg:right-[12.2rem] lg:top-8 text-white text-sm text-[0.7rem] flex items-center justify-center'>3</span>
         </div>
        
    </div>
    <div ref={logoutSecRef} className={`absolute h-56  right-5 top-16 z-30 lg:top-20 lg:right-28 p-3 ${logoutShow? "block" : "hidden"} bg-white shadow-md border transition-all ease-in-out delay-300 duration-500 rounded-md`}>
       <div className='flex  flex-col p-1 gap-5 h-full justify-evenly'>
        <span className='flex items-center flex-col gap-3 border-b p-1 pb-4'>
        <span className='font-medium '>{`${user.email.substring(0, user.email.indexOf("@")).replace(/[0-9]/g, '')}`}</span>
        <span className='text-slate-400 md:text-[0.8rem] text-[1rem]'>{`${user.email}`}</span>
        </span>
        <div className='flex flex-col p-1 gap-2'>
        <span className=' rounded hover:bg-slate-300/40 cursor-pointer'><span className='pr-3 text-slate-400'><FontAwesomeIcon icon={faGear} /></span>settings</span>
        <span onClick={handleLogout} className='text-cyan-600  rounded hover:bg-slate-300/40 cursor-pointer'><span className='pr-3'><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>Logout</span>
        </div>
      
       
       </div>
    </div>
    </>
  )
}

export default Header