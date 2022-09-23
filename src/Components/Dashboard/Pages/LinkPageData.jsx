import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'



const LinkPageData = ({siteInfo, siteData, setSiteData}) => {
const id = siteInfo.id

const [siteName, setSiteName] = useState(siteInfo.siteName)
const [siteLink, setSiteLink] = useState(siteInfo.siteLink)







useEffect(()=>{
  const editedInfo = {id, siteName, siteLink}
 const handleEdit = (id, editedInfo)=>{ setSiteData(siteData.map(details => details.id === id ? editedInfo : details))}
 return handleEdit(id, editedInfo)
}, [siteName, siteLink])



  return (

<>
<div className='flex items-center justify-center px-1 py-2  w-full  lg:w-3/4'>
   <div className='flex items-center shadow-md border w-full rounded md:w-[70%] p-5 gap-3 md:gap-7'>
          <span className='absolute right-5 top-[26rem] xl:right-[27rem] xl:top-[22rem] text-slate-300 z-10'><FontAwesomeIcon icon={faTrash} /></span>
          <span className='w-14 h-14 bg-green-400 rounded'></span>
      <div className='flex flex-col gap-3'>
            <div>
              <input className='text-[1rem] font-medium  focus:border-none focus:ring-0  outline-none'
                value={siteName}
                name="siteName"
                id={id}
                onChange={(e)=>{setSiteName(e.target.value)}}
             />
            <span className='text-slate-300 text-[0.8rem] pl-2'><FontAwesomeIcon icon={faPen} /></span>

      </div>
             <div>
                <input className='text-purple-500 font-medium focus:border-none focus:ring-0  outline-none'
                 value={siteLink}
                 name="siteLink"
                 id={id}
                 onChange={(e)=>{setSiteLink(e.target.value)}}
                 
                />
                <span className='text-slate-300  text-[0.8rem] pl-2'><FontAwesomeIcon icon={faPen} /></span>

              </div>
      </div>
   </div>
           
</div>
    
    </>


    
  )
}

export default LinkPageData