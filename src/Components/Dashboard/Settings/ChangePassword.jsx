import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChangePassword = ({
    currentPassword,
    setCurrentPassword,
    newPassoword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword
}) => {


    const notify = ()=>{
        toast.info('coming soon',{
         autoClose: 1000
        })
      }

  return (
    <div className='flex flex-col  w-full  lg:w-[45%] pb-5 lg:pb-0 items-center gap-3   border rounded-lg'>
             <span className='w-full text-cyan-600 font-semibold text-xl px-3 pt-3 '>Reset Your Password</span>
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
             value={newPassoword}
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
           <button className='py-1 px-2 rounded bg-slate-300 font-medium text-white'>Cancel</button>
           <ToastContainer limit={2} />
           <button onClick={notify} className='py-1 px-2 rounded bg-cyan-600 font-medium text-white'>Reset</button>
        </div>
       
   </div>
  )
}

export default ChangePassword