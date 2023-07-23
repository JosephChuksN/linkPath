import {Outlet, useNavigate } from 'react-router'
import { useAuth } from '../Context/AppContext'

const PrivateRoutes = () => {
    const {token} = useAuth()
    const navigate = useNavigate()
  
    return token? <Outlet /> : navigate("/signup")
    
  
}

export default PrivateRoutes