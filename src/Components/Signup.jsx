import React, {  useState} from 'react'
import {  Link, useNavigate  } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

const Signup = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConFirmPass] = useState("")
  const navigate = useNavigate()

 
  const {signUp} = useAuth()
 
  //creates a user account
  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')
    if(pass !== confirmPass){
      setError('password must match')
      return alert(error)
    }

    try{
      setError('')
      await signUp(email, pass)
      setLoading(true)
      navigate('/dashboard')
    } catch (e){
      setError(e.message)
      alert(error)
      
    }
    setLoading(false)
  }



  return (
    <div className='px-3 py-36 h-screen lg:w-3/4 mx-auto'>
     
 <form action="" onSubmit={handleSubmit} className='p-3 shadow-md bg-gray-100 rounded lg:w-1/2 mx-auto py-5'>
 
    <div className=' flex flex-col gap-5 mt-3'>
    <span className='text-2xl font-semibold'>Sign Up</span>
    <div className='flex flex-col'>

        <label className='p-1' htmlFor="">Your Email</label>
        <input className='rounded'
         onChange={(e)=>{setEmail(e.target.value)}}
         type="email" 
         value={email}
         name="email" 
         required 
         />

    </div>
    <div className='flex flex-col'>

        <label className='p-1' htmlFor="">Password</label>
        <input className='rounded' 
        onChange={(e)=>{setPass(e.target.value)}}
        type="password" 
        value={pass} 
        name="pass" 
        required 
        />

    </div>
    <div className='flex flex-col'>

        <label className='p-1' htmlFor="">Confirm Password</label>
        <input className='rounded' 
        onChange={(e)=>{setConFirmPass(e.target.value)}}
        type="password" 
        value={confirmPass} 
        name="confirmPass" 
        required 
        />

    </div>
    <div className='flex items-center'>
        <button disabled={loading}
         className='bg-blue-600 w-full p-2 rounded' 
         type='submit'>

          Sign Up

        </button>
    </div>
    <div className='p-1'>  

     <span>Already have an account?</span> 
     <Link to="/login">
     <span className='text-blue-600'>Log in</span>
     </Link>

      </div>
    </div>
  
 </form>
  
    </div>
  )
}

export default Signup