import React from 'react'
import DashboardHeader from '../Components/Dashboard/DashboardHeader'
import Header from '../Components/Dashboard/Header'
import LinkPage from '../Components/Dashboard/LinkPage'
import MobileView from '../Components/Dashboard/MobileView'
import DashboardNav from '../Components/Dashboard/Navbar'
import Subnavigation from '../Components/Dashboard/Subnavigation'

const Links = () => {
  return (
    <div className='lg:flex gap-4 border border-solid-red w-full bg-white'>
      <div className='w-full'>
        <DashboardHeader />
        <Subnavigation />
        <LinkPage />  
      </div>
      <MobileView />
    </div>
  )
}

export default Links