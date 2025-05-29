"use client"

import React, { useEffect, useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import { LuHouse } from 'react-icons/lu';
import { BsHouseCheck } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import { get } from '../utils/axiosHelpers';

interface UserData {
  id: string;
  full_name?: string;
  email?: string;
  phone?: string;
  bio?: string;
  address?: string;
  sex?: string;
  // Add other user properties as needed
}

interface RecentActivity {
  id: string;
  activity_type: string;
  description: string;
  created_at: string;
}

type SummaryProps = {
  total_listings: number;
  total_active_listings: number;
  total_leased_listings: number;
  total_sold_listings: number;
}




export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const percentageSold = 75; // Example percentage for sold properties

  const [bioData, setBioData] = useState({
      bio: '',
      full_name:'',
      address:'',
      sex: ''
  })

  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([])
  const [summaryData, setSummaryData] = useState<SummaryProps | null>(null)
  const [percentage, setPercentage] = useState<number>(0)
  
  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
  }

  useEffect(() => {
    getSummary()
    getUserProfile()
    getRecentActivities()
  }, [])

  const getSummary = async () => {
    try {
      const res = await get('/agent-dashboard/my-summary/')
      setSummaryData(res.data)
      setPercentage(
        res.data?.total_sold_listings && res.data?.total_listings
          ? parseFloat(
              ((res.data.total_sold_listings / res.data.total_listings) * 100).toFixed(2)
            )
          : 0
      );      
      console.log(res.data?.total_sold_listings / res.data?.total_listings * 100);
    } catch (error) {
      console.log('Error fetching summary:', error);
    }
  }

  async function getUserProfile() {
    try {
      const storedUser = localStorage.getItem('user')
      
      if (!storedUser) {
        console.error('No user found in localStorage')
        return
      }
      
      // Parse the stored user JSON string to an object
      const currentUser: UserData = JSON.parse(storedUser)
      
      if (!currentUser.id) {
        console.error('User ID not found')
        return
      }
      
      const response = await get(`/profile/user/${currentUser.id}`)
      console.log(response);
      
      if (!response.success) {
        throw new Error('Failed to fetch user profile')
      }
      
      setBioData({
        bio: response?.data?.bio || '',
        full_name: response?.data?.full_name || '',
        address: response?.data?.address || '',
        sex: response?.data?.sex || ''
      })
      
    } catch (error) {
      console.error('Error fetching user profile:', error)
    }
  }

  const getRecentActivities = async () => {
    try {
      const storedUser = localStorage.getItem('user')
      
      if (!storedUser) {
        console.error('No user found in localStorage')
        return
      }
      
      // Parse the stored user JSON string to an object
      const currentUser: UserData = JSON.parse(storedUser)
      
      if (!currentUser.id) {
        console.error('User ID not found')
        return
      }

      const response = await get(`/recent-activities`)
      if (response.success) {
        setRecentActivities(response.data)
      } else {
        console.error('Failed to fetch recent activities:', response.message)
      }
      console.log(response);
      
    } catch (error) {
      console.error('Error fetching recent activities:', error)
    }
  }

  return (
    <div>
      <SideNav toggle={{
        toggleNav: toggleNav, 
        setToggleNav: handleToggleNav
      }}/>
      <div className={`w-full lg:w-[78%] ml-auto pb-5 ${toggleNav ? 'lg:ml-[22%]' : 'lg:ml-auto'}`}>
        <TopNav 
          toggle={{
            toggleNav: toggleNav,
            setToggleNav: handleToggleNav
          }}
          pageTitle={`Hi, ${bioData?.full_name || 'Guest'}`}
        />
        <div className='mt-8'>
          <section className="w-[95%] mx-auto md:px-[1rem] px-[0px] pb-[40px]">
            <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">Dashboard</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 border-b pb-5'>
              <div className='bg-[#F9F9F9] p-5 rounded-[10px] border border-[#2E8B57]'>
                <LuHouse className='text-[30px] text-[#2E8B57]'/>
                <p className='text-[18px] text-[#212121] mb-2 mt-1'>Total Listed Properties</p>
                <p className='text-[18px] text-[#212121] font-[500]'>{summaryData?.total_listings}</p>
              </div>
              <div className='bg-[#F9F9F9] p-5 rounded-[10px] border border-[#2E8B57]'>
                <BsHouseCheck className='text-[30px] text-[#2E8B57]'/>
                <p className='text-[18px] text-[#212121] mb-2 mt-1'>Active Listings</p>
                <p className='text-[18px] text-[#212121] font-[500]'>{summaryData?.total_active_listings}</p>
              </div>
              <div className='bg-[#F9F9F9] p-5 rounded-[10px] border border-[#2E8B57]'>
                <GiMoneyStack className='text-[30px] text-[#2E8B57]'/>
                <p className='text-[18px] text-[#212121] mb-2 mt-1'>Total Properties Sold</p>
                <p className='text-[18px] text-[#212121] font-[500]'>{summaryData?.total_sold_listings}</p>
              </div>
              <div className='bg-[#F9F9F9] p-5 rounded-[10px] border border-[#2E8B57]'>
                <GiMoneyStack className='text-[30px] text-[#2E8B57]'/>
                <p className='text-[18px] text-[#212121] mb-2 mt-1'>Total Leased Properties</p>
                <p className='text-[18px] text-[#212121] font-[500]'>{summaryData?.total_leased_listings}</p>
              </div>
            </div>
          </section>
        </div>
        <section className="w-[95%] mx-auto md:px-[1rem] px-[0px] pb-[80px] gap-5 flex flex-col md:flex-row items-start">
          <div className='w-[100%] lg:w-[60%] border rounded-[16px] p-4'>
            <p className=' font-[700] text-[20px]'>Recent Activities</p>
            <div className='mt-[0.5rem]'>
              {
                recentActivities.length > 0 ? (
                  recentActivities.map((activity, index) => (
                    <div key={index} className='flex items-center justify-between text-[#4B4B4E] border-b pt-5 pb-2'>
                      <p className='capitalize'>{activity.activity_type}: {activity.description}</p>
                      <p>{new Date(activity.created_at).toDateString()}</p>
                    </div>
                  )).slice(0, 5) // Display only the last 5 activities
                ) : (
                  <p className='text-gray-500'>No recent activities found.</p>
                )
              }
                {/* // [1,2,3,4]?.map((item, index) => (
                //   <div key={index} className='flex items-center justify-between text-[#4B4B4E] border-b pt-5 pb-2'>
                //       <p>{item}. Logged in</p>
                //       <p>{new Date().toDateString()}</p>
                //   </div>
                // )) */}
            </div>
          </div>
          <div className='w-[100%] lg:w-[40%] flex flex-col gap-5'>
            <div className='w-full border rounded-[16px] p-4'>
              <div className="bg-white rounded-lg max-w-sm mx-auto">
                <h2 className="font-bold text-gray-800 mb-6 text-[18px] text-center">Property Sales Progress</h2>
                
                <div className="relative w-48 h-48 mx-auto mb-8">
                  {/* Yellow bottom semi-circle (remaining properties) */}
                  <div className="w-full h-full rounded-full bg-yellow-300"></div>
                  
                  {/* Green top semi-circle (sold properties) - covers the yellow circle based on percentage */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full rounded-full bg-green-600" 
                    style={{ 
                      clipPath: `polygon(50% 50%, 0 0, ${percentage <= 50 ? percentage * 2 : 100}% 0, ${
                        percentage <= 50 ? '50% 50%' : `100% ${(percentage - 50) * 2}%, 50% 50%`
                      })` 
                    }}>

                  </div>
                  
                  {/* White inner circle to create donut effect */}
                  <div className="absolute top-[23px] left-[23px] w-[75%] h-[75%] mx-auto rounded-full bg-white flex items-center justify-center">
                    <span className="text-3xl font-bold">{percentage}%</span>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-300 mr-2"></div>
                    <span className="text-[12px]">Total property Listed</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-600 mr-2"></div>
                    <span className="text-[12px]">Total property Sold</span>
                  </div>
                </div>
              </div>

            </div>
            <div className='w-[100%] border rounded-[16px] p-4'>
              <h2 className="font-bold text-gray-800 mb-4 text-[18px]">Subscription Plan</h2>
              <div className='flex items-center justify-between text-[#4B4B4E] border-b pt-5 pb-2'>
                <p>Current Subscription Plan</p>
                <p>Monthly Plan</p>
              </div>
              <div className='flex items-center justify-between text-[#4B4B4E] border-b pt-5 pb-2'>
                <p>Expires 20th May, 2025</p>
                <p className='bg-[#2E8B57] py-2 px-5 rounded-[10px] text-white'>Valid</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}