"use client"

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie'
// import DashboardNav from '../components/dashboard-nav/dashboardNav';
// import Sidebar from '../components/side-bar/Sidebar';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {

    const router = useRouter();
    const token = Cookies.get('token')

    useEffect(() => {
        // Check if user is authenticated
        if (!token) {
            router.push('/login');
        } else {
            // Redirect to dashboard if authenticated
            router.push('/dashboard');
        }
    },[])

  return (
    <div>
        {/* <DashboardNav />
        <Sidebar /> */}
        <main className="bg-[#F2F3F4] w-[80%] pl-2 pr-4 ml-auto pt-[6rem]">
            {children}
        </main>
    </div>
  );
}