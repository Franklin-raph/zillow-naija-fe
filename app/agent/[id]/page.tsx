"use client"

import React, { useEffect, useState } from 'react'
import Navbar from '../../components/nav-bar/Navbar'
import Footer from '../../components/footer/Footer'
import { CiLocationOn } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import { get } from '@/app/utils/axiosHelpers';
import SuggestedHomeCard from '@/app/components/suggested-home-card/SuggestedHomeCard';

export default function Page() {
    
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getListings() {
    setIsLoading(true);
    try {
        const res = await get('/listings/');
        setListings(res.results.slice(0, 6));
    } catch (err) {
        console.error('Error fetching listings:', err);
        setListings([]); // Set empty array on error to avoid undefined issues
    } finally {
        setIsLoading(false);
    }
    }

    useEffect(() => {
        getListings()
    },[])

  return (
    <div>
        <Navbar />
        <div className="">
            <div className='bg-[#212121] w-full h-[150px]'></div>
            <div className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] py-[20px]">
                <div className='flex items-center gap-3 md:mt-[-95px] mt-[-75px]'>
                    <img src="../images/user2.png" alt="" className='md:w-[100px] w-[75px]' />
                    <div className='pb-5'>
                        <p className='text-white font-[500] md:text-[25px]'>Chinasa Okafor Jessica</p>
                        <div className='text-white flex items-center gap-2'>
                            <CiLocationOn />
                            <p className='text-[15px]'>Nnewi, Anambra State</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[3rem]'>
                    <p className='font-[600] md:text-[28px] text-[20px] mb-2'>About Chinasa Okafor</p>
                    <p className='text-[14px] md:text-[16px]'>
                        Chinasa Okafor is a dedicated and results-driven real estate agent with a passion for connecting clients to their dream properties in Anambra State and beyond. With years of experience in the real estate industry, Chinasa has built a reputation for integrity, professionalism, and exceptional customer service. Specializing in residential and commercial properties, Chinasa takes pride in helping clients navigate the complexities of property transactions with ease. Whether you&apos;re buying your first home, selling a property, or looking for lucrative investment opportunities, Chinasa&apos;s expertise and local market knowledge ensure you make informed decisions. Chinasa is committed to understanding each client&apos;s unique needs, delivering personalized solutions, and building lasting relationships based on trust and satisfaction. Outside of real estate, Chinasa enjoys volunteering in the community and exploring innovative ways to make property ownership accessible to all.
                    </p>
                    <div className='pt-[3rem] mt-[3rem] border-t'>
                        <p className='font-[600] md:text-[28px] text-[20px] mb-4'>Chinasa Newest Listings</p>
                        <div className='flex justify-center items-start pb-8 lg:flex-row flex-col-reverse'>
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 content-center gap-3'>
                                {
                                    listings?.map((listing, index) => (
                                    <SuggestedHomeCard key={index} listing={listing} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            isLoading && <p className='text-[1px]'>load...</p>
        }
        <Footer />
    </div>
  )
}
