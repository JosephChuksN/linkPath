import React, { useEffect} from 'react'
import {  useNavigate } from 'react-router'
import Header from '../Components/Dashboard/Header'
import DashboardNav from '../Components/Dashboard/Navbar'
import MobileView from "../Components/Dashboard/MobileView"
import { useAuth } from '../Context/AppContext'


const Dashboard = ({avater, siteData}) => {
     
const { user, links, getLinks, description } = useAuth()
const prflName = user.name



const navigate = useNavigate()
useEffect(()=>{
navigate('links')
  // getLinks()
}, [])



  return (
    <div className='lg:flex lg:mx-6  bg-white'>
      <div className='flex flex-col  h-full min-h-screen w-full border-r xl:w-3/4 relative'>
        <Header avater={avater} />
        <DashboardNav />
      </div>
      <MobileView />
    </div>
   
  )
}

export default Dashboard