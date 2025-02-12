import React from 'react'
import Navbar from '../components/nav-bar/Navbar'
import Footer from '../components/footer/Footer'
import { RiHome4Line } from 'react-icons/ri'

export default function page() {
  return (
    <div>
        <Navbar />
        <div className='mb-5 shadow-md rounded-[20px] relative h-[70vh]'>
            <div className='absolute bg-[#212121a8] text-white h-full w-full px-3 py-1 md:text-[14px] text-[12px] rounded-r-[5px] flex flex-col items-center justify-center'>
                <div className='text-center w-[50%] mx-auto'>
                    <p className='text-[65px] font-bold leading-[75px] mb-8'>
                        Looking to sell your properties?
                    </p>
                    <p className='text-[20px] mb-1'>
                        Find a trusted agent or sell your property by yourself in just a few minutes.
                    </p>
                </div>
            </div>
            <img src="./images/sell.png" alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='mt-[4rem] md:max-w-[2000px] w-[95%] mx-auto px-4'>
            <p className="text-[30px] text-left font-[600]">Seller Guides</p>
            <div>
                <div>
                    <div>
                        <RiHome4Line />
                        <p>How to list your property</p>
                    </div>
                </div>
            </div>
            <div className="text-center bg-gradient-to-r from-[#2E8B57] to-[#13544E] h-64 flex flex-col items-center justify-center text-white mt-[60px] rounded-[18px]">
                <p className="font-[600] md:text-[30px] text-[20px]">You're a step away from your potential clients</p>
                <p>Start selling today! Download the Zillow9ja app now on the App Store and Google Play</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}
