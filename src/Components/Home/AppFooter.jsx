import React from 'react'

const AppFooter = () => {
  return (
    <div id='contact' className='flex flex-col font-poppins pt-10 pb-5 px-3 lg:px-20 gap-5 bg-[#D9D9D9]'>
        <div className='flex flex-col lg:grid lg:grid-cols-3 gap-5 justify-between grid-flow-row py-3 border-b-[1px] border-black'>
            <div className='flex flex-col gap-2 '>
                <span className='text-cyan-600 font-semibold text-xl lg:text-2xl'>LINKPATH</span>
                <span className='lg:w-4/5 text-md lg:text-xl'>Access everything with just one click</span>
            </div>
            <div className='flex flex-col gap-2 '>
                <span className='font-medium text-lg lg:text-xl'>CONTACT</span>
                <span className='flex flex-col lg:gap-2'>
                    <span>Email: x***@mail.com</span>
                    <span>Phone: +234 90 000 000 00 </span>
                </span>
            </div>
            <div className='flex flex-col gap-2 '>
                <span  className='font-medium text-lg lg:text-xl'>SUBSCRIBE</span>
                <span className='flex items-center gap-3'>
                    <input className='p-1 rounded-lg lg:w-3/5'
                    type="email" 
                    name="" 
                    placeholder='Email'
                     />
                    <button className='py-1 px-3 rounded-lg text-white bg-cyan-600 shadow-md shadow-cyan-600 transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 hover:scale-105'>Subcribe</button>
                </span>
            </div>
        </div>
        <div className='flex justify-between font-semibold text-xs lg:text-md '>
            <span>Privacy & policy</span>
            <span>Terms & Conditions</span>
            <span>&copy; 2023 Linkpath</span>
        </div>
    </div>
  )
}

export default AppFooter