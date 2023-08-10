import React, { useState,  useRef } from 'react'
import { useAuth } from '../../Context/AppContext'
import LinkInput from './LinkInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { storage } from '../../firebaseConfig'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { v4 } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const LinkPageData = ({siteInfo}) => {

const id = siteInfo._id
const {deleteLink, editThumbmail}= useAuth()
const [showDelete, setShowDelete] = useState(false)
const [siteName, setSiteName] = useState(siteInfo.siteName)
const [siteLink, setSiteLink] = useState(siteInfo.siteLink)
const [showAddImg, setShowAddImg] = useState(false)
const [loading, setLoading] = useState(false)
const [profileImg, setProfileImg] = useState(null)
const [previewImg, setPreviewImg] = useState()
const [showSavePhoto, setShowSavePhoto] = useState(false)
const imgInputRef = useRef()
const linkImg = siteInfo.linkImg




const updateDone = ()=>{
  toast.info("photo uploaded successfully",{
   autoClose: 1000
  })
}

//handles link thumbmail upload
const handlePhotoUpload =  async() =>{
  if(profileImg == null) return setLoading(false)

  const fileName =  profileImg.name + v4()
  const storageRef = ref(storage, `/images/${fileName}`)
  await uploadBytes(storageRef, profileImg);
  await getDownloadURL(ref(storage, `/images/${fileName}`)).then((url)=>{
     editThumbmail(id, url)
   })
   
}  

//handles image adding or edit
const handleImgChange =  (e)=>{
  
  setProfileImg( e.target.files[0])
  setPreviewImg(URL.createObjectURL(e.target.files[0]))
  setShowAddImg(!showAddImg)
  setShowSavePhoto(!showSavePhoto)

} 

const handleDelete = ()=>(
  // setSiteData(siteData.filter(details => details.id !== id))
  deleteLink(id)
)

const handleShowDeleteModal = ()=>{ 
  setShowDelete(!showDelete)
  setShowAddImg(false)
}

//cancels photo upload
const handleCancelUpload = () => {

  setPreviewImg()
  imgInputRef.current.value = null
  setShowSavePhoto(!showSavePhoto)
}

//save your photo to database
const handleSavePhoto = async () => {
  setShowSavePhoto(false)
  setLoading(true)
  await handlePhotoUpload()
  setLoading(false)
  updateDone()
} 

return (
  <>
  <div className='flex items-center justify-center px-1 py-2 w-full  lg:w-3/4 relative'>
  <LinkInput 
  id={id}
  handlePhotoUpload={handlePhotoUpload}
  handleImgChange={handleImgChange}
  handleShowDeleteModal={handleShowDeleteModal}
  showAddImg={showAddImg}
  setShowAddImg={setShowAddImg}
  previewImg={previewImg}
  siteName={siteName}
  siteLink={siteLink}
  setSiteName={setSiteName}
  setSiteLink={setSiteLink}
  linkImg={linkImg}
  loading={loading}
  imgInputRef={imgInputRef}
  />
  
  </div>
  <ToastContainer limit={2} />
  {showSavePhoto? 
  <div className='flex w-full h-full top-0 z-20 bg-cyan-600/10 flex-wrap items-center gap-2 justify-center absolute px-3 lg:px-0'>
  <div className='lg:w-2/5 w-full bg-white rounded-md flex flex-col gap-3 items-center justify-center p-3'>
    <span className='w-full flex items-center justify-end'>
    <span className='p-2 text-xl w-7 h-7 flex items-center justify-center transition-all duration-300 delay-75 ease-in-out hover:bg-gray-200 rounded-full' 
      onClick={handleCancelUpload}>
      <FontAwesomeIcon icon={faXmark}  />
    </span>
    </span>
    <span className='flex bg-cover bg-no-repeat items-center justify-center w-72 h-72'
     style={{backgroundImage: `url(${previewImg})`}} 
     >
    </span>
    <button className='px-2 py-1 rounded-md w-28 border bg-cyan-600 text-white transition-all duration-200 delay-75 ease-in-out hover:bg-cyan-700 hover:scale-110'
     onClick={handleSavePhoto}
     >
          Save Photo
    </button>
  </div>
  </div>
   : null
  }
{
showDelete ? 
  <div  
   className='flex w-full h-full top-0 z-20 bg-cyan-600/10 flex-wrap items-center gap-2 justify-center absolute'
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