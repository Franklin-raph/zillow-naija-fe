"use client"

import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/nav-bar/Navbar'
import { useRouter } from 'next/navigation'
import Alert from '../components/alert/Alert'
import BtnLoader from '../components/btnLoader/BtnLoader'
import { post } from '../utils/axiosHelpers';
import { AxiosError } from 'axios'

export default function Page() {

    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>('')
    const [alertType, setAlertType] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const handleForgotPassword = async () => {
        try {
            if(!email) {
                setMsg('Please enter your email address.');
                setAlertType('error');
                return;
            }
            // Making the POST request using the helper function
            setLoading(true)
            const response = await post('/request-password-reset', {email});
            console.log(response);
            setMsg(response?.message);
            setAlertType('success');
            router.push(`/reset-password/${email}`)
            // window.location.assign('/dashboard');
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setMsg(error.response?.data?.message || 'An error occurred');
            } else {
                setMsg('An unexpected error occurred.');
            }
            setAlertType('error');
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className='text-[14px]'>
        {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
        <Navbar />
        <div className='bg-[#F5F6F7]'>
            <div className='md:py-[4rem] py-[2rem] max-w-[1600px] mx-auto md:px-[4rem] px-[1.2rem]'>
                <h1 className='text-[#101750] md:text-[32px] text-[22px] font-bold'>My Account</h1>
                <p className='md:text-[15px] text-[12px]'>Home / <span className='text-[#2E8B57]'>Forgot Passwword</span></p>
            </div>
        </div>
        <div className='md:w-[544px] mx-auto mt-[4rem] md:p-[4rem] pb-[4rem] pt-[2rem] px-[1rem] shadow-xl text-[#9096B2] mb-[9rem]'>
            <h1 className='font-[600] text-[#101750] text-[24px] mb-7'>Forgot Password?</h1>
            {/* <p className='mb-7'>Welcome back! We are happy to have you!.</p> */}
            <div>
                <p>Email</p>
                <input onChange={e => setEmail(e.target.value)} type="text" placeholder='johndoe@gmail.com' className='outline-none block border border-[#C2C5E1] h-[42px] rounded-[6px] w-full pl-2' />
            </div>
            {
                loading ?
                <div className='mt-[40.4px] mb-[0.5rem]'>
                    <BtnLoader />
                </div>
                :
                <button className='w-full bg-[#2E8B57] text-white py-[0.4rem] mt-6 rounded-[6px]' onClick={handleForgotPassword}>Proceed</button>
            }
        </div>
        <Footer />
    </div>
  )
}
