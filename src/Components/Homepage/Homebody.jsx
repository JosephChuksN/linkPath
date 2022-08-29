import React from 'react'
import illustration from  './assets/vectorimg.png'




const Homebody = () => {
  return (
    <div className='flex flex-col gap-3 lg:flex-row px-3 py-4 lg:px-28 lg:py-14 w-full text-white '>
<div className='pt-20 md:py-20 lg:w-1/2 px-1 flex flex-col gap-5'>
    <span className='font-bold  text-3xl md:text-6xl md:leading-normal text-gray-50  '>One Page that links to everything</span>
    <span className='font-normal text-2xl text-gray-50 '>Embed all your links in one page.</span>
    <div className='py-3  space-y-2'>
    <span className='border-2 border-gray-50 px-3 py-2 rounded-md text-white'>Get Started</span>
     <div className='p-1'>   <span>Already have an account?</span> <span className='text-gray-50'>Log in</span></div>
    </div>
</div>
<div className='lg:w-1/2 flex items-center justify-center'>
 <img className='md:max-h-[80%] rounded' src={illustration} alt="" />
</div>
    </div>
  )
}

export default Homebody