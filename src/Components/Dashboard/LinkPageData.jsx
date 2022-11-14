import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../Context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'




const LinkPageData = ({siteInfo, siteData, setSiteData}) => {

const id = siteInfo._id
const {editLinks, deleteLink}= useAuth()
const siteNameInputRef = useRef()
const siteLinkInputRef = useRef()
const imgInputRef = useRef()
const [showDelete, setShowDelete] = useState(false)
const [siteName, setSiteName] = useState(siteInfo.siteName)
const [siteLink, setSiteLink] = useState(siteInfo.siteLink)
const siteImg   = `https://${new URL(siteLink).hostname}/favicon.ico`




const handleDelete = ()=>(
  // setSiteData(siteData.filter(details => details.id !== id))
  deleteLink(id)
)

const handleShowDeleteModal = ()=>{ setShowDelete(!showDelete)}

useEffect( ()=>{
   const editData =  ()=>{
    editLinks(id, siteLink, siteName)
    }
 return  editData
}, [siteName, siteLink])



  return (
  <>
  <div className='flex items-center justify-center px-1 py-2  w-full  lg:w-3/4 relative'>
    <div className='flex items-center shadow-md border w-full rounded md:w-[70%] p-5 gap-3 justify-between'>         
     <div className='flex gap-5'>
              <span className='w-14 h-14 bg-slate-400/60 rounded flex items-center justify-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${siteImg})`}}><span onClick={()=>{imgInputRef.current.click()}} className='text-gray-100'></span></span>
       <form className='flex flex-col gap-3'>
        <div>
              <input ref={siteNameInputRef} className='text-[1rem] font-medium  focus:border-none focus:ring-0  outline-none'
                value={siteName}
                name="siteName"
                id={id}
                onChange={(e)=>{setSiteName(e.target.value)}}
              />
              {/* to change site favicon to desired one */}
              {/* <input ref={imgInputRef} className='hidden' type="file"   accept="image/*" onChange={(e)=>{setSiteImg(URL.createObjectURL(e.target.files[0]))}} /> */}
              <span  className='text-slate-300 z-10 text-[0.8rem] pl-2'><FontAwesomeIcon icon={faPen} /></span>
        </div>
        <div>
              <input ref={siteLinkInputRef} className='text-purple-500 font-medium focus:border-none focus:ring-0  outline-none'
                 value={siteLink}
                 name="siteLink"
                 id={id}
                 onChange={(e)=>{setSiteLink(e.target.value)}}
              />
              <span onClick={()=>{siteLinkInputRef.current.click()}} className='text-slate-300 z-10 text-[0.8rem] pl-2'><FontAwesomeIcon icon={faPen} /></span>
        </div>
       </form>
     </div>
    
           <div className='h-full'>
              <span onClick={handleShowDeleteModal} className=' text-slate-300 z-10'><FontAwesomeIcon icon={faTrash} /></span>
           </div>
    </div>
           
  </div>
{showDelete ? <div onClick={handleShowDeleteModal} className='flex w-full h-full top-0 z-20 bg-black/10 flex-wrap items-center gap-2 justify-center absolute'>
<div onClick={(e)=>{e.stopPropagation()}} className='w-3/5 md:w-1/5 bg-white flex flex-col gap-6 md:gap-4 justify-center items-center md:p-5 p-8 rounded-lg shadow-lg border'>
  <span className='text-red-600 text-xl'>Delete this link</span>
    <span className='flex gap-5'>
    <button  onClick={handleShowDeleteModal} className='hover:bg-gray-600/60 bg-gray-300 text-white p-1 rounded-md transition-all duration-200 delay-200'>Cancel</button>
    <button onClick={handleDelete} className='hover:bg-red-600/60 bg-red-600 text-white p-1 rounded-md transition-all duration-200 delay-200'>Delete</button>
  </span>
</div>
</div> : null

}
  
    </>
  )
}

export default LinkPageData