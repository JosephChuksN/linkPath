"use client"

import {ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { appContextType, User, Links } from '@types';
import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

type Props = {
  children: ReactNode;
};

const appContextDefaultValues: appContextType = {
  links: [],
  user: null,
  token: null,
  description: null,
  loading: false,
  regError: "",
  loginError: "",
  updateError: "",
  emailVerified: "",
  emailVerifiedLogin: "",
  registerUser: async () => {},
  login: async () => {},
  updateUser: async () => {},
  updateUserPhoto: async () => {},
  changePass: async () => {},
  logout: () => {},
  getLinks: async () => {},
  createSitelink: async () => {},
  editLinks: async () => {},
  editThumbmail: async () => {},
  deleteLink: async () => {},
  setRegError: ()=>{},
  setLoginError: ()=>{},
  setLoading: ()=>{}
};


 const AuthContext= createContext<appContextType>(appContextDefaultValues)

export const AuthProvider = ({children}:Props) =>{

  
  const [links, setLinks] = useState<Links[] | null>(null)
  const currentUser: null | string = window?.localStorage?.getItem("user");
  const user: User | null = currentUser ? JSON.parse(currentUser) : null;
  const token: null | string = window?.localStorage?.getItem("token");
  const descriptionnull: null | string = window?.localStorage?.getItem("bio");
  const [loading, setLoading] = useState<boolean>(false)
  const [regError, setRegError] = useState<string>('')
  const [loginError, setLoginError] = useState<string>('')
  const [updateError, setUpdateError] = useState<string>('')
  const [emailVerified, setEmailVerified] = useState<string>("");
  const [emailVerifiedLogin, setEmailVerifiedLogin] = useState<string>("");
  const { push }= useRouter();
  
// useEffect(()=>{
//   if(typeof window !== undefined){
//      setCurrentUser(localStorage?.getItem("user"));
//      setToken(localStorage?.getItem("token"));
//      setDescription(localStorage?.getItem("bio"));
//   }
// },[currentUser, token])

  const authFetch = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  });

  // request
  authFetch.interceptors.request.use(
   (config) => {
     if(token){config.headers!['Authorization'] = `Bearer ${token}`}
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
 if(typeof window !== undefined){
    
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
  localStorage.setItem("bio", bio);
 }

}

const removeUserFromLocalStorage = ()=>{
  localStorage.removeItem('user')
  localStorage.removeItem("token");
  localStorage.removeItem("bio");
}

//creating a user account 
const registerUser = async (name:string, email:string, password:string)=>{

  try {
    setRegError('')
    setLoading(true)
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}auth/register`,
    { name, email, password }
  );
    const {user} = data
    console.log(data)
    const {msg} = data
    localStorage.setItem('user', JSON.stringify(user))
    setEmailVerified(msg)

   setLoading(false)
  } catch (error) {
    setRegError(error.response.data.msg)
  } finally {
     setLoading(false);
  }
 

}

//verify email 



//login fn
const login = async (email:string, password:string) =>{
  try {
    setLoginError('')
    setLoading(true)
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}auth/login`,
    { email, password }
  );
    
    const {user, token, bio} = data
    const {msg} = data
    setEmailVerifiedLogin(msg)
    addToLocalStorage({user, token, bio})
    push('/dashboard')
    setEmailVerifiedLogin("")
   setLoading(false)
  } catch (error) {
    if(error.response.data.msg === `A verification link was sent to ${email}`){
      return setEmailVerifiedLogin(error.response.data.msg)
    }    
    setLoginError(error.response.data.msg)
    console.log(loginError)
  } finally{
    setLoading(false);
    setEmailVerifiedLogin("");
  }
}

//update user
const updateUser = async (displayName: string, desc: string) => {
  try {
    const { data } = await authFetch.patch("auth/updateuser", {
      displayName,
      bio: desc,
    });

    const { user, token, bio } = data;
    console.log(bio);
    addToLocalStorage({ user, token, bio });
    setLoading(false);
  } catch (error) {
    setUpdateError(error.response.data.msg);
  } finally {
     setLoading(false);
  }
};

const updateUserPhoto = async (profileImg: string) => {
  try {
    const { data } = await authFetch.patch('auth/addphoto', { profileImg });

    const { user, token, bio } = data;

    addToLocalStorage({ user, token, bio });
    setLoading(false);
  } catch (error) {
    setUpdateError(error.response.data.msg);
  } finally {
     setLoading(false);
  }
};

const changePass = async (currentPassword:string, newPassword:string) =>{

  try {
    await authFetch.patch('auth/changepassword', {currentPassword, newPassword})
   } catch (error) {
    console.log(error.response.data.msg)
   }
}

//logging out
const logout = () =>{
   removeUserFromLocalStorage()
} 

const getLinks = async () => {
  const { data } = await authFetch.get('links');
  const { links } = data;
  setLinks(links);
};

const createSitelink = async (siteLink:string, siteName:string) =>{

  try {
     await  authFetch.post('links', {siteLink, siteName})
     .then(()=>getLinks())
  } catch (error) {
    console.log(error)
  }

}

const editLinks = async (id:string, siteLink:string, siteName:string)=>{
   
  try {
   await authFetch.patch(`links/${id}`, {siteLink, siteName})
   await  getLinks()
  } catch (error) {
    console.log(error)
  }
  

}

//stores image url on database
const editThumbmail = async (id: string, linkImg: string) => {
  try {
    await authFetch.patch(`links/${id}`, { linkImg });
  } catch (error) {
    alert(error.response.data.msg);
  }
};

const deleteLink = async (id: string) => {
  setLoading(true);
  await authFetch.delete(`links/${id}`);
  await getLinks();
  setLoading(false);
};

const value: appContextType = {
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
  updateUserPhoto,
  changePass,
  logout,
  createSitelink,
  getLinks,
  editLinks,
  editThumbmail,
  deleteLink,
  setRegError,
  setLoginError,
  setLoading,
};

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = ()=>{
  return useContext(AuthContext)
}