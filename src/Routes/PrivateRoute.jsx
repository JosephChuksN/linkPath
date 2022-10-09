import {Outlet, useNavigate } from 'react-router'
import { useAuth } from '../Context/AuthContext'

const PrivateRoute = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
  
    return user? <Outlet /> : navigate("/signup")
    
  
}

export default PrivateRoute