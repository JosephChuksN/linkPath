import React from 'react'
import { useAuth } from '../../Context/AppContext';
import {  Link  } from 'react-router-dom';





const Homebody = () => {
  const { user } = useAuth()
  return (
    <div className='flex flex-col gap-3 lg:flex-row px-3 py-4 lg:px-28 lg:py-14 w-full'>
<div className='pt-20 md:py-16 lg:w-1/2 px-1 flex flex-col gap-5'>
    <span className='font-bold  text-3xl md:text-6xl md:leading-normal text-cyan-700 '>One Page that links to everything</span>
    <span className='font-normal text-2xl text-cyan-600'>Embed the links to your socails, website, events, store music and more in one page.</span>
    <div className='py-3  space-y-2'>
   <Link to={user? "dashboard" : "signup"}><span className='bg-cyan-600 px-3 py-2 rounded-md text-white lg:text-2xl hover:bg-cyan-600/80 transition-all delay-150 duration-500 ease-in-out '>Get Started</span></Link>
     <div className='p-1'>   <span>Already have an account?</span> <Link to={user? "dashboard" : "login"}><span className='text-cyan-600 hover:underline transition-all delay-300 duration-500 ease-in-out'>Log in</span></Link></div>
    </div>
</div>
    </div>
  )
}

export default Homebody