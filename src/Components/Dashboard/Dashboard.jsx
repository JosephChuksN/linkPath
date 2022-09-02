import React from 'react'
import Header from './Header'
import DashboardNav from './Navbar'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate, Outlet } from 'react-router'

const Dashboard = () => {
 const {user, logout} = useAuth()
 const navigate = useNavigate()

 const handleLogout = async () =>{
    
    try{
        await logout()
        navigate('login')
    } catch (e) {
        alert(e.message)
    }
 }

  return (
    <div className='flex flex-col  lg:mx-24  h-full min-h-screen  bg-white'>
      <Header  />
      <DashboardNav />
      <Outlet />
    </div>
  )
}

export default Dashboard