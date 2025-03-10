"use client"

import React, { useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import BtnLoader from '../components/btnLoader/BtnLoader'

export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [pageTitle, setPageTitle] = useState<string>('Account Settings')

  const [loading, setLoading] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [msg, setMsg] = useState<string>('')
  const [alertType, setAlertType] = useState<string>('')
  const [selectedTab, setSelectedTab] = useState<string>('Change Password')
  const [password, setPassword] = useState<string>('')

  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
  }

  const settings = ['Change Password', 'Update Bio', 'Update Contact Details', 'Deactivate Account']

  return (
    <div>
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
            <h2 className="text-xl font-medium mb-6">{pageTitle}</h2>
            <div className='flex flex-wrap items-center gap-5 border-b border-gray-200'>
              {
                settings.map((item, index) => (
                  <div onClick={() => setSelectedTab(item)} key={index} className={`cursor-pointer hover:border-b hover:border-gray-600 ${selectedTab === item ? 'border-b border-gray-600' : ''}`}>
                    {item}
                  </div>
                ))
              }
            </div>
            {
              selectedTab === 'Change Password' &&
              <div className='lg:w-[60%]'>
                <div className='mt-8'>
                    <p>Current Password</p>
                    <div className='border border-[#C2C5E1] h-[42px] rounded-[6px] mt-1 pr-2 flex items-center justify-between'>
                        <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='********' className='pl-2 w-full outline-none' />
                        {
                            showPassword?
                            <BsEyeSlash className='cursor-pointer' onClick={() => setShowPassword(false)}/>
                            :
                            <BsEye className='cursor-pointer' onClick={() => setShowPassword(true)}/>
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <p>New Password</p>
                    <div className='border border-[#C2C5E1] h-[42px] rounded-[6px] mt-1 pr-2 flex items-center justify-between'>
                        <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='********' className='pl-2 w-full outline-none' />
                        {
                            showPassword?
                            <BsEyeSlash className='cursor-pointer' onClick={() => setShowPassword(false)}/>
                            :
                            <BsEye className='cursor-pointer' onClick={() => setShowPassword(true)}/>
                        }
                    </div>
                </div>
                <div className='mt-5'>
                    <p>Confirm Password</p>
                    <div className='border border-[#C2C5E1] h-[42px] rounded-[6px] mt-1 pr-2 flex items-center justify-between'>
                        <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='********' className='pl-2 w-full outline-none' />
                        {
                            showPassword?
                            <BsEyeSlash className='cursor-pointer' onClick={() => setShowPassword(false)}/>
                            :
                            <BsEye className='cursor-pointer' onClick={() => setShowPassword(true)}/>
                        }
                    </div>
                </div>
                {
                  loading ?
                    <div className='mt-[40.4px] mb-[0.5rem]'>
                        <BtnLoader />
                    </div>
                    :
                    <button className='w-full bg-[#2E8B57] text-white py-[0.4rem] mt-6 rounded-[6px]'>Save Changes</button>
                }
              </div>
            }

            {
              selectedTab === 'Update Bio' &&
                <div className='lg:w-[60%]'>
                  <div className='mt-8'>
                      <p>First Name</p>
                      <input type="text" placeholder='John' className='outline-none block border border-[#C2C5E1] h-[42px] rounded-[6px] w-full pl-2' />
                  </div>
                  <div className='mt-5'>
                      <p>Last Name</p>
                      <input type="text" placeholder='Doe' className='outline-none block border border-[#C2C5E1] h-[42px] rounded-[6px] w-full pl-2' />
                  </div>
                  <div className='mt-5'>
                      <p>Bio</p>
                      <textarea placeholder='Write a brief description about yourself.' className='outline-none block border border-[#C2C5E1] h-[120px] resize-none rounded-[6px] w-full pl-2'></textarea>
                  </div>
                  {
                    loading ?
                      <div className='mt-[40.4px] mb-[0.5rem]'>
                          <BtnLoader />
                      </div>
                      :
                      <button className='w-full bg-[#2E8B57] text-white py-[0.4rem] mt-6 rounded-[6px]'>Save Changes</button>
                  }
                </div>
            }

            {
              selectedTab === 'Update Contact Details' &&
                <div className='lg:w-[60%]'>
                  <div className='mt-8'>
                      <p>Phone Number</p>
                      <input type="text" placeholder='080-123-456-789' className='outline-none block border border-[#C2C5E1] h-[42px] rounded-[6px] w-full pl-2' />
                  </div>
                  {
                    loading ?
                      <div className='mt-[40.4px] mb-[0.5rem]'>
                          <BtnLoader />
                      </div>
                      :
                      <button className='w-full bg-[#2E8B57] text-white py-[0.4rem] mt-6 rounded-[6px]'>Save Changes</button>
                  }
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}