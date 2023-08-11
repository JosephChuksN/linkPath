import React, {useRef, useState,} from 'react'
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import { useAuth } from '../../../Context/AppContext';
import { storage } from '../../../firebaseConfig'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {  Spinner } from 'flowbite-react/lib/esm/components';
import { ToastContainer, toast } from 'react-toastify';
import { v4 } from 'uuid'
import 'react-toastify/dist/ReactToastify.css';
import { faL } from '@fortawesome/free-solid-svg-icons';









const Settings = () => {

  const { user, description, updateUser, updateError } = useAuth()
  const [username, setUsername] = useState(user.name)
  const email = useState(user.email)
  const [bio, setBio] = useState(description)
  const [showModal, setShowModal] = useState(false)
  const [profileImg, setProfileImg] = useState(null)
  const [previewImg, setPreviewImg] = useState()
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [loading, setLoading] = useState(false)
  
  
  
//Fn handles photo upload and user update
const handlePhotoUpload =  async() =>{
  setLoading(true)
  if(profileImg == null) return updateUser(username, email, bio, profileImg) //this handles update if no photo to upload
  
  const fileName =  profileImg.name + v4()
  const storageRef = ref(storage, `/images/${fileName}`)
  await uploadBytes(storageRef, profileImg);
  await getDownloadURL(ref(storage, `/images/${fileName}`)).then((url)=>{
     updateUser(username, email, bio, url)
   })
}  
  

  const handleShowModal = (e)=>{ 
   e.preventDefault()
   setShowModal(!showModal)
}

const handleImgChange = (e)=>{

  setProfileImg(e.target.files[0])
  setPreviewImg(URL.createObjectURL(e.target.files[0]))

} 


 const updateDone = ()=>{
  toast.info('profile updated',{
   autoClose: 1000
  })
}
const updateErr = ()=>{
  toast.error(updateError,{
    autoClose: 1000
  })
}
  

  const handleUserUpdate = async () =>{

  setShowModal(!showModal)
  await handlePhotoUpload()
  console.log(updateError)
  if(updateError) return updateErr() 
  updateDone()

  } 


return (
<div className='flex lg:flex-row flex-col  w-full px-3 md:px-0 py-5 md:pt-10 md:w-3/4 lg:w-full  gap-3 lg:px-5 '>

    <EditProfile 
     profileImg={user.profileImg}
     previewImg={previewImg}
     firsChar={user.name.charAt(0)}
     handleImgChange={handleImgChange}
     bio={bio}
     handleShowModal={handleShowModal}
     username={username}
     setUsername={setUsername}
     setBio={setBio}
     showModal={showModal}
     handleUserUpdate={handleUserUpdate}
     loading={loading}

    />
    <ToastContainer limit={2} />
    <ChangePassword 
    currentPassword={currentPassword}
    setCurrentPassword={setCurrentPassword}
    newPassword={newPassword}
    setNewPassword={setNewPassword}
    confirmNewPassword={confirmNewPassword}
    setConfirmNewPassword={setConfirmNewPassword}
    
    />
    </div>
  )
}

export default Settings