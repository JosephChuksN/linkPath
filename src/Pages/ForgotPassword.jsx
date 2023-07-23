import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AppContext'
import { Spinner } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons' 


const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const { login, loginError, loading } = useAuth()
  return (
    <>
    <div className='px-5 md:px-12 pt-10 h-screen lg:w-3/5 mx-auto '>
      <div  className='lg:w-[45%] mx-auto py-5 flex justify-center items-center'>
        <span className='text-cyan-600 text-2xl font-semibold'>Linkpath</span>
      </div>
   <form action='' className='p-3   border-gray-300 border-[0.5px] rounded-md  lg:w-[45%] mx-auto py-5'>
   <span className={`${loginError === ""? "hidden": "block"} border border-red-600 bg-red-200 text-red-600 p-1 rounded-md`}>{loginError}</span>
     
      <div className=' flex flex-col gap-5'>
         <div className='flex flex-col gap-1  items-center justify-start'>
            <span className='text-2xl font-semibold w-full flex text-cyan-600'>Password reset</span>
            <span className='text-black text-sm font-medium'>Please enter your email address associated with your Linkpath account.</span>
         </div>
      <div className='flex flex-col'>
  
          <label className='p-1 mb-1 font-medium' htmlFor="">Email Address</label>
          <input className='rounded-md lowercase focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400'
           onChange={(e)=>{setEmail(e.target.value)}}
           type="email" 
           value={email}
           required
           
            />
  
      </div>
      
     
      
      <div className='flex items-center'>
          <button className='transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 bg-cyan-600 w-full p-1 rounded-md text-white my-2' disabled={loading} 
          type="submit" 
          > 
          
          Continue
          
          </button>
      </div>
      
      </div>
  
      
    
   </form>
    
    <div className='lg:w-[45%] flex flex-col mx-auto  py-5 items-center justify-center'>
    
      <Link to='/login'>
        <span className=' flex items-center gap-2 transition-all delay-75 duration-300 ease-in-out hover:text-cyan-700 text-cyan-600 font-medium'>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>Back to login</span>
        </span>
      </Link>
    </div>
   
    
      </div>
  
      <div className={`flex w-full h-screen top-0 z-20 bg-black/30 flex-wrap items-center gap-2 justify-center absolute ${loading? "block" : "hidden"}`}>
    <Spinner
      aria-label="Extra large spinner example"
      size="xl"
      color="success"
    />
  </div>
      </>
  )
}

export default ForgotPassword