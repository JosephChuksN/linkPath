import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,} from "firebase/auth"
import {  useNavigate,  } from 'react-router-dom'
import { setDoc,  doc } from "firebase/firestore";
import { auth, db } from "../firebase";

 const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

  const [user, setUser] = useState()
  const [links, setLinks] = useState()
  const [loading, setLoading] = useState(false)
  
  const [error, setError] = useState('')
  const navigate = useNavigate()
  
 
  






//creating a user account 
const signUp = async (email, password, userName) => {
      setError('')
      setLoading(true)
     await createUserWithEmailAndPassword(auth,  email,  password )
    .then(async (userCred)=>{
      var user = userCred.user 
        const users = doc(db,  "userInfos", user.email )
        await setDoc(users, 
      {
        username:userName,
        photoUrl:user.photoURL,
        siteData:[{}]
       })
       navigate('/dashboard')
      
    }).catch((error)=>{
      if(error.code == 'auth/email-already-in-use'){
        setError("email already in use")
      }
    })

    setLoading(false)
}

//login fn
const login = (email, password) =>{
  return signInWithEmailAndPassword(
    auth, 
    email, 
    password,
   
    )
}

const logout = () =>{
  return signOut(auth)
} 

//checks if there's a signed in user or not
useEffect(()=>{
  const unSubcribe =  onAuthStateChanged(auth, async (currentUser)=>{
    
    

    setUser(currentUser)

  })
  return unSubcribe
}, [])



const value ={
  user,
  error,
  loading,
  signUp,
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