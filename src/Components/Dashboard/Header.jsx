import React, {useState, useRef, useEffect} from 'react'
import { useAuth } from '../../Context/AppContext'
import {useNavigate, Link}   from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faArrowRightFromBracket, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = ({avater}) => {
  const {user, logout} = useAuth()
  const [logoutShow, setLogoutShow] = useState(false)
  const logoutSecRef = useRef()
  const navigate = useNavigate()

  
  const notify = ()=>{
    toast.success('Link has been copied',{
     autoClose: 2000
    })
  }
 
const handleShow =() =>{
  setLogoutShow(!logoutShow)
}

const handleOutsideclick = (e) =>{
   if(logoutSecRef.current && !logoutSecRef.current.contains(e.target)){
    setLogoutShow(false)
   }
}

useEffect(()=>{
  document.addEventListener('mousedown', handleOutsideclick)
  return document.removeEventListener('mousedown', handleOutsideclick)
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
    <div className='flex flex-col gap-10 md:flex-row md:justify-between md:items-center py-5 px-2  '>
        
            <span className='text-2xl font-semibold text-cyan-700'>Linkpath</span>
         <div className='flex gap-5 items-center justify-center  w-full md:w-[70%] lg:w-[60]'>
          <div className='w-full md:w-[65%]'>
          <span  className='flex justify-between cursor-pointer  text-cyan-600 bg-slate-300/30  rounded-md  md:px-4 md:py-2 p-2 w-full  '>
                {`linkpath-josephn.vercel.app/${user.name.toLowerCase()}`}
                <span onClick={()=>{navigator.clipboard.writeText(`https://linkpath-josephn.vercel.app/${user.name}`);notify()}} className=''><FontAwesomeIcon icon={faCopy} /></span>
               
            </span>
            <ToastContainer limit={2} />
          </div>
           
          <span className='text-[1.3rem] text-slate-400/60 md:static absolute top-[1.4rem] right-20 '><FontAwesomeIcon icon={faBell} /></span>
            <span onClick={handleShow} className={`${!user.profileImg ? "bg-cyan-600" : null } z-20 justify-center font-bold text-2xl md:w-16 w-14 h-14 md:h-16 text-white rounded-full absolute top-2 right-3 md:static flex items-center bg-no-repeat bg-cover border-2 border-white capitalize`} style={{backgroundImage: `url(${user.profileImg})`}}>{!user.profileImg ? user.name.charAt(0) : null}</span>
            <span className='w-1.5 h-1.5 bg-green-600 rounded-full absolute top-[1.8rem] right-[5rem] xl:right-[10.4rem] lg:right-[9.3rem] lg:top-10 md:right-[8.2rem] md:top-11 text-white text-sm text-[0.7rem] flex items-center justify-center'></span>
         </div>
        
    </div>
    <div ref={logoutSecRef} className={`absolute h-56  right-5 top-16 z-30 lg:top-20 lg:right-10 p-3 ${logoutShow? "block" : "hidden"} bg-white shadow-md border transition-all ease-in-out delay-300 duration-500 rounded-md`}>
       <div className='flex  flex-col p-1 gap-5 h-full justify-evenly'>
        <span className='flex items-center flex-col gap-3 border-b p-1 pb-4'>
        <span className='font-medium '>{`${user.name}`}</span>
        <span className='text-slate-400 md:text-[0.8rem] text-[1rem]'>{`${user.email}`}</span>
        </span>
        <div className='flex flex-col p-1 gap-2'>
       <Link onClick={handleShow} to="/dashboard/settings"><span className=' rounded hover:bg-slate-300/40 cursor-pointer'><span className='pr-3 text-slate-400'><FontAwesomeIcon icon={faGear} /></span>settings</span></Link>
        <span onClick={handleLogout} className='text-gray-400  rounded hover:bg-slate-300/40 cursor-pointer'><span className='pr-3'><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>Logout</span>
        </div>
      
       
       </div>
    </div>
    </>
  )
}

export default Header