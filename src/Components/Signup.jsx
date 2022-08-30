import React, { useRef, useState} from 'react'
import { Alert } from 'flowbite-react'
import {  Link  } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const Signup = () => {
  const [error, setError] = useState('bg')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConFirmPass] = useState("")

 
  const { SignUp } = useAuth()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')

    try{
      await SignUp(email, pass)
    } catch{
      setError(e.message)
      console.log(e.message)
    }
  }



  return (
    <div className='px-3 py-36 h-screen lg:w-3/4 mx-auto'>
     
 <form action="" onSubmit={handleSubmit} className='p-3 shadow-md bg-gray-100 rounded lg:w-1/2 mx-auto py-5'>
 <Alert>{error}</Alert>
    <div className=' flex flex-col gap-5 mt-3'>
    <span className='text-2xl font-semibold'>Sign Up</span>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Your Email</label>
        <input onChange={(e)=>{setEmail(e.target.value)}} className='rounded' type="email" value={email} name="email" required />
    </div>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Password</label>
        <input onChange={(e)=>{setPass(e.target.value)}} className='rounded' type="password" value={pass} name="pass" required />
    </div>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Confirm Password</label>
        <input onChange={(e)=>{setConFirmPass(e.target.value)}} className='rounded' type="password" value={confirmPass} name="confirmPass" required />
    </div>
    <div className='flex items-center'>
        <button disabled={loading} className='bg-blue-600 w-full p-2 rounded' type='submit'>Sign Up</button>
    </div>
    <div className='p-1'>   <span>Already have an account?</span> <Link to="/login"><span className='text-blue-600'>Log in</span></Link></div>
    </div>
  
 </form>
  
    </div>
  )
}

export default Signup