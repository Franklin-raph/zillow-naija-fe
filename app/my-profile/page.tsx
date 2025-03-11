"use client"

import React, { useState, useEffect } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import { get } from '../utils/axiosHelpers'

interface UserData {
  id: string;
  full_name?: string;
  email?: string;
  phone?: string;
  bio?: string;
  // Add other user properties as needed
}

export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [user, setUser] = useState<UserData | null>(null)

  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
  }

  useEffect(() => {
    getUserProfile()
  }, [])

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
      setUser(response?.data)
    } catch (error) {
      console.error('Error fetching user profile:', error)
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
          pageTitle={'My Profile'}
        />
        <div className='mt-8 px-5'>
          {/* <h2 className="text-xl font-medium mb-6">{'My Profile'}</h2> */}
          <div className='flex gap-5 flex-col md:w-[50%] mr-auto ml-[2rem] pt-6'>
            <img src='./images/user1.png' alt="User profile" className='w-[100px] h-[100px]'/>
            <div>
              <p className='font-[500] border-b border-[#2D8B57]'>Full Name</p>
              <div className='flex gap-3 pt-1'>
                <p className='text-[16px]'>{user?.full_name || 'Null'}</p>
              </div>
              <div className='mt-3'>
                <p className='border-b border-[#2D8B57] font-[500]'>Email</p>
                <p className='pt-1'>{user?.email || 'Null'}</p>
              </div>
              <div className='mt-3'>
                <p className='font-[500] border-b border-[#2D8B57]'>Contact Phone</p>
                <p className='pt-1'>{user?.phone || 'Null'}</p>
              </div>
              <div className='mt-3'>
                <p className='font-[500] border-b border-[#2D8B57]'>Bio</p>
                <p className='pt-1'>
                  {user?.bio || 'Null'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}