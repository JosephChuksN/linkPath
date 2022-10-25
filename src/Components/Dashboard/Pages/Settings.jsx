import React, {useRef, useState} from 'react'
import { useAuth } from '../../../Context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








const Settings = ({avater, setAvater}) => {

  const { user, bio, updateUser } = useAuth()
  const [username, setUsername] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [descrip, setDescription] = useState(bio)
  const [showModal, setShowModal] = useState(false)
  // const [profilePic, setProfilePic] = useState()
  const fileInputRef = useRef()

  const handleShowModal = ()=>{ setShowModal(!showModal)}

  
  const notify = ()=>{
   toast.info('coming soon',{
    autoClose: 1000
   })
 }

  const handleImageChange = (e) =>{
  
  setAvater({'profilePic':URL.createObjectURL(e.target.files[0])})

  }

  const handleUserUpdate = () =>{
   
  updateUser(username, email, descrip)
  handleShowModal()
  } 




  return (
    <div className='flex flex-col  w-full px-3 lg:w-3/4 items-center mx-auto gap-5 '>

        <div className='flex flex-col  w-full  lg:w-3/5  items-center gap-3 shadow-md p-3 border rounded'>
            <span className='w-full text-cyan-600 font-medium text-lg'>Edit Profile</span>
         <div  className='flex flex-col items-center justify-end gap-4 w-full'>
          <div className='flex items-center justify-start w-full my-3 gap-5 relative'>
          <span  className='w-28  h-28 rounded-full flex items-center bg-no-repeat cursor-pointer  bg-cover'style={{backgroundImage: `url(${avater.profilePic})`}}></span>
          <span onClick={()=>{fileInputRef.current.click()}} className='bg-transparent absolute cursor-pointer w-28  h-28 text-white/80 flex items-center justify-center text-3xl'><FontAwesomeIcon icon={faCamera} /></span>
          <span onClick={()=>{fileInputRef.current.click()}} className='text-cyan-600 cursor-pointer '>Edit</span>
          </div>
            <input ref={fileInputRef} className='hidden' type="file" accept="image/*" onChange={handleImageChange} />
            <input className='w-full lowercase bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'
            type="text"
            value={username}
            name="username"
            onChange={(e)=>{setUsername(e.target.value)}}
            />
             <input className='w-full lowercase bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'
            type="text"
            value={email}
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
            />
             <textarea className='w-full resize-none bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'
            placeholder='Description'
            rows="2"
            value={descrip}
            name="description"
            onChange={(e)=>{setDescription(e.target.value)}}
            
            
            />
         </div>   
           

        <div className='flex items-center justify-end  w-full'>
           <button onClick={handleShowModal} className='py-1 px-2 rounded bg-cyan-600 text-white'>Edit</button>
        </div>

      </div>

        <div className='flex flex-col  w-full  lg:w-3/5  items-center gap-3 shadow-md p-3 border rounded'>
           <span className='w-full text-cyan-600 font-medium text-lg'>Change your password</span>
        <div className='flex flex-col w-full gap-3'>
           <input className='w-full bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'
           type="text" 
           placeholder='Current Password'
           />
           <input className='w-full bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'
           type="text"
           placeholder='New Password'        
           />
           <input className='w-full bg-slate-100  outline-none focus:bg-cyan-600/10 focus:border-none focus:ring-0 rounded-l-xl md:rounded-xl border-none'      
           type="text" 
           placeholder='Confirm Password'
           />
        </div>

        <div className='flex items-center justify-end gap-3 w-full'>
           <button className='py-1 px-2 rounded bg-slate-400 text-white'>Cancel</button>
           <ToastContainer limit={2} />
           <button onClick={notify} className='py-1 px-2 rounded bg-cyan-600 text-white'>Reset</button>
        </div>
       
        </div>

     {showModal ?<div onClick={handleShowModal} className='flex w-full h-full top-0 z-20 bg-black/10 flex-wrap items-center gap-2 justify-center absolute'>
        <div onClick={(e)=>{e.stopPropagation()}} className='w-3/5 md:w-1/5 bg-white flex flex-col gap-6 md:gap-4 justify-center items-center md:p-5 p-8 rounded-lg shadow-lg border'>
          <span className='text-cyan-600 text-xl'>Update Profile</span>
          <span className='flex gap-5'>
          <button  onClick={handleShowModal} className='hover:bg-gray-600/60 bg-gray-300 text-white p-1 rounded-md transition-all duration-200 delay-200'>Cancel</button>
          <button onClick={handleUserUpdate} className='hover:bg-cyan-600/60 bg-cyan-600 text-white p-1 rounded-md transition-all duration-200 delay-200'>Save</button>
         </span>
        </div>
     </div>: null}

    </div>
  )
}

export default Settings