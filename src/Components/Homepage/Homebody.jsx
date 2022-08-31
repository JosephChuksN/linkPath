import React from 'react'
import {  Link  } from 'react-router-dom';





const Homebody = () => {
  return (
    <div className='flex flex-col gap-3 lg:flex-row px-3 py-4 lg:px-28 lg:py-14 w-full'>
<div className='pt-20 md:py-20 lg:w-1/2 px-1 flex flex-col gap-5'>
    <span className='font-bold  text-3xl md:text-6xl md:leading-normal '>One Page that links to everything</span>
    <span className='font-normal text-2xl'>Embed your links to your socails, website, events, store music and more in one page.</span>
    <div className='py-3  space-y-2'>
   <Link to="/signup"><span className='bg-blue-600 px-3 py-2 rounded-md text-white'>Get Started</span></Link>
     <div className='p-1'>   <span>Already have an account?</span> <Link to="/login"><span className='text-blue-600'>Log in</span></Link></div>
    </div>
</div>
    </div>
  )
}

export default Homebody