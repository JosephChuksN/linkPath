import React from 'react'
import Header from './Header'
import DashboardNav from './Navbar'

const DashboardHeader = () => {
  return (
    <div className='flex flex-col border-r w-full'>
        <Header />
        <DashboardNav />
      </div>
  )
}

export default DashboardHeader