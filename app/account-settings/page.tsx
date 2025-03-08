"use client"

import React, { useState } from 'react'
import SideNav from '../components/side-nav/SideNav'

export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)

  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
  }

  return (
    <div>
      <div>
        <SideNav toggle={{
          toggleNav: toggleNav, 
          setToggleNav: handleToggleNav
        }}/>
        <div className={`w-full lg:w-[78%] ml-auto pb-5 ${toggleNav ? 'lg:ml-[22%]' : 'lg:ml-0'}`}>
          {/* Optional: Add a hamburger menu button for mobile */}
          <button 
            onClick={() => handleToggleNav(true)} 
            className="lg:hidden block absolute top-4 left-4"
          >
            ☰ Menu
          </button>
          
          <div className="">
            {/* Your page content */}
          </div>
        </div>
      </div>
    </div>
  )
}