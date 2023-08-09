import React, { useState, useEffect, useRef } from 'react'
import AddLinkImg from './AddLinkImg'
import { useAuth } from '../../Context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCamera, faL } from '@fortawesome/free-solid-svg-icons'




const LinkPageData = ({siteInfo, siteData, setSiteData}) => {

const id = siteInfo._id
const {editLinks, deleteLink}= useAuth()
const siteNameInputRef = useRef()
const siteLinkInputRef = useRef()
const imgInputRef = useRef()
const [showDelete, setShowDelete] = useState(false)
const [siteName, setSiteName] = useState(siteInfo.siteName)
const [siteLink, setSiteLink] = useState(siteInfo.siteLink)
const [siteNameFocus,setSiteNameFocus] = useState(false)
const [siteLinkFocus,setSiteLinkFocus] = useState(false)
const siteImg   = `https://${new URL(siteLink).hostname}/favicon.ico`
const [profileImg, setProfileImg] = useState(null)
const [previewImg, setPreviewImg] = useState()
const [showAddImg, setShowAddImg] = useState(false)



const handleImgChange = (e)=>{

  setProfileImg(e.target.files[0])
  setPreviewImg(URL.createObjectURL(e.target.files[0]))
  setShowAddImg(!showAddImg)
} 

const handleDelete = ()=>(
  // setSiteData(siteData.filter(details => details.id !== id))
  deleteLink(id)
)

const handleShowDeleteModal = ()=>{ 
  setShowDelete(!showDelete)
  setShowAddImg(false)
}
const handleInputFileClick = () => {
  imgInputRef.current.click()

}
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
  <div className='flex items-center shadow-lg shadow-cyan-600/10 border w-full rounded-2xl md:w-[80%] p-3 md:p-5 gap-3 justify-between relative'>         
  <div className='flex md:gap-10 gap-2'>
       <span onClick={()=>{setShowAddImg(true)}} className='w-16 h-16 rounded bg-gray-200 flex items-center justify-center bg-no-repeat bg-cover' 
       style={{backgroundImage: `url(${previewImg || profileImg})`}}
       >
       <span className='text-white/80'>
        <FontAwesomeIcon icon={faCamera} />
       </span>
       </span>
  <form className='flex flex-col gap-3'>
  <div className='flex gap-5 items-center relative'>
        <input 
              ref={imgInputRef} 
              className='hidden' 
              type="file" 
              accept="image/*" 
              name="profileImg"
              onChange={handleImgChange} 
              />
              <input 
                ref={siteNameInputRef} 
                className='md:text-base text-sm font-medium  focus:border-none focus:ring-0  outline-none capitalize'
                value={siteName}
                name="siteName"
                id={id}
                onChange={(e)=>{setSiteName(e.target.value)}}
                onFocus={()=>setSiteNameFocus(true)}
                onBlur={()=>{setSiteNameFocus(false)}}
              />
              <span  className={`${siteNameFocus? "hidden" : ""} text-slate-300  text-[0.8rem] `}
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
             <input 
                 ref={siteLinkInputRef} 
                 className='text-purple-500 md:text-base text-xs truncate font-medium focus:border-none focus:ring-0  outline-none'
                 value={siteLink}
                 name="siteLink"
                 id={id}
                 onChange={(e)=>{setSiteLink(e.target.value)}}
                 onFocus={()=>setSiteLinkFocus(true)}
                 onBlur={()=>{setSiteLinkFocus(false)}}
              />
              <span  className={`${siteLinkFocus? "hidden" : ""} text-slate-300 text-[0.8rem] `}
                onClick={()=>{siteLinkInputRef.current.focus()}}
              >
                <FontAwesomeIcon icon={faPen} />
              </span>
  </div>
  </div>
  </form>
  </div>
  <div className='h-full'>
              <span  
              className='transition-all duration-200 delay-75 ease-in-out hover:text-red-600 text-slate-300 z-10'
              onClick={handleShowDeleteModal}
              >
                <FontAwesomeIcon icon={faTrash} />
              </span>
  </div>
  <AddLinkImg 
   handleInputFileClick={handleInputFileClick}
   showAddImg={showAddImg}
   setShowAddImg={setShowAddImg}
  />
  </div>
           
  </div>
{
showDelete ? 
  <div  
   className='flex w-full h-full top-0 z-20 bg-black/10 flex-wrap items-center gap-2 justify-center absolute'
   onClick={handleShowDeleteModal}
  >
  <div onClick={(e)=>{e.stopPropagation()}} className='w-4/5 md:w-2/5 bg-white flex flex-col gap-6 md:gap-4 justify-center items-center p-5 rounded-lg shadow-lg border'>
      <span className='text-cyan-600 text-lg font-semibold capitalize px-3 w-full text-center flex flex-col'>
        {`Delete ${siteName}`}
        <p className='text-sm text-red-400'>Are you sure you want to delete this link?</p>
      </span>
      <span className='flex gap-5 w-full items-center justify-center'>
      <button className='hover:bg-gray-600/60 w-20 bg-gray-300 text-white p-1 rounded-md transition-all duration-200 delay-200'
        onClick={handleShowDeleteModal}
      >
        Cancel
      </button>
      <button className='hover:bg-red-600/60 w-20 bg-red-600 text-white p-1 rounded-md transition-all duration-200 delay-200'
        onClick={handleDelete} 
      >
        Delete
      </button>
      </span>
  </div>
  </div>   : 
null
}
</>
  )
}

export default LinkPageData