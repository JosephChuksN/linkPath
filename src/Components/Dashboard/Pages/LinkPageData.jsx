import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const LinkPageData = ({siteInfo}) => {
  return (
    <>
    
<div className='flex items-center justify-center px-1 py-2  w-full  md:w-3/4'>
   <div className='flex items-center shadow-md border w-full rounded md:w-[70%] p-5 gap-3 md:gap-7'>
          <span className='absolute right-5 top-[26rem] xl:right-[27rem] xl:top-[22rem] text-slate-300 z-10'><FontAwesomeIcon icon={faTrash} /></span>
          <span className='w-14 h-14 bg-green-400 rounded'></span>
          <div className='flex flex-col gap-3'>
                <span className='text-[1rem] font-medium'>{siteInfo.siteName}<span className='text-slate-300 text-[0.8rem] pl-2'><FontAwesomeIcon icon={faPen} /></span></span>
                <span className='text-purple-500'>{siteInfo.siteLink}<span className='text-slate-300  text-[0.8rem] pl-2'><FontAwesomeIcon icon={faPen} /></span></span>
          </div>
     </div>
           
</div>
    
    </>


    
  )
}

export default LinkPageData