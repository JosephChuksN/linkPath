"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import DesktopView from "@components/Dashboard/DesktopView";
import Header from "@components/Dashboard/Header";
import DashboardNav from "@components/Dashboard/DashboardNav";
import { useAuth } from "@Context/AppContext";
import ProtectedRoute from "@route/ProtectedRoute";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { token } = useAuth();
  const { push, prefetch } = useRouter();

  //  if(!token){
  //   push('/login')
  //  }

  return (
    <ProtectedRoute>
      <main className="lg:flex lg:mx-6  bg-white">
        <div className="flex flex-col  h-full min-h-screen w-full border-x xl:w-3/4 relative">
          <Header />
          <DashboardNav />
          {children}
        </div>
        <DesktopView />
      </main>
    </ProtectedRoute>
  );
}
