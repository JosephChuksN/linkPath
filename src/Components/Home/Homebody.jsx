import React from 'react'
import { useAuth } from '../../Context/AppContext';
import {  Link  } from 'react-router-dom';
import linkpath from '../../assets/linkpath.png'
import arrowRight from '../../assets/arrow-right.svg'





const Homebody = () => {

  const { user } = useAuth()

return (
<div className='flex flex-col pb-16   lg:flex-row pt-10   px-3  lg:pt-0 lg:px-20  w-full mt-10'>

<div className='lg:pt-52 md:py-16 lg:w-1/2 flex flex-col gap-5 '>
    <span className='font-semibold font-poppins text-2xl md:text-6xl text-cyan-700 '>
      ONE PAGE THAT LINKS TO EVERYTHING
    </span>
    <span className='text-xl text-black lg:w-4/5 font-medium font-poppins'>
      Access the links to your socials, website, events, music and more with just one click.
    </span>

  <div className='py-3  space-y-2 w-40'>
         <Link to={user? "dashboard" : "signup"} >
         <button className='flex gap-2 items-center font-poppins bg-cyan-600 px-3 py-2 rounded-lg shadow-md shadow-cyan-600 text-white lg:text-lg hover:bg-cyan-700 transition-all delay-75  duration-500 ease-in-out hover:scale-105 '>
         Get Started 
         <img src={arrowRight} alt="arrow right" />
         </button>
         </Link>
  </div>
</div>
<div className='lg:w-1/2 w-full h-3/5 flex max-h-[80%] mx-auto '>
  <img className='w-full h-full z-10 lg:w-[80%] flex justify-center mx-auto'
  src={linkpath} 
  alt="happy user"
  
  />

</div>
</div>
  )
}

export default Homebody