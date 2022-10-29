import React, {useState,} from 'react'
import { useAuth } from '../Context/AppContext';
import {  Link } from 'react-router-dom';
import {  Spinner } from 'flowbite-react/lib/esm/components';


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, loginError, loading } = useAuth()
 

const handleLogin =  (e)=>{
 e.preventDefault()

 
 login(email, password)
  
  
}
// useEffect(()=>{
//   if(user){
//     navigate('/dashboard')
//   }
// }, [user, navigate])


  return (
    <>
  <div className='px-5 md:px-12 py-36 h-screen lg:w-3/5 mx-auto '>
 <form action='' onSubmit={handleLogin} className='p-3 shadow-md bg-white rounded-md border-t-4 border-cyan-600  lg:w-1/2 mx-auto py-5'>
 <span className={`${loginError === ""? "hidden": "block"} border border-red-600 bg-red-200 text-red-600 p-3 rounded`}>{loginError}</span>
   
    <div className=' flex flex-col gap-5'>
    <span className='text-2xl font-semibold flex items-center justify-center'>Login</span>
    <div className='flex flex-col'>

        <label className='p-1 mb-2 font-medium' htmlFor="">Your Email</label>
        <input className='rounded lowercase focus:bg-cyan-600/10'
         onChange={(e)=>{setEmail(e.target.value)}}
         type="email" 
         value={email}
         required

          />

    </div>
    
    <div className='flex flex-col'>
        <label className='p-1 mb-2 font-medium' htmlFor="">Password</label>
        <input className='rounded focus:bg-cyan-600/10' 
         onChange={(e)=>{setPassword(e.target.value)}}
         type="password"
         value={password}
         required
         />
    </div>
    
    <div className='flex items-center'>
        <button className='bg-cyan-600 w-full p-2 rounded text-white my-2' disabled={loading} 
        type="submit" 
        > 
        
        Login
        
        </button>
    </div>
    
    <div className='p-1 flex items-center justify-center gap-3'>   
    <span>Don't have an account? </span> 
     <Link to="/signup">
     <span className='text-cyan-600'>Sign up</span>
     </Link>
     </div>

    </div>
  
 </form>
  
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

export default Login