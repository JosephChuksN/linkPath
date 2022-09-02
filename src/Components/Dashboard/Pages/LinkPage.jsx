import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
const LinkPage = () => {
  return (
     <div className='flex flex-col gap-10 px-2 md:px-0 items-center'>
        <div className='flex  justify-center  md:w-3/4 w-full '>
        <div className='flex w-full items-center justify-center lg:w-3/4 md:gap-5 '>
        <span className='flex bg-cyan-600/20 md:w-[70%] w-full   items-center gap-2 pl-5 text-slate-400 rounded-l-xl md:rounded-full'>
            <FontAwesomeIcon icon={faLink} />
            <span className='border border-slate-300 h-7 my-auto '></span>
             <input className='bg-transparent p-3 text-black  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-full border-none w-full' 
             type="text" 
             name="" 
                
                />
            </span>
            <button className='bg-cyan-600 text-white p-3 rounded-r-xl md:rounded-full flex'>Add <span className='hidden md:block ml-1'>New Link</span></button>
        </div>
        </div>

        <div className='flex items-center justify-center px-1 py-2  w-full  md:w-3/4'>
           <div className='flex items-center shadow-md border w-full rounded md:w-[70%] p-5 gap-3 md:gap-7'>
           <span className='absolute right-5 top-[26rem] xl:right-[27rem] xl:top-[22rem] text-gray-500 z-10'><FontAwesomeIcon icon={faTrash} /></span>
            <span className='w-14 h-14 bg-green-400 rounded'></span>
            <div className='flex flex-col gap-3'>
                <span className='text-[1rem] font-medium'>website name <span className='text-slate-300 text-[0.8rem]'><FontAwesomeIcon icon={faPen} /></span></span>
                <span className='text-purple-500'>website link <span className='text-slate-300  text-[0.8rem]'><FontAwesomeIcon icon={faPen} /></span></span>
            </div>
           </div>
           
        </div>

    </div>
  )
}

export default LinkPage