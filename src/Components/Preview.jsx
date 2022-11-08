import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'




const Preview = ({avater}) => {
    const { user, links, getLinks, bio } = useAuth()

useEffect(()=>{
  getLinks()
}, [])


    const prflName = user.name
  return (
   <div className='h-full min-h-screen  mx-auto bg-cyan-600/20 flex flex-col justify-between items-center relative'>

      <div className='flex flex-col w-full lg:w-1/4 px-10 h-full  items-center overflow-y-auto'>
         <div className='flex flex-col h-64 items-center justify-center gap-1 w-full bg-no-repeat bg-cover  ' style={{backgroundImage: `url(${user.profileImg})`}}>
            <span className='w-full h-full flex items-center justify-center bg-black/40 py-1 '><span className='w-[85%] h-full bg-no-repeat bg-cover border border-transparent ' style={{backgroundImage: `url(${user.profileImg})`}}></span></span>
         </div>
           <span className='flex flex-col   py-3 w-full text-center bg-cyan-600'> 
             <span className='text-xl font-medium  text-white capitalize'>{prflName}</span>
             <span className='text-[15px] text-gray-100 whitespace-pre-wrap '>{bio}</span>
           </span>
         <div className='w-full'>{
           links.map(data =>(
           <div className='flex  items-center py-4 bg-white justify-between px-1 border-b' key={data._id}>
            <div className='flex gap-3 items-center'>
              <span className='w-10 h-10 rounded bg-no-repeat bg-cover' style={{backgroundImage: `url(https://${new URL(data.siteLink).hostname}/favicon.ico)`}}></span>
              <span className='font-medium'><a href={data.siteLink} target="blank">{data.siteName}</a></span>
            </div>
              <span className='py-1 px-2 bg-gray-300/40 rounded'><a href={data.siteLink} target="blank">Visit</a></span>
           </div>
          ))
          }
         
         </div>
      </div>
          <span className='flex w-full justify-end pr-5 py-4  font-semibold text-xl '><span>Linkpath</span></span>
          <Link to="/dashboard/link" className='absolute bottom-10 lg:left-[47rem] left-48 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-600'><span className='min-w-full text-2xl text-white p-2  rounded-full text-center '><FontAwesomeIcon icon={faClose} /></span></Link>
   </div>
  )
}

export default Preview