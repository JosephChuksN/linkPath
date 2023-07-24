import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'



const VerificationSuccess = () => {
      const [validLink, setValidLink] = useState(null)
      const params = useParams()



 useEffect(()=>{
    const verify = async () =>{
      
        try {
           const {data} = await axios.get(`https://linkpath-api.onrender.com/api/v1/auth/verify/${params.id}/${params.token}`)
           const {token} = data
           localStorage.setItem('token', token)
           setValidLink(true)
        } catch (error) {
          if(error.response.data.msg === "invalid link")
           return setValidLink(false)
          
        }
      }
      verify()
     
      
 }, [params])

  return (
    <div className='flex flex-col gap-20  px-5 md:px-12 pt-14 h-screen lg:w-3/5 mx-auto '>
        <div  className='lg:w-[45%]  flex  items-center mx-auto justify-center w-full'>
          <span className='text-cyan-600 text-2xl lg:text-4xl  font-semibold'>Linkpath</span>
        </div>
      {!validLink && !null? (<div className='flex flex-col gap-5 lg:w-[45%] mx-auto'>
            <span className='flex flex-col  items-center gap-2 mx-auto'>
               <span className='text-3xl lg:text-5xl text-center text-cyan-600'>Sorry Verification failed </span>
                <span className='text-red-600 text-3xl lg:text-6xl'><FontAwesomeIcon icon={faCircleInfo} /></span>
            </span>
            <span className='text-black font-medium text-center text-lg'>Invalid Link, please request a new Verification link </span>
            <Link to='/login' className='w-full text-center'>
            <button className='transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 mx-auto w-44 lg:w-52 bg-cyan-600  py-3 px-1 rounded-lg text-white'>
                Back to login
            </button>
            </Link>
        </div>) : (<div className='flex flex-col gap-5 lg:w-[45%] mx-auto'>
            <span className='flex items-center gap-2 mx-auto'>
               <span className='text-3xl lg:text-6xl text-cyan-600'> Welcome </span>
                <span className='text-cyan-600 text-3xl lg:text-6xl'><FontAwesomeIcon icon={faCircleCheck} /></span>
            </span>
            <span className='text-black font-medium text-center text-lg'>Your account has been verified</span>
            <Link to='/login'>
            <button className='transition-all delay-75 duration-300 ease-in-out hover:bg-cyan-700 mx-auto w-44 lg:w-52 bg-cyan-600  py-3 px-1 rounded-lg text-white'>login</button>
            </Link>
        </div>) } 

    </div>
  )
}

export default VerificationSuccess