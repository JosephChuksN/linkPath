import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { collection, doc,setDoc  } from "firebase/firestore"
import { auth, db } from "../firebase";

 const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

  const [user, setUser] = useState()

//creating a user account 
const signUp = (email, password) => {
  return createUserWithEmailAndPassword(
    auth, 
    email, 
    password
    )
}

//login fn
const login = (email, password) =>{
  return signInWithEmailAndPassword(
    auth, 
    email, 
    password
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
  signUp,
  login,
  logout
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