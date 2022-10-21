import { createContext, useContext, useState } from 'react';
import {  useNavigate  } from 'react-router-dom';
import axios from 'axios';


 const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

  
  const [links, setLinks] = useState([])
  const Uuser = localStorage.getItem('user')
  const user = Uuser ? JSON.parse(Uuser) : null
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(false)
  const [regError, setRegError] = useState('')
  const [loginError, setLoginError] = useState('')
  const navigate = useNavigate()
  
  const authFetch = axios.create({
    baseURL: 'https://linkpath-api.onrender.com/api/v1',
  })
  // request

  authFetch.interceptors.request.use(
   (config) => {
     if(token){config.headers['Authorization'] = `Bearer ${token}`}
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => { return response },
     
    (error) => {
    
      if (error.code === 401) {
        logout()
      }
      return Promise.reject(error)
    }
  )

const addToLocalStorage = ({user, token})=>{
   
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)

}

const removeUserFromLocalStorage = ()=>{
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

//creating a user account 
const registerUser = async (name, email, password)=>{

  try {
    setRegError('')
    setLoading(true)
  const {data} =  await axios.post('https://linkpath-api.onrender.com/api/v1/auth/register', {name, email, password})
    const {user, token} = data
    addToLocalStorage({user, token})

   setLoading(false)
  } catch (error) {
    console.log(error)
    console.log(error.response.data.msg)
    setLoading(false)
    setRegError(error.response.data.msg)
  }
 

}


//login fn
const login = async (email, password) =>{
  try {
    setLoginError('')
    setLoading(true)
  const {data} =  await axios.post('https://linkpath-api.onrender.com/api/v1/auth/login', { email, password})
    
    const {user, token} = data
    addToLocalStorage({user, token})
    navigate('/dashboard')
   setLoading(false)
  } catch (error) {
    console.log(error.message)
    setLoading(false)
    setLoginError(error.message)
  }
 
   
    
}
//logging out
const logout = () =>{
   removeUserFromLocalStorage()
} 


const getLinks = async ()=>{
   
    const {data }= await authFetch.get('/links')
    setLinks(data.links)
    
  }

const CreateSitelink = async (siteLink, siteName) =>{

  try {
    
     await  authFetch.post('/links', {siteLink, siteName})
     getLinks()
    
  } catch (error) {
    console.log(error)
  }

}

const editLinks = async (id, siteLink, siteName)=>{
   
  try {
   await authFetch.patch(`/links/${id}`, {siteLink, siteName})
   await  getLinks()
  } catch (error) {
    console.log(error)
  }
  

}


const deleteLink = async (id)=>{
    setLoading(true)
    await authFetch.delete(`/links/${id}`)
    await  getLinks()
    setLoading(false)
  
}





const value ={
  user,
  regError,
  loginError,
  loading,
  links,
  registerUser,
  login,
  logout,
  CreateSitelink,
  getLinks,
  editLinks,
  deleteLink,
  setRegError,
  setLoginError,
  setLoading
 
  
}

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = ()=>{
  return useContext(AuthContext)
}