import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


const Profile = ({avater}) => {
    
    const {name} = useParams()
    const [user, setUser] = useState({})
    const [links, setLinks] = useState([])
    const [error, setError] = useState('')
    

    const getLinks = async(name) => {
      
      try {
        const {data} = await axios.get(`https://linkpath-api.onrender.com/api/v1/link/${name}`)
        const {user, link} = data

      setUser(user)
      setLinks(link)
      } catch (error) {
    
        setError(error.response.data.msg)
    
      }
    }

    useEffect(()=>{
        getLinks(name)
    }, [])

  return (
  <>{!error ?  <div className='h-full min-h-screen  mx-auto bg-cyan-600/20 flex flex-col justify-between items-center relative'>

  <div className='flex flex-col w-full lg:w-1/4 px-10 h-full  items-center overflow-y-auto'>
    <div className='flex flex-col h-64 items-center justify-center gap-1 w-full bg-no-repeat bg-cover  ' style={{backgroundImage: `url(${user.profileImg})`}}>
           <span className='w-full h-full flex items-center justify-center bg-black/40 py-1 '><span className='w-[85%] h-full bg-no-repeat bg-cover border border-transparent ' style={{backgroundImage: `url(${user.profileImg})`}}></span></span>
    </div>
       <span className='flex flex-col   py-3 w-full text-center bg-cyan-600'> 
        <span className='text-xl font-medium  text-white capitalize'>{user.name}</span>
        <span className='text-[15px] text-gray-100 whitespace-pre-wrap '>{user.bio}</span>
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
  </div> :
   <div className='w-full bg-white h-screen'>
     <span className='text-black text-4xl flex items-center justify-center w-full h-screen '>{error}</span>
  </div>
   }</>
  )
}

export default Profile