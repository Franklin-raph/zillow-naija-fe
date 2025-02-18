import React from 'react'
import Navbar from '../components/nav-bar/Navbar'
import Footer from '../components/footer/Footer'
import { RiHome4Line } from 'react-icons/ri'
import { FaRegHandshake } from 'react-icons/fa'
import { PiUsersThree } from 'react-icons/pi'
import { CiBag1 } from 'react-icons/ci'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
        <Navbar />
        <div className='mb-5 shadow-md rounded-[20px] relative h-[70vh]'>
            <div className='absolute bg-[#212121a8] text-white h-full w-full px-3 py-1 md:text-[14px] text-[12px] rounded-r-[5px] flex flex-col items-center justify-center'>
                <div className='text-center md:w-[50%] mx-auto'>
                    <p className='lg:text-[65px] md:text-[48px] text-[34px] font-bold md:leading-[75px] md:mb-8 mb-4'>
                        Looking to sell your properties?
                    </p>
                    <p className='text-[20px] mb-1 text-center'>
                        Find a trusted agent or sell your property by yourself in just a few minutes.
                    </p>
                </div>
            </div>
            <img src="./images/sell.png" alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='mt-[5rem] md:max-w-[2000px] w-[95%] mx-auto px-4'>
            <p className="md:text-[32px] text-[22px] font-[600] mb-6 text-center">Seller Guides</p>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                <div className='border border-[#1B8501] rounded-[12px]'>
                    <div className='flex items-center gap-5 border-b p-3'>
                        <div className='bg-[#E3EDE6] p-2 rounded-full text-[#2E8B57] text-[20px]'>
                            <RiHome4Line className='text-[26px]'/>
                        </div>
                        <p className='font-[500]'>How to list your property</p>
                    </div>
                    <div className='p-3 space-y-2'>
                        <p> <span className='font-[500]'>Prepare Details:</span> Gather accurate info (type, size, bedrooms, location).</p>
                        <p> <span className='font-[500]'>Take Photos:</span> Capture clear, well-lit images highlighting key features.</p>
                        <p> <span className='font-[500]'>Download the App:</span> Upload property details and photos.</p>
                    </div>
                </div>
                <div className='border border-[#1B8501] rounded-[12px]'>
                    <div className='flex items-center gap-5 border-b p-3'>
                        <div className='bg-[#E3EDE6] p-2 rounded-full text-[#2E8B57] text-[20px]'>
                            <CiBag1 className='text-[26px]'/>
                        </div>
                        <p className='font-[500]'>Setting the Right Price</p>
                    </div>
                    <div className='p-3 space-y-2'>
                        <p> <span className='font-[500]'>Research Market:</span> Check similar properties for pricing trends.</p>
                        <p> <span className='font-[500]'>Consider Features:</span> Factor in condition, location, and amenities.</p>
                        <p> <span className='font-[500]'>Seek Advice:</span> Consult a real estate agent via the app if needed.</p>
                        <p> <span className='font-[500]'>Be Flexible:</span> A negotiable price attracts more buyers.</p>
                    </div>
                </div>
                <div className='border border-[#1B8501] rounded-[12px]'>
                    <div className='flex items-center gap-5 border-b p-3'>
                        <div className='bg-[#E3EDE6] p-2 rounded-full text-[#2E8B57] text-[20px]'>
                            <PiUsersThree className='text-[26px]'/>
                        </div>
                        <p className='font-[500]'>Engaging Buyers</p>
                    </div>
                    <div className='p-3 space-y-2'>
                        <p> <span className='font-[500]'>Respond Quickly:</span> Answer inquiries promptly to maintain interest</p>
                        <p> <span className='font-[500]'>Schedule Viewings:</span> Arrange convenient times for showings.</p>
                        <p> <span className='font-[500]'>Emphasize Benefits:</span> Highlight unique features (e.g., location, size).</p>
                        <p> <span className='font-[500]'>Stay Honest:</span> Be transparent to avoid future misunderstandings.</p>
                    </div>
                </div>
                <div className='border border-[#1B8501] rounded-[12px]'>
                    <div className='flex items-center gap-5 border-b p-3'>
                        <div className='bg-[#E3EDE6] p-2 rounded-full text-[#2E8B57] text-[20px]'>
                            <FaRegHandshake className='text-[26px]'/>
                        </div>
                        <p className='font-[500]'>Closing the Deal</p>
                    </div>
                    <div className='p-3 space-y-2'>
                        <p> <span className='font-[500]'>Prepare Details:</span> Gather accurate info (type, size, bedrooms, location).</p>
                        <p> <span className='font-[500]'>Take Photos:</span> Capture clear, well-lit images highlighting key features.</p>
                        <p> <span className='font-[500]'>Download the App:</span> Upload property details and photos.</p>
                    </div>
                </div>
            </div>
            <div className="text-center bg-gradient-to-r from-[#2E8B57] to-[#13544E] md:h-64 h-[300px] flex flex-col items-center justify-center text-white mt-[60px] px-6 rounded-[18px]">
                <p className="font-[600] md:text-[30px] text-[20px]">You&apos;re a step away from your potential clients</p>
                <p>Start selling today! Download the Zillow9ja app now on the App Store and Google Play</p>
                <div className='flex items-center justify-center gap-5 mt-8'>
                    <Link href='/'>
                        <img src="./images/play-store.svg" className='w-[130px]' alt="" />
                    </Link>
                    <Link href='/'>
                        <img src="./images/apple-store.svg" className='w-[130px]' alt="" />
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
