import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Spinner } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [resetError, setResetError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const params = useParams()
  const navigate = useNavigate()

  const updateDone = (updateSuccess)=>{
    toast.info( updateSuccess,{
     autoClose: 1000
    })
  }
  const handleReset = async () => {
      try {
        if(password !== confirmPassword) return setResetError("Password must match")
        setLoading(true)
    const {data} =  await axios.post(`${process.env.REACT_APP_API_URL}api/v1/auth/reset/${params.id}/${params.token}`, {password})
      setLoading(false)
      setSuccess(data.msg)
      setPassword("")
      setConfirmPassword("")
      updateDone(success)
      setTimeout(()=>{navigate("/login")}, 5000)
      } catch (error) {
         setResetError(error.response.data.msg)
         setLoading(false)
         setPassword("")
         setConfirmPassword("")
      }
  }

  return (
<>
 <div className='px-5 md:px-12 pt-10 h-screen lg:w-3/5 mx-auto '>
 <div  className='lg:w-[45%] mx-auto py-5 flex justify-center items-center'>
      <span className='text-cyan-600 text-2xl font-semibold'>
        Linkpath
      </span>
 </div>
 <form onSubmit={()=>handleReset()} className='p-3   border-gray-300 border-[0.5px] rounded-md  lg:w-[45%] mx-auto py-5'>
      <span className={`${success === ""? "hidden": "block"} border bg-green-400 text-center text-white p-1 rounded-md`}>
          {success}
      </span>
      <span className={`${resetError === ""? "hidden": "block"} border border-red-600 bg-red-200 text-red-600 p-1 rounded-md`}>
        {resetError}
      </span>
      <div className=' flex flex-col gap-5'>
      <div className='flex flex-col gap-1  items-center justify-start'>
        <span className='text-2xl font-semibold w-full flex text-cyan-600'>
            Reset Password
        </span>
        <span className='text-black text-sm font-medium'>
            Please enter your new password for your Linkpath account..
        </span>
      </div>
      <div className='flex flex-col'>
        <label className='p-1 mb-1 font-medium' htmlFor="">Password</label>
        <input className='rounded-md lowercase focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400'
           onChange={(e)=>{setPassword(e.target.value)}}
           type="password" 
           value={password}
           required
        />
       </div>
      <div className='flex flex-col'>
        <label className='p-1 mb-1 font-medium' htmlFor="">Re-enter password</label>
        <input className='rounded-md lowercase focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400'
           onChange={(e)=>{setConfirmPassword(e.target.value)}}
           type="password" 
           value={confirmPassword}
           required
        />
      </div>
      <div className='flex items-center'>
        <button className='transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 bg-cyan-600 w-full p-1 rounded-md text-white my-2' disabled={loading} 
          type="submit"
        > 
          Reset
        </button>
     </div>
    </div>
  </form>
  <ToastContainer limit={2} />
 </div>
 <div className={`flex w-full h-screen top-0 z-20 bg-black/30 flex-wrap items-center gap-2 justify-center absolute ${loading? "block" : "hidden"}`}>
    <Spinner
      aria-label="Extra large spinner example"
      size="xl"
      color="success"
    />
 </div>
</>
  )
}

export default ResetPassword