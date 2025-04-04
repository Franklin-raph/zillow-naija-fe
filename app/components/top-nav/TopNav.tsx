
"use client"

import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

interface Toggle {
    toggleNav: boolean;
    setToggleNav: (toggle: boolean) => void;
  }
  
  interface TopNavProps {
    toggle: Toggle;
    pageTitle: string;  // Added pageTitle to props interface
  }
  
  const TopNav = ({ toggle, pageTitle }: TopNavProps) => {
    // const [logoutModal, setLogoutModal] = useState<boolean>(false);
  
    return (
      <div className='border flex items-center justify-between w-[100%] py-[1.2rem] top-0 right-0 z-[99] px-5'>
        <div className='flex items-start flex-col gap-1'>
          {/* Display the pageTitle */}
          <h1 className='text-xl font-semibold'>{pageTitle}</h1>
          <p>Welcome Back</p>
          {/* Other items in this div... */}
        </div>
        <div className='flex items-center gap-10'>
          {/* Search and logout elements... */}
          <div onClick={() => {
            // setLogoutModal(true)
          }} className='items-center gap-3 bg-[#2DB857] text-white py-[9px] px-[16px] rounded-[4px] cursor-pointer hidden lg:flex'>
            <IoIosLogOut fontSize={"20px"}/>
            <p>Logout</p>
          </div>
          <IoMenuOutline
            className='text-white text-[30px] cursor-pointer block lg:hidden' 
            onClick={() => toggle.setToggleNav(!toggle.toggleNav)} // Toggle nav when menu icon is clicked
          />
        </div>
        {/* Logout modal... */}
      </div>
    );
  };
  
  export default TopNav;