import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const FailedVerification = () => {
  return (
    <div className='flex flex-col gap-20  px-5 md:px-12 pt-14 h-screen lg:w-3/5 mx-auto '>
        <div  className='lg:w-[45%]  flex  items-center mx-auto justify-center w-full'>
          <span className='text-cyan-600 text-2xl lg:text-4xl  font-semibold'>Linkpath</span>
        </div>
      <div className='flex flex-col gap-3 lg:w-[45%] mx-auto items-center justify-center bg-white shadow-lg rounded-lg p-3 border'>
            <span className='text-xl text-white bg-red-600 p-2 w-full text-center flex items-center rounded-lg gap-1'>
            <span className='text-white  text-lg'><FontAwesomeIcon icon={faCircleInfo} /></span>   
            <span>There was a problem!</span>
            </span>
            <span className='text-black font-medium text-center text-base '>
              The email verification link is invalid or timed out. please request a new link, click
              <Link to="/login">
              <span className='text-cyan-600 underline underline-offset-2'> here</span>
              </Link>  to login.
            </span>
        </div>
    </div>
  )
}

export default FailedVerification