import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'




const Preview = ({avater, siteData}) => {
    const { user } = useAuth()
    const prflName = user.email.substring(0, user.email.indexOf("@")).replace(/[0-9]/g, '')
  return (
    <div className='h-full min-h-screen bg-cyan-600/20 flex flex-col justify-between relative'>

<div className='flex flex-col w-full px-10 h-full  items-center overflow-y-auto'>
         <div className='flex flex-col h-44 items-center justify-center gap-1 w-full bg-no-repeat bg-cover py-1' style={{backgroundImage: `url(${avater.profilePic})`}}>
          <span className='w-40 h-40 bg-no-repeat bg-cover ' style={{backgroundImage: `url(${avater.profilePic})`}}></span>
         </div>
         <span className='text-xl font-medium  py-5 w-full text-center bg-cyan-600 text-white'>{prflName}</span>
         <div className='w-full'>{
          siteData.map(data =>(
            <div className='flex flex-col items-center ' key={data.id}>
            <span className='px-3 py-7 font-medium w-full border-b bg-white'><a href={data.siteLink}>{data.siteName}</a></span>
            </div>
          ))
          }
         
         </div>
        
       </div>
       <span className='flex w-full justify-end pr-5 py-4  font-semibold text-xl '><span>Linkpath</span></span>
       <Link to="/dashboard/link" className='absolute bottom-10 left-44 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-600'><span className='min-w-full text-2xl text-white p-2  rounded-full text-center '><FontAwesomeIcon icon={faClose} /></span></Link>
    </div>
  )
}

export default Preview