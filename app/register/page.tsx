"usee client"

import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/nav-bar/Navbar'
import { FcGoogle } from 'react-icons/fc'

export default function page() {
  return (
    <div>
        <Navbar />
        <div className='bg-[#F5F6F7]'>
            <div className='py-[4rem] max-w-[1600px] mx-auto px-[4rem]'>
                <h1 className='text-[#101750] text-[32px] font-bold'>My Account</h1>
                <p>Home / <span className='text-[#2E8B57]'>Register</span></p>
            </div>
        </div>
        <div className='w-[544px] mx-auto mt-[4rem] p-[4rem] shadow-xl text-[#9096B2] mb-[9rem]'>
            <h1 className='font-[600] text-[#101750] text-[24px]'>Create account</h1>
            <p className='mb-7'>Welcome to Zillow9ja. Let's create your account</p>
            <div>
                <p>Email</p>
                <input type="text" placeholder='jhondoe@gmail.com' className='outline-none block border border-[#C2C5E1] h-[42px] rounded-[6px] w-full pl-2' />
            </div>
            <div className='mt-6'>
                <p>Password</p>
                <input type="password" placeholder='********' className='outline-none block border border-[#C2C5E1] h-[42px] rounded-[6px] w-full pl-2 mt-1' />
            </div>
            <div className='mt-6'>
                <p>Confirm Password</p>
                <input type="password" placeholder='********' className='outline-none block border border-[#C2C5E1] h-[42px] rounded-[6px] w-full pl-2 mt-1' />
            </div>
            <button className='w-full bg-[#2E8B57] text-white py-[0.4rem] mt-6 rounded-[6px]'>Sign Up</button>
            <div className='flex items-center gap-2 text-[13px] mt-2'>
                <input type="checkbox" />
                <p>By submitting, I agree to the terms and conditions of Zillow9ja</p>
            </div>
            <div className='flex items-center mt-5'>
                <p className='h-[1px] bg-[#777575] w-full'></p>
                <p className='px-4'>OR</p>
                <p className='h-[1px] bg-[#777575] w-full'></p>
            </div>
            <button className='w-full text-[#212121] border border-[#C2C5E1] py-[0.4rem] mt-6 rounded-[6px] flex items-center justify-center gap-4'> <FcGoogle /> Continue with Google</button>
            <p className='text-[13px] mt-5 text-center'>Already have an account? <span className='text-[#2E8B57] cursor-pointer'>Log In</span> </p>
        </div>
        <Footer />
    </div>
  )
}
