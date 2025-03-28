"use client"

import React, { useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import { IoCloudUploadOutline } from 'react-icons/io5';
import { BsEye } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';


export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)

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
          pageTitle={'My Documents'}
        />
        <div className='mt-8'>
          <section className="w-[95%] mx-auto md:px-[1rem] px-[0px] pb-[80px]">
            {/* <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">My Documents</p> */}
            <div className='relative'>
                <div className='border-dashed border-[#98A2B3] border-2 rounded-[4px] p-[4rem] flex flex-col items-center justify-center mt-5'>
                    <IoCloudUploadOutline className='text-[#98A2B3] text-[50px]' />
                    <p className='text-text-color font-[600] mt-5'>Click to upload <span className='font-[400] text-[#475367] hidden'>or drag and drop</span> </p>
                    <p className='text-[#98A2B3] text-center'>Pdf, png, jpeg, jpg. (max. 16mb)</p>
                <input
                    type="file"
                    className="z-[1] cursor-pointer absolute opacity-0 h-full outline-none w-full rounded-[4px] bg-transparent text-[14px]"
                    // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    // if (e.target.files && e.target.files.length > 0) {
                    //     handleImagePreviewAndCroping(e.target.files[0]);
                    // }
                    // }}
                />
                </div>
            </div>
            <div>
                <p className='mt-5 text-[20px] font-bold'>Uploaded Documents</p>
                <div className='flex items-center justify-between mt-5 border-b pb-3 font-[500]'>
                    <p>Name</p>
                    <p>Date Uploaded</p>
                    <p>Action</p>
                </div>
                {
                    [1,1,1,1,1].map((item, index) => (
                        <div key={index} className='flex items-center justify-between gap-2 mt-3 border-b pb-3'>
                            <p className='text-[#475367]'>Document 1</p>
                            <p className='text-[#98A2B3]'>2022-12-31</p>
                            <div className='flex gap-2 text-[18px]'>
                                <BsEye className='cursor-pointer'/>
                                <BiTrash className='cursor-pointer text-red-600'/>
                            </div>
                        </div>
                    ))
                }
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}