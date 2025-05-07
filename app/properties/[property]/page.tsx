"use client"

import Navbar from '@/app/components/nav-bar/Navbar'
import React, { useEffect, useState } from 'react'
import { BsSquare } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import RecentlyPostedHomeCards from "../../components/recently-posted-homes-card/RecentlyPostedHomeCards";
import Footer from '@/app/components/footer/Footer';
import { BiHeart, BiShare } from 'react-icons/bi';
import { get } from '@/app/utils/axiosHelpers';

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

    const properties = [
        {
          title: 'Portable 4 Bedroom Bungalow',
          location: 'Adeniran Ogunsanya Surulere, Lagos',
          price: '#3,500,000',
          tag: '5 mins Ago',
          image: "../images/suggested-image.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Ekwulobia-Umunze Road Awka, Anambra',
          price: '#3,500,000',
          tag: '10 mins Ago',
          image: "../images/suggested-image-2.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Independence Layout Nza, Enugu',
          price: '#3,500,000',
          tag: '8 mins Ago',
          image: "../images/suggested-image-3.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Ekwulobia-Umunze Road Awka, Anambra',
          price: '#3,500,000',
          tag: '5 mins Ago',
          image: "../images/suggested-image.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Independence Layout Nza, Enugu',
          price: '#3,500,000',
          tag: '25 mins Ago',
          image: "../images/suggested-image-2.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Ekwulobia-Umunze Road Awka, Anambra',
          price: '#3,500,000',
          tag: 'Yesterday',
          image: "../images/suggested-image-3.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Independence Layout Nza, Enugu',
          price: '#3,500,000',
          tag: 'Last week',
          image: "../images/suggested-image.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
    ];

  return (
    <div>
        <Navbar />
        <div className='max-w-[1600px] mx-auto md:px-[4rem] px-[1rem] mt-9'>
            <div className='relative'>
                <img src="../images/img1.png" className='w-[100%] md:h-[500px] h-[300px] object-cover rounded-[20px]' alt="" />
                <div className='absolute top-4 right-6 flex items-center gap-2'>
                    <div className='flex flex-col items-center justify-center cursor-pointer text-[#2E8B57] bg-white py-2 px-3 rounded-full'>
                        <BiHeart className='text-[20px]'/>
                        <p className='text-[12px]'>Save</p>
                    </div>
                    <div className='flex flex-col items-center justify-center cursor-pointer text-[#2E8B57] bg-white py-2 px-3 rounded-full'>
                        <BiShare className='text-[20px]'/>
                        <p className='text-[12px]'>Share</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 md:gap-5 justify-between mt-5 overflow-x-scroll'>
                    <img src="../images/img2.png" alt="" className='md:w-[200px] w-[120px]'/>
                    <img src="../images/img3.png" alt="" className='md:w-[200px] w-[120px]' />
                    <img src="../images/img4.png" alt="" className='md:w-[200px] w-[120px]' />
                    <img src="../images/img5.png" alt="" className='md:w-[200px] w-[120px]' />
                    <img src="../images/img5.png" alt="" className='md:w-[200px] w-[120px]' />
                    <img src="../images/img5.png" alt="" className='md:w-[200px] w-[120px]' />
                </div>
            </div>
            <div className='mt-[4rem]'>
                <p className='font-bold mb-2'>Property Overview</p>
                <p className="font-bold md:text-[30px] text-[20px] md:w-[700px]">Luxurious 2-Bedroom Apartment in Lekki with Ocean View</p>
                <p>Lekki, Ajah Lagos</p>
                <p className='font-bold md:text-[30px] text-[20px] mt-5 pb-5 border-[#C2C2C2] border-b'>#75,000,000,000</p>
                <div className='border-[#C2C2C2] border-b pb-5'>
                    <p className='font-[600] md:text-[22px] text-[18px] text-[#212121] mt-5 pb-2'>Property Details</p>
                    <p className='text-[14px] md:text-[16px]'>This is a fully furnished 2-bedroom apartment in Lekki Phase 1 that offers stunning ocean views, modern decor, and top-notch amenities. It comes with 24/7 electricity, high-speed Wi-Fi, and weekly cleaning services. Located just 5 minutes from Nike Art Gallery, this apartment is perfect for vacationers, couples, or business travelers.</p>
                    <div className='flex items-center justify-start gap-10 mt-[20px]'>
                        <div className='flex items-center gap-1'>
                            <BsSquare className='text-[#2E8B57]' />
                            <p className='text-[14px] md:text-[16px]'>5 by 12</p>
                        </div>
                    </div>
                </div>
                <div className='py-[2rem] flex justify-between flex-col md:flex-row items-start gap-6'>
                    <div>
                        <p className='font-[600] md:text-[22px] text-[18px] mb-4'>Property Features</p>
                        <ul className='text-[#212121] grid gap-2 pl-4 list-disc md:text-[16px] text-[14px]'>
                            <li>Spacious living area with flat-screen TV and DSTV.</li>
                            <li>Fully equipped kitchen with microwave, fridge, and cooking utensils.</li>
                            <li>Master bedroom with en-suite bathroom and water heater.</li>
                            <li>Private garden for relaxation and outdoor activities.</li>
                            <li>Proximity to major amenities.</li>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img src="../images/user3.png" alt="" className='w-[100px] h-[100px]' />
                        <p className='md:text-[20px] text-[15px] text-[#212121] mt-3 font-[600]'>Listing Agent</p>
                        <p className='text-[14px] md:text-[16px]'>Anthonia Chinyere</p>
                        <button className='bg-[#2E8B57] py-[7px] px-[16px] rounded-[5px] text-white mt-2 text-[14px] md:text-[16px]'>Contact Agent</button>
                    </div>
                </div>
                <div className='mt-8'>
                    <img src="../images/map.png" alt="" />
                </div>
            </div>
            <section className="pt-[80px]">
                <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">Similar Properties</p>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                        slidesPerView: 2,
                        },
                        1024: {
                        slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper md:h-[470px] h-[350px]"
                    loop={true}
                    style={{
                        '--swiper-pagination-color': '#22AC00', // Active bullet color
                        '--swiper-pagination-bullet-inactive-color': '#999999', // Inactive bullet color
                        '--swiper-pagination-bullet-inactive-opacity': '0.5', // Inactive bullet opacity
                        '--swiper-pagination-bullet-size': '8px', // Bullet size
                        '--swiper-pagination-bullet-horizontal-gap': '6px', // Space between bullets
                        // '--swiper-pagination-top': '353px', // Move pagination down
                    } as React.CSSProperties}
                    >
                    {
                        listings?.map((listing, index) => (
                        <SwiperSlide key={index}>
                            <RecentlyPostedHomeCards listing={listing}/>
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
        </div>
        {
            isLoading && <p className='text-[1px]'>load...</p>
        }
        <Footer />
    </div>
  )
}
