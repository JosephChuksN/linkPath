import React from 'react'
import {  Link  } from 'react-router-dom';


const Signup = () => {
  return (
    <div className='px-3 py-36 h-screen lg:w-3/4 mx-auto'>
 <form action="" className='p-3 shadow-md bg-gray-100 rounded lg:w-1/2 mx-auto py-5'>
   
    <div className=' flex flex-col gap-5'>
    <span className='text-2xl font-semibold'>Sign Up</span>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Your Email</label>
        <input className='rounded' type="text" />
    </div>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Password</label>
        <input className='rounded' type="text" />
    </div>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Confirm Password</label>
        <input className='rounded' type="text" />
    </div>
    <div className='flex items-center'>
        <button className='bg-blue-600 w-full p-2 rounded'>Sign Up</button>
    </div>
    <div className='p-1'>   <span>Already have an account?</span> <Link to="/login"><span className='text-blue-600'>Log in</span></Link></div>
    </div>
  
 </form>
  
    </div>
  )
}

export default Signup