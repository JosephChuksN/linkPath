import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from "../firebase";

 const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

  return(
    <AuthContext.Provider value={{createUser}}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = ()=>{
  return useContext(AuthContext)
}