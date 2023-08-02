import React, {useState,} from 'react'
import { useAuth } from '../Context/AppContext';
import {  Link } from 'react-router-dom';
import {  Spinner } from 'flowbite-react/lib/esm/components';
import Home2 from '../assets/Home2.svg'



const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, loginError, loading, emailVerifiedLogin } = useAuth()
 

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
  <div className='px-5 md:px-12 pt-10 h-screen lg:w-3/5 mx-auto relative'>
    <div  className='lg:w-[45%] mx-auto py-5 flex justify-center items-center'>
      <span className='text-cyan-600 text-2xl font-semibold'>Linkpath</span>
    </div>
 <form action='' onSubmit={handleLogin} className='p-3  bg-white  border-gray-300 border-[0.5px] rounded-md  lg:w-[45%] mx-auto py-5'>
 <span className={`${loginError === ""? "hidden": "block"} text-white bg-red-600 px-1 py-3 text-center rounded-md`}>{loginError}</span>
 <span className={`${emailVerifiedLogin === ""? "hidden": "block"}  bg-green-500 text-sm text-white px-1 text-center py-3 rounded-md`}>{emailVerifiedLogin}</span>
    <div className=' flex flex-col gap-5'>
    <span className='text-2xl font-semibold flex items-center justify-start text-cyan-600'>Login to your account</span>
    <div className='flex flex-col'>

        <label className='p-1 mb-1 font-medium' htmlFor="">Email Address</label>
        <input className='rounded-md lowercase focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400'
         onChange={(e)=>{setEmail(e.target.value)}}
         type="email" 
         value={email}
         required

          />

    </div>
    
    <div className='flex flex-col'>
        <label className='p-1 mb-1 font-medium' htmlFor="">Password</label>
        <input className='rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-600 focus:border-cyan-600 p-1 border-[0.5px] border-gray-400' 
         onChange={(e)=>{setPassword(e.target.value)}}
         type="password"
         value={password}
         required
         placeholder="******"
         />
    </div>
    
    <div className='flex items-center'>
        <button className='transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 bg-cyan-600 w-full p-1 rounded-md text-white my-2' disabled={loading} 
        type="submit" 
        > 
        
        Login
        
        </button>
    </div>
    
    <div className='w-full flex items-center justify-end'>
      <Link to='/forgotpassword'><span className='text-blue-600  text-sm hover:text-purple-600'>Forgot Password?</span></Link>
    </div>
    </div>

    
  
 </form>
 
 <div className='lg:w-[45%] mx-auto py-5'>
 <div className=' flex flex-col gap-1 items-center justify-center '>   
    <span className="text-xs w-full flex  items-center justify-center">
      <hr className='w-[45%] border-t-[0.01px] border-gray-300' />
      <span className='w-2/5 text-center'>New to Linkpath?</span> 
      <hr className="w-2/5 border-t-[0.01px] border-gray-300" />
    </span> 
     <Link className='w-full  flex my-2 ' to="/signup">
     <span className='border-[0.5px] border-gray-400 w-full p-1 rounded-md text-black text-base text-center transition-all duration-150 ease-in-out hover:bg-cyan-50'>
      Sign up
      </span>
     </Link>
     </div>
  
    </div>
    <span className='absolute top-0 z-[-1] lg:-top-5 right-0 lg:-right-[19rem]'><img  src={Home2} alt="deco" /></span>
    
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