import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../Context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons'




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
const [profileImg, setProfileImg] = useState(null)
const [previewImg, setPreviewImg] = useState()



const handleImgChange = (e)=>{

  setProfileImg(e.target.files[0])
  setPreviewImg(URL.createObjectURL(e.target.files[0]))

} 

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
}, [siteName, siteLink, editLinks, id])

// style={{backgroundImage: `url(${siteImg})`}}

  return (
  <>
  <div className='flex items-center justify-center px-1 py-2 w-full  lg:w-3/4 relative'>
    <div className='flex items-center shadow-lg border w-full rounded md:w-[80%] p-3 md:p-5 gap-3 justify-between'>         
     <div className='flex md:gap-10 gap-2'>
       <span className='w-16 h-16 rounded bg-gray-200 flex items-center justify-center bg-no-repeat bg-cover' 
       style={{backgroundImage: `url(${previewImg || profileImg})`}}
       >
        <span onClick={()=>{imgInputRef.current.click()}} className='text-white/80'>
        <FontAwesomeIcon icon={faCamera} />
        </span>
        </span>
       <form className='flex flex-col gap-3'>
        <div className='flex gap-5 items-center'>
        <input 
              ref={imgInputRef} 
              className='hidden' 
              type="file" 
              accept="image/*" 
              name="profileImg"
              onChange={handleImgChange} 
              />
              <input ref={siteNameInputRef} className='text-[1rem]  font-medium  focus:border-none focus:ring-0  outline-none capitalize'
                value={siteName}
                name="siteName"
                id={id}
                onChange={(e)=>{setSiteName(e.target.value)}}
              />
              {/* to change site favicon to desired one */}
              {/* <input ref={imgInputRef} className='hidden' type="file"   accept="image/*" onChange={(e)=>{setSiteImg(URL.createObjectURL(e.target.files[0]))}} /> */}
              <span  className='text-slate-300  text-[0.8rem]  '
                 onClick={()=>{siteNameInputRef.current.focus()}}
                >
                <FontAwesomeIcon icon={faPen} />
              </span>
        </div>
        <div className='flex items-center gap-0.5'>
             <span className='w-4 h-4 rounded-full flex items-center justify-center bg-no-repeat bg-cover' 
              style={{backgroundImage: `url(${siteImg})`}}
              >
             </span>
             <div>
             <input ref={siteLinkInputRef} className='text-purple-500 truncate font-medium focus:border-none focus:ring-0  outline-none'
                 value={siteLink}
                 name="siteLink"
                 id={id}
                 onChange={(e)=>{setSiteLink(e.target.value)}}
              />
              <span  className='text-slate-300 text-[0.8rem] '
                onClick={()=>{siteLinkInputRef.current.focus()}}
              >
                <FontAwesomeIcon icon={faPen} />
              </span>
             </div>
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
      <span className='text-cyan-600 text-base font-semibold capitalize px-3'>
        {`Delete ${siteName}`}
      </span>
      <span className='flex gap-5'>
      <button className='hover:bg-gray-600/60 bg-gray-300 text-white p-1 rounded-md transition-all duration-200 delay-200'
        onClick={handleShowDeleteModal}
      >
        Cancel
      </button>
      <button className='hover:bg-red-600/60 bg-red-600 text-white p-1 rounded-md transition-all duration-200 delay-200'
        onClick={handleDelete} 
      >
        Delete
      </button>
      </span>
</div>
</div> : null

}
  
    </>
  )
}

export default LinkPageData