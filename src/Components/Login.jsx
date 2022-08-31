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
        <input className='rounded'
         onChange={(e)=>{setEmail(e.target.value)}}
         type="email" 
         value={email}
         required

          />

    </div>
    <div className='flex flex-col'>
        <label className='p-1' htmlFor="">Password</label>
        <input className='rounded' 
         onChange={(e)=>{setPass(e.target.value)}}
         type="password"
         value={pass}
         required
         />
    </div>
    
    <div className='flex items-center'>
        <button className='bg-blue-600 w-full p-2 rounded' disabled={loading} 
        type="submit" 
        > 
        
        Login
        
        </button>
    </div>
    
    <div className='p-1'>   
    <span>Don't have an account?</span> 
     <Link to="/signup">
     <span className='text-blue-600'>Sign up</span>
     </Link>
     </div>

    </div>
  
 </form>
  
    </div>
  )
}

export default Login