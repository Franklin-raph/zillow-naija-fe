"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { IoCloseOutline } from 'react-icons/io5'
import { MdMail } from 'react-icons/md'

export default function Navbar() {

    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    const navLinks = [
        {
            label: "Buy",
            link: "/",
        },
        {
            label: "Rent",
            link: "/",
        },
        {
            label: "Sell",
            link: "/sell",
        },
        {
            label: "Short Let",
            link: "/",
        },
        {
            label: "Find an Agent",
            link: "/find-an-agent",
        },
    ]

  return (
    <div className='flex items-center justify-between max-w-[1600px] mx-auto md:px-[4rem] px-[1rem] md:py-8 py-6 border-b'>
        <div className='flex items-center gap-8 justify-between sm:justify-normal w-full sm:w-[80%]'>
            <Link className='text-[#22AC00] font-[700] mr-6' href="/">Zillow9ja</Link>
            <ul className='hidden sm:flex items-center gap-8'>
                {
                    navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.link}>{link.label}</Link>
                        </li>
                    ))
                }
            </ul>
                    {/* Mobile Nav */}
            {
                mobileNavOpen &&
                <div className='block sm:hidden fixed left-0 top-0 h-[100%] bg-black z-[999] text-white w-[45%]'>
                    <div className='fixed top-0 left-0 w-[100%] h-full bg-[#000000ab] z-[1]' onClick={() => setMobileNavOpen(false)}></div>
                    <div onClick={() => setMobileNavOpen(false)} className='text-white text-right fixed right-[16px] top-[24px] z-[2] border text-[20px] p-1 cursor-pointer'>
                        <IoCloseOutline className='cursor-pointer'/>
                    </div>
                    <ul className='fixed flex flex-col items-start pt-[6rem] w-[70%] h-full bg-black z-[999]'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index} className='w-full'>
                                    <Link href={link.link} className='pl-[1rem] hover:bg-[#22AC00] transition-all w-full block py-4'>{link.label}</Link>
                                </li>
                            ))
                        }
                    <Link className='hover:bg-[#22AC00] transition-all ml-[1rem] mt-3 border py-[10px] px-7 text-white' href="/login">Sign In</Link>
                    </ul>
                </div>
            }
            <div onClick={() => setMobileNavOpen(true)} className='text-gray-400 text-right border border-gray-400 text-[20px] block cursor-pointer sm:hidden bg-white p-1'>
                <BiMenu />
            </div>
        </div>
        <div className='hidden sm:flex items-center gap-5'>
            <MdMail />
            <Link href="">Advertise</Link>
            <Link className='bg-[#2E8B57] rounded-[4px] px-[10px] py-[2px] text-white' href="/login">Sign In</Link>
        </div>
    </div>
  )
}
