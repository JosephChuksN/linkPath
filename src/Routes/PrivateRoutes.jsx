import {Outlet, useNavigate } from 'react-router'
import { useAuth } from '../Context/AuthContext'

const PrivateRoutes = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
  
    return user? <Outlet /> : navigate("/signup")
    
  
}

export default PrivateRoutes