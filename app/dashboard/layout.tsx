"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import DesktopView from "@components/Dashboard/DesktopView";
import Header from "@components/Dashboard/Header";
import DashboardNav from "@components/Dashboard/DashboardNav";
import { useAuth } from "@Context/AppContext";


export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { token } = useAuth();
  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    if (!token && pathname !== "/login") {
      router.push("/login");
    }
  }, [token, pathname]);

  return (
    <main className="lg:flex lg:mx-6  bg-white">
      <div className="flex flex-col  h-full min-h-screen w-full border-x xl:w-3/4 relative">
        <Header />
        <DashboardNav />
        {children}
      </div>
      <DesktopView />
    </main>
  );
}
