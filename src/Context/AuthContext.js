import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,} from "firebase/auth"
import { setDoc,  doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";


 const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

  
  const [links, setLinks] = useState()
  const [loading, setLoading] = useState(false)
  const Uuser = localStorage.getItem('user')
  const user = Uuser ? JSON.parse(Uuser) : null
  const [error, setError] = useState('')
  
  
 
  









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
  const {data} =  await axios.post('/api/v1/auth/register', {name, email, password})
    
    const {user, token} = data
    addToLocalStorage({user, token})

   setLoading(false)
  } catch (error) {
    console.log(error.message)
    setLoading(false)
    setError(error.message)
  }
 

}


// const signUp = async (email, password, userName) => {
//       setError('')
//       setLoading(true)
//      await createUserWithEmailAndPassword(auth,  email,  password )
//     .then(async (userCred)=>{
//       var user = userCred.user 
//         const users = doc(db,  "userInfos", user.email )
//         await setDoc(users, 
//       {
//         username:userName,
//         photoUrl:user.photoURL,
//         siteData:[{}]
//        })
//        navigate('/dashboard')
      
//     }).catch((error)=>{
//       if(error.code == 'auth/email-already-in-use'){
//         setError("email already in use")
//       }
//     })

//     setLoading(false)
// }

//login fn
const login = async (email, password) =>{
  try {
    setError('')
    setLoading(true)
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(name, email, password)
  // };
  const {data} =  await axios.post('/api/v1/auth/LOGIN', { email, password})
    
    const {user, token} = data
    addToLocalStorage({user, token})

   setLoading(false)
  } catch (error) {
    console.log(error.message)
    setLoading(false)
    setError(error.message)
  }
 
   
    
}

const logout = () =>{
   removeUserFromLocalStorage()
} 

//checks if there's a signed in user or not
// useEffect(()=>{
//   const unSubcribe =  onAuthStateChanged(auth, async (currentUser)=>{
    
    

//     setUser(currentUser)

//   })
//   return unSubcribe
// }, [])



const value ={
  user,
  error,
  loading,
  registerUser,
  login,
  logout,
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