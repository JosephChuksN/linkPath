import React from 'react'
import Header from './Header'
import DashboardNav from './Navbar'
import { useAuth } from '../../Context/AuthContext'
import {  Outlet } from 'react-router'

const Dashboard = ({avater, siteData, description}) => {
     
const { user } = useAuth()
const prflName = user.name


  return (
    <div className='lg:flex lg:mx-6  bg-white'>
    <div className='flex flex-col  h-full min-h-screen  border-r lg:w-3/4 relative'>
      <Header avater={avater} />
      <DashboardNav />
      <Outlet />
    </div>
   <div className='hidden lg:block h-screen w-[20%] fixed right-14 '>
       <div className='h-[80%] mt-12 flex items-center justify-center flex-col rounded-3xl  border-x-[10px] border-black shadow-2xl border-y-[60px]  '>
        <span className='w-12 h-1 bg-gray-600 absolute top-[4.8rem] rounded-md'></span>
        <span className='w-10 h-10 bg-gray-600 absolute bottom-28 rounded-full'></span>
       
        <div className='flex flex-col w-full px-6 h-full bg-cyan-600/20 items-center overflow-y-auto justify-between'>
          <div className='flex flex-col w-full'>
          <div className='flex flex-col h-44 items-center justify-center gap-1 w-full bg-no-repeat bg-cover  ' style={{backgroundImage: `url(${avater.profilePic})`}}>
          <span className='w-full h-full flex items-center justify-center bg-black/40 py-1 '><span className='w-[85%] h-full bg-no-repeat bg-cover border border-transparent ' style={{backgroundImage: `url(${avater.profilePic})`}}></span></span>
         </div>
        <span className='flex flex-col   py-3 w-full text-center bg-cyan-600'> 
             <span className='text-md font-medium  text-white'>{prflName}</span>
             <span className='text-[10px] text-gray-100 whitespace-pre-wrap '>{description}</span>
        </span>
         <div className='w-full'>{
          siteData.map(data =>(
            <div className='flex  items-center py-4 bg-white justify-between px-1 border-b' key={data.id}>
             <div className='flex gap-3 items-center'>
             <span className='w-8 h-8 rounded bg-no-repeat bg-cover' style={{backgroundImage: `url(${data.siteImg})`}}></span>
              <span className='font-medium'><a href={data.siteLink} target="blank">{data.siteName}</a></span>
             </div>
            <span className='px-1 bg-gray-300/40 rounded'><a href={data.siteLink} target="blank">Visit</a></span>
            </div>
          ))
          }
         
         </div>
         </div>
         <span className='flex w-full justify-end pr-3 py-4  font-semibold text-xl '><span>Linkpath</span></span>
       </div>
      
       
   </div>
   </div>
    </div>
   
  )
}

export default Dashboard