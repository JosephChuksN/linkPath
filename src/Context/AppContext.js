import { createContext, useContext, useState } from "react";
import {  useNavigate  } from 'react-router-dom';
import axios from "axios";


 const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

  
  const [links, setLinks] = useState([])
  const Uuser = localStorage.getItem('user')
  const user = Uuser ? JSON.parse(Uuser) : null
  const token = localStorage.getItem('token')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  
  const authFetch = axios.create({
    baseURL: 'https://infinite-earth-50565.herokuapp.com/api/v1',
  })
  // request

  authFetch.interceptors.request.use(
   (config) => {
     if(token){
      config.headers['Authorization'] = `Bearer ${token}`
     }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      // console.log(error.response)
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
    setError('')
    setLoading(true)
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(name, email, password)
  // };
  const {data} =  await axios.post('http://localhost:5000/api/v1/auth/register', {name, email, password}, {headers:{Origin: 'https://linkpath-josephn.vercel.app'}})
    
    const {user, token} = data
    addToLocalStorage({user, token})

   setLoading(false)
  } catch (error) {
    console.log(error.message)
    setLoading(false)
    setError(error.message)
  }
 

}


//login fn
const login = async (email, password) =>{
  try {
    setError('')
    setLoading(true)
  const {data} =  await axios.post('https://infinite-earth-50565.herokuapp.com/api/v1/auth/login', { email, password}, {headers:{origin: 'https://linkpath-josephn.vercel.app'}})
    
    const {user, token} = data
    addToLocalStorage({user, token})
    navigate('/dashboard')
   setLoading(false)
  } catch (error) {
    console.log(error.message)
    setLoading(false)
    setError(error.message)
  }
 
   
    
}
//logging out
const logout = () =>{
   removeUserFromLocalStorage()
} 


const getLinks = async ()=>{
   
  try {
  const {data }= await authFetch.get('/links')
  
    setLinks(data.links)
    
      
      
  } catch (error) {
    console.log(error)
  }
  
  }

const CreateSitelink = async (siteLink, siteName) =>{

  try {
    // let header = new Headers({ 'Authorization': 'Bearer ' + token }) 
    
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
  try {
    setLoading(true)
    await authFetch.delete(`/links/${id}`)
    await  getLinks()
    setLoading(false)
   } catch (error) {
     console.log(error)
   }
}





const value ={
  user,
  error,
  loading,
  links,
  registerUser,
  login,
  logout,
  CreateSitelink,
  getLinks,
  editLinks,
  deleteLink,
  setError,
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