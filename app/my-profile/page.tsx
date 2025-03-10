"use client"

import React, { useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import { BiUser } from 'react-icons/bi'

export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [pageTitle, setPageTitle] = useState<string>('My Profile')

  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
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
          pageTitle={pageTitle}
        />
        <div className='mt-8 px-5'>
          {/* <h2 className="text-xl font-medium mb-6">{pageTitle}</h2> */}
          <div className='flex items-center gap-5 flex-col w-[50%] pt-6'>
            <img src='./images/user1.png' className='w-[100px] h-[100px]'/>
            <div>
              <p className='border-b border-[#2D8B57]'>Name</p>
              <div className='font-[500] flex gap-3 pt-1'>
                <p className='text-[16px]'>First Name</p>
                <p className='text-[16px]'>Last Name</p>
              </div>
              <div className='mt-3'>
                <p className='border-b border-[#2D8B57] font-[500]'>Email</p>
                <p className='pt-1'>frank@gmail.com</p>
              </div>
              <div className='mt-3'>
                <p className='font-[500] border-b border-[#2D8B57]'>Contact Phone</p>
                <p className='pt-1'>080-123-123-1234</p>
              </div>
              <div className='mt-3'>
                <p className='font-[500] border-b border-[#2D8B57]'>Bio</p>
                <p className='pt-1'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae deleniti laboriosam, consectetur totam est sed explicabo dicta voluptatibus porro facere?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}