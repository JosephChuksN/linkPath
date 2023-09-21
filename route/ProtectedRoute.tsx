'use client'

import { useAuth } from "@Context/AppContext"
import { useRouter, usePathname, redirect } from "next/navigation"
import { ReactNode, FC } from "react";

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname()
  const { token } = useAuth()
  
  const isAuthenticated = token
  console.log(pathname)
  
  if (!isAuthenticated) {
    router.push("/login"); // Redirect to your login page
    return null; // Prevent rendering protected content
  }

 
  return <>{children}</>
  
};

export default ProtectedRoute;