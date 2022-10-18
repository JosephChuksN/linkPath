import React, {  useState, useEffect} from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AppContext'
import { Spinner } from 'flowbite-react'

const Signup = () => {
  
  
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConFirmPass] = useState("")
  const navigate = useNavigate()
  
  
  
  

 
  const {user, registerUser, error, setError, loading } = useAuth()
 
  //creates a user account
  const handleSubmit =  (e) =>{
    e.preventDefault()
      
    if(password !== confirmPass){
    return  setError('password must match')
      
    }

    
    registerUser(name, email, password)
    
  }

useEffect(()=>{
  if(user){
    navigate('/dashboard')
  }
}, [user, navigate])

  return (
    <>
   
    <div className='px-5 md:px-12 py-36 md:py-24 h-screen lg:w-3/5 mx-auto relative'>
     
 <form action="" onSubmit={handleSubmit} className='p-3 shadow-md bg-white rounded-md border-t-4 border-cyan-600 lg:w-1/2 mx-auto py-5'>
 <span className={`${error === ""? "hidden": "block"} bg-red-200 text-red-600 p-3 rounded`}>{error}</span>
    <div className=' flex flex-col gap-5 mt-3'>
    <span className='text-2xl font-semibold flex items-center justify-center'>Sign Up</span>
   
 
    <div className='flex flex-col'>

        <label className='p-1' htmlFor="">Username</label>
        <input className='rounded'
         onChange={(e)=>{setname(e.target.value)}}
         type="text" 
         value={name}
         name="username" 
         required 
         />

    </div>
    <div className='flex flex-col'>

       <label className='p-1 mb-2' htmlFor="">Your Email</label>
       <input className='rounded'
        onChange={(e)=>{setEmail(e.target.value)}}
        type="email" 
        value={email}
        name="email" 
        required 
         />

</div>
    <div className='flex flex-col'>

        <label className='p-1 mb-2' htmlFor="">Password</label>
        <input className='rounded' 
        onChange={(e)=>{setPassword(e.target.value)}}
        type="password" 
        value={password} 
        name="pass" 
        required 
        />

    </div>
    <div className='flex flex-col'>

        <label className='p-1 mb-2' htmlFor="">Confirm Password</label>
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
         className='bg-cyan-600 w-full p-2 rounded text-white' 
         type='submit'>

          Sign Up

        </button>
    </div>
    <div className='p-1 flex items-center justify-center gap-3'>  

     <span>Already have an account?</span> 
     <Link to="/login">
     <span className='text-cyan-600'>Log in</span>
     </Link>

      </div>
    </div>
  
 </form>
 
  
    </div>
    <div className={`flex w-full h-screen top-0 z-20 bg-black/30 flex-wrap items-center  gap-2 justify-center absolute ${loading? "block" : "hidden"}`}>
  <Spinner
    aria-label="Extra large spinner example"
    size="xl"
    color="success"
  />
</div>
    </>
  )
}

export default Signup