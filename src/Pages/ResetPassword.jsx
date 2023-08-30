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
  const handleReset = async (e) => {
    e.preventDefault()
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