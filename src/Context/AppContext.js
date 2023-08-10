import { createContext, useContext, useState } from 'react';
import {  useNavigate  } from 'react-router-dom';
import axios from 'axios';



 const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

  
  const [links, setLinks] = useState([])
  const currentUser = localStorage.getItem('user')
  const user = currentUser ? JSON.parse(currentUser) : null
  const token = localStorage.getItem('token')
  const description = localStorage.getItem('bio')
  const [loading, setLoading] = useState(false)
  const [regError, setRegError] = useState('')
  const [loginError, setLoginError] = useState('')
  const [updateError, setUpdateError] = useState('')
  const [emailVerified, setEmailVerified] = useState('')
  const [emailVerifiedLogin, setEmailVerifiedLogin] = useState('')
  const navigate = useNavigate()
  


  const authFetch = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}api/v1`,
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

const addToLocalStorage = ({user, token, bio})=>{
   
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
  localStorage.setItem('bio', bio)

}

const removeUserFromLocalStorage = ()=>{
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('bio')
}

//creating a user account 
const registerUser = async (name, email, password)=>{

  try {
    setRegError('')
    setLoading(true)
  const {data} =  await axios.post(`${process.env.REACT_APP_API_URL}api/v1/auth/register`, {name, email, password})
    const {user} = data
    console.log(data)
    const {msg} = data
    localStorage.setItem('user', JSON.stringify(user))
    setEmailVerified(msg)

   setLoading(false)
  } catch (error) {
    
    setLoading(false)
    setRegError(error.response.data.msg)
  }
 

}

//verify email 



//login fn
const login = async (email, password) =>{
  try {
    setLoginError('')
    setLoading(true)
  const {data} =  await axios.post(`${process.env.REACT_APP_API_URL}api/v1/auth/login`, { email, password})
    
    const {user, token, bio} = data
    const {msg} = data
    setEmailVerifiedLogin(msg)
    addToLocalStorage({user, token, bio})
    navigate('/dashboard')
    setEmailVerifiedLogin("")
   setLoading(false)
  } catch (error) {
    
    setLoading(false)
    if(error.response.data.msg === `A verification link was sent to ${email}`){
      return setEmailVerifiedLogin(error.response.data.msg)
    }    
    setLoginError(error.response.data.msg)
  }
 
   
    
}

//update user
const updateUser = async(name, email, desc, profileImg) =>{

  try {
    
    const {data} = await authFetch.patch('/auth/updateuser', {name, email, bio:desc, profileImg})
    
    const {user, token, bio} = data
    console.log(bio)
   addToLocalStorage({user, token, bio})
   setLoading(false)
  } catch (error) {
    setLoading(false)
    setUpdateError(error.response.data.msg)
  }
  
}

//logging out
const logout = () =>{
   removeUserFromLocalStorage()
} 


const getLinks = async ()=>{
   
    const {data }= await authFetch.get('/links')
    const {links} = data
    setLinks(links)
    
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
   console.log('patch')
   await  getLinks()
  } catch (error) {
    console.log(error)
  }
  

}

//stores image url on database
const editThumbmail = async (id, linkImg) => {

  try {
     await authFetch.patch(`/links/${id}`, {linkImg})
  } catch (error) {
    alert(error.response.data.msg)
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
  token,
  description,
  regError,
  loginError,
  loading,
  links,
  emailVerified,
  emailVerifiedLogin,
  updateError,
  registerUser,
  login,
  updateUser,
  logout,
  CreateSitelink,
  getLinks,
  editLinks,
  editThumbmail,
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