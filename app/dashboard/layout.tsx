import { ReactNode } from 'react'
import DesktopView from '@components/Dashboard/DesktopView';
import Header from '@components/Dashboard/Header';
import DashboardNav from '@components/Dashboard/DashboardNav';

export default function DashboardLayout({
    children,
} : {children: ReactNode}
){
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