import React from 'react'
import Header from './Header'
import DashboardNav from './DashboardNav'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router'

const Dashboard = () => {
 const {user, logout} = useAuth()
 const navigate = useNavigate()

 const handleLogout = async () =>{
    
    try{
        await logout()
        navigate('/login')
    } catch (e) {
        alert(e.message)
    }
 }

  return (
    <div className='flex flex-col  lg:mx-24    bg-white'>
      <Header user={user} />
      <DashboardNav />
    </div>
  )
}

export default Dashboard