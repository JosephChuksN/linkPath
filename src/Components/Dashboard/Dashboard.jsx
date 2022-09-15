import React from 'react'
import Header from './Header'
import DashboardNav from './Navbar'
import {  Outlet } from 'react-router'

const Dashboard = ({avater}) => {




  return (
    <div className='flex flex-col  lg:mx-24  h-full min-h-screen  bg-white'>
      <Header avater={avater} />
      <DashboardNav />
      <Outlet />
    </div>
  )
}

export default Dashboard