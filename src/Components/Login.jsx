import React, {useState} from 'react'
import { useAuth } from '../Context/AuthContext';
import {  Link, useNavigate  } from 'react-router-dom';
import { Alert } from 'flowbite-react/lib/esm/components';


const Login = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

const handleLogin = async (e)=>{
 e.preventDefault()

 try{
  await login(email, pass)
  setLoading(true)
  navigate("/dashboard")
  
 } catch{
  setError('There was a problem')
 }
  setLoading(false)
}


  return (
  <div className='px-3 py-36 h-screen lg:w-3/4 mx-auto'>
 <form onSubmit={handleLogin} className='p-3 shadow-md bg-gray-100 rounded lg:w-1/2 mx-auto py-5'>
  <Alert>{error}</Alert>
   
    <div className=' flex flex-col gap-5'>
    <span className='text-2xl font-semibold'>Log In</span>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Your Email</label>
        <input onChange={(e)=>{setEmail(e.target.value)}} className='rounded' type="email" value={email} />
    </div>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Password</label>
        <input onChange={(e)=>{setPass(e.target.value)}} className='rounded' type="password" value={pass} />
    </div>
    
    <div className='flex items-center'>
        <button disabled={loading} type="submit" className='bg-blue-600 w-full p-2 rounded'>Login</button>
    </div>
    <div className='p-1'>   <span>Don't have an account?</span> <Link to="/signup"><span className='text-blue-600'>Sign up</span></Link></div>
    </div>
  
 </form>
  
    </div>
  )
}

export default Login