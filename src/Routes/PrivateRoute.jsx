import { useNavigate } from 'react-router'
import { useAuth } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {
    const {user} = useAuth()
    const navigate = useNavigate()
  
    return user? children : navigate("/signup")
    
  
}

export default PrivateRoute