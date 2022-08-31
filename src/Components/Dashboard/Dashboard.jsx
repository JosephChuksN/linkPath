import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router'

const Dashboard = () => {
 const {user, logout} = useAuth()
 const navigate = useNavigate()

 const handleLogout = async () =>{
    
    try{
        await logout()
        navigate('/')
    } catch (e) {
        alert(e.message)
    }
 }

  return (
    <div className='flex items-center justify-center mx-auto gap-3'><span>{user.email}</span> <span className='text-blue-300' onClick={handleLogout}>logout</span></div>
  )
}

export default Dashboard