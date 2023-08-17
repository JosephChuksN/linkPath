import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../Context/AppContext';
import loadingGif from '../../../assets/loading.gif'

const ChangePassword = () => {

  const [btn, setBtn] = useState(true)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const [loading, setLoading] = useState(true)
  const { changePass } = useAuth()


 
  const notify = ()=>{
    toast.success('password change complete',{
     autoClose: 1000
    })
  }
  const isMatched = ()=>{
    toast.error('password must match',{
     autoClose: 1000
    })
  }
  const handlePasswordChange = async () => {
    if(newPassword !== confirmNewPassword) return isMatched()
    setLoading(true)
   await changePass(currentPassword, newPassword)
    notify()
    setCurrentPassword("")
    setNewPassword("")
    setConfirmNewPassword("")
    setLoading(false)
   
  }
 


 
useEffect(()=>{
     if(currentPassword.length >= 6 && newPassword.length >= 6 && confirmNewPassword.length >= 6 ){
      setBtn(false)
     }else{
      setBtn(true)
     }
}, [currentPassword, newPassword, confirmNewPassword])

   

  return (
    <div className='flex flex-col  w-full  lg:w-[45%] pb-5 lg:pb-0 items-center gap-3  border rounded-lg relative'>
             <span className='w-full text-cyan-600 font-semibold text-xl px-3 pt-3 '>Change Your Password</span>
      <div className='flex flex-col w-full gap-4 p-3 '>
            <div className='flex flex-col'>
            <label  className='mb-1 font-medium' htmlFor="">Current Password</label>
             <input 
             className='w-full outline-none focus:ring-0 rounded-md'
             type="text" 
             value={currentPassword}
             onChange={(e)=>{setCurrentPassword(e.target.value)}}
             />
             </div>
             <div className='flex flex-col'>
            <label  className='mb-1 font-medium' htmlFor="">New Password</label>
             <input 
             className='w-full outline-none focus:ring-0 rounded-md'
             type="text" 
             value={newPassword}
             onChange={(e)=>{setNewPassword(e.target.value)}}
             />
             </div>
             <div className='flex flex-col'>
            <label  className='mb-1 font-medium' htmlFor="">Re-enter New Password</label>
             <input 
             className='w-full outline-none focus:ring-0 rounded-md'
             type="text" 
             value={confirmNewPassword}
             onChange={(e)=>{setConfirmNewPassword(e.target.value)}}
             />
             </div>
      </div>

        <div className='flex items-center justify-end gap-2 w-full px-3'>
           <button className='py-1 px-2 rounded bg-slate-400 font-medium text-white'>Cancel</button>
           
           <button 
            className={`${btn? "bg-cyan-700/50" : ""} py-1 px-2 rounded bg-cyan-600 font-medium text-white`}
            onClick={handlePasswordChange} 
            disabled={btn}
            >
              Reset
            </button>
        </div>
        {loading? <div className={` flex w-full h-full  top-0 z-20 flex-wrap items-center gap-2 justify-center absolute`}>
        <span className='w-3/5 md:w-2/5 lg:w-3/5 flex flex-col justify-center items-center md:p-5 p-8'>
            <img className='lg:w-10 lg:h-10 w-6 h-6' src={loadingGif} alt="loading" />
        </span>
     </div>: null} 
        <ToastContainer limit={2} />
   </div>
   
  )
}

export default ChangePassword