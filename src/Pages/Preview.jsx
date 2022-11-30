import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'




const Preview = ({avater}) => {
    const { user, links, getLinks, description } = useAuth()

useEffect(()=>{
  getLinks()
}, [])


    const prflName = user.name
  return (
   <div className='h-full min-h-screen  mx-auto bg-cyan-600/20 flex flex-col justify-between items-center relative'>

      <div className='flex flex-col w-full md:w-2/3 lg:w-1/2 px-10 h-full  items-center overflow-y-auto'>
         <div className={`${user.profileImg ? "bg-white" : null} flex flex-col h-64 items-center justify-center gap-1 w-full bg-no-repeat bg-cover bg-center  `} style={{backgroundImage: `url(${user.profileImg})`}}>
            <span className={`${!user.profileImg  ? "bg-white" : "bg-black/40"} w-full h-full flex items-center justify-center  py-1 `}><span className='w-[85%] h-full bg-no-repeat bg-cover border border-transparent flex items-center justify-center capitalize font-bold text-6xl ' style={{backgroundImage: `url(${user.profileImg})`}}>{!user.profileImg ? user.name.charAt(0): null}</span></span>
         </div>
           <span className='flex flex-col   py-3 w-full text-center bg-cyan-600'> 
             <span className='text-xl font-medium  text-white capitalize'>{prflName}</span>
             <span className='text-[15px] text-gray-100 whitespace-pre-wrap '>{description}</span>
           </span>
         <div className='w-full'>{
           links.map(data =>(
           <div className='flex  items-center py-4 bg-white justify-between px-1 border-b' key={data._id}>
            <div className='flex gap-3 items-center'>
              <span className='w-10 h-10 rounded bg-no-repeat bg-cover' style={{backgroundImage: `url(https://${new URL(data.siteLink).hostname}/favicon.ico)`}}></span>
              <span className='font-medium capitalize'><a href={data.siteLink} target="blank">{data.siteName}</a></span>
            </div>
              <span className='py-1 px-2 bg-gray-300/40 rounded'><a href={data.siteLink} target="blank">Visit</a></span>
           </div>
          ))
          }
         
         </div>
      </div>
      <div className='flex w-full relative justify-center items-center'>
      <Link to="/dashboard/link" className=' absolute  w-12 h-12 flex items-center justify-center rounded-full bg-cyan-600'><span className='min-w-full text-2xl text-white p-2  rounded-full text-center '><FontAwesomeIcon icon={faClose} /></span></Link>
      <span className='flex w-full justify-end pr-5 py-4  font-semibold text-xl '><span>Linkpath</span></span>
      </div>
        </div>
  )
}

export default Preview