import React from 'react'
import Header from './Header'
import DashboardNav from './Navbar'
import { useAuth } from '../../Context/AuthContext'
import {  Outlet } from 'react-router'

const Dashboard = ({avater, siteData}) => {
     
const { user } = useAuth()
const prflName = user.email.substring(0, user.email.indexOf("@")).replace(/[0-9]/g, '')


  return (
    <div className='lg:flex lg:mx-6  bg-white'>
    <div className='flex flex-col   h-full min-h-screen  border-r lg:w-3/4'>
      <Header avater={avater} />
      <DashboardNav />
      <Outlet />
    </div>
   <div className='hidden lg:block h-screen w-[20%] fixed right-14 '>
       <div className='h-[80%] mt-12 flex items-center justify-center flex-col rounded-3xl  border-x-[10px] border-black border-y-[60px]  '>
        <span className='w-12 h-1 bg-gray-600 absolute top-[4.8rem] rounded-md'></span>
        <span className='w-10 h-10 bg-gray-600 absolute bottom-28 rounded-full'></span>
       
        <div className='flex flex-col w-full px-8 h-full bg-cyan-600/20 items-center overflow-y-auto'>
         <div className='flex flex-col h-44 items-center justify-center gap-1 w-full bg-no-repeat bg-cover py-1' style={{backgroundImage: `url(${avater.profilePic})`}}>
          <span className='w-40 h-40 bg-no-repeat bg-cover ' style={{backgroundImage: `url(${avater.profilePic})`}}></span>
         </div>
         <span className='text-md font-medium  py-3 w-full text-center bg-cyan-600 text-white'>{prflName}</span>
         <div className='w-full'>{
          siteData.map(data =>(
            <div className='flex flex-col items-center ' key={data.id}>
            <span className='px-3 py-4 font-medium w-full border-b bg-white'><a href={data.siteLink}>{data.siteName}</a></span>
            </div>
          ))
          }
         
         </div>
         <span className='flex w-full justify-end pr-3 py-4  font-semibold text-xl '><span>Linkpath</span></span>
       </div>
      
       
   </div>
   </div>
    </div>
   
  )
}

export default Dashboard