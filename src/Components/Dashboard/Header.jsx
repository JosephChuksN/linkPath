import React, {useState} from 'react'
import { useAuth } from '../../Context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  const {user} = useAuth()
    const [show, setShow] = useState(false)
  return (
    <div className='flex flex-col gap-10 md:flex-row md:justify-between md:items-center py-5 px-2'>
        
            <span className='text-2xl font-semibold text-cyan-700'>Linkpath</span>
         <div className='flex gap-5 items-center w-full md:w-[30%]'>
            <span onMouseOver={()=>{setShow(true)}} onMouseOut={()=>{setShow(false)}} className='flex justify-between lg:hover:bg-cyan-600/10 cursor-pointer lg:hover:rounded-full text-cyan-600 bg-slate-300 md:bg-transparent rounded-full md:rounded-none lg:p-1  p-2 w-full md:w-[75%] '>
                {`linkpath//${user.email.substring(0, user.email.indexOf("@"))}`}
                <span className={`${show? 'lg:block' : "lg:hidden"}`}><FontAwesomeIcon icon={faCopy} /></span>
            </span>
            <span className='w-14 h-14 rounded-full absolute top-2.5 right-3 md:static bg-yellow-300'></span>
         </div>
        
    </div>
  )
}

export default Header