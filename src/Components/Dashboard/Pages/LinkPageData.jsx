import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons'



const LinkPageData = ({siteInfo, siteData, setSiteData}) => {
const id = siteInfo.id
const imgInputRef = useRef()

const [siteName, setSiteName] = useState(siteInfo.siteName)
const [siteLink, setSiteLink] = useState(siteInfo.siteLink)
const [siteImg, setSiteImg]   = useState(siteInfo.siteImg)




const handleDelete = ()=>(
  setSiteData(siteData.filter(details => details.id !== id))
)


useEffect(()=>{
  const editedInfo = {id, siteName, siteLink, siteImg}
 const handleEdit = (id, editedInfo)=>{ setSiteData(siteData.map(details => details.id === id ? editedInfo : details))}
 return handleEdit(id, editedInfo)
}, [siteName, siteLink, siteImg])



  return (

<>
<div className='flex items-center justify-center px-1 py-2  w-full  lg:w-3/4'>
   <div className='flex items-center shadow-md border w-full rounded md:w-[70%] p-5 gap-3 justify-between'>
         
          <div className='flex gap-5'>
          <span className='w-14 h-14 bg-slate-400/60 rounded flex items-center justify-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${siteImg})`}}><span onClick={()=>{imgInputRef.current.click()}} className='text-gray-100'><FontAwesomeIcon icon={faCamera} /></span></span>
          <div className='flex flex-col gap-3'>
            <div>
              <input className='text-[1rem] font-medium  focus:border-none focus:ring-0  outline-none'
                value={siteName}
                name="siteName"
                id={id}
                onChange={(e)=>{setSiteName(e.target.value)}}
             />
             <input ref={imgInputRef} className='hidden' type="file"   accept="image/*" onChange={(e)=>{setSiteImg(URL.createObjectURL(e.target.files[0]))}} />
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
    
      <div className='h-full'>
        <span onClick={handleDelete} className=' text-slate-300 z-10'><FontAwesomeIcon icon={faTrash} /></span>
      </div>
   </div>
           
</div>
    
    </>


    
  )
}

export default LinkPageData