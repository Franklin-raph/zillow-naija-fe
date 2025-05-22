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
import { get, post } from '@/app/utils/axiosHelpers';
import { useParams } from 'next/navigation';
import Alert from '@/app/components/alert/Alert';
import { AxiosError } from 'axios';

// Define the property info type
interface MediaItem {
    media: string;
}

interface User {
    full_name: string;
    profile_pic?: MediaItem;
}

interface PropertyInfo {
    id: string | number;
    name: string;
    address: string;
    price: string | number;
    description: string;
    land_size_acres: string | number;
    land_size_sqm: string | number;
    sqr_feet: string | number;
    cover_image?: MediaItem;
    media?: MediaItem[];
    user?: User;
    phone?: string;
}

export default function Page() {

    const [listings, setListings] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [propertyInfo, setPropertyInfo] = useState<PropertyInfo | null>(null);
    const { property } = useParams()
    const [msg, setMsg] = useState<string>('')
    const [alertType, setAlertType] = useState<string>('')

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

    async function getPrpertyInfo() {
        setIsLoading(true);
        try {
            const res = await get(`/listings/${property}/`);
            console.log(res);
            setPropertyInfo(res);
            
            // setListings(res.results.slice(0, 6));
        } catch (err) {
            console.error('Error fetching listings:', err);
            // setListings([]); // Set empty array on error to avoid undefined issues
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getListings()
        getPrpertyInfo()
    },[])

    const toggleFavorite = async () => {
        console.log({"listing": propertyInfo?.id});
        
        try {
            const res = await post(`/favorites/`, {"listing": propertyInfo?.id});
            getPrpertyInfo()
            setMsg('Property added to favorites');
            setAlertType('success');
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setMsg(error.response?.data?.message || 'An error occurred');
                setAlertType('warning');
            } else {
                setMsg('An unexpected error occurred.');
                setAlertType('error');
            }
        }finally {
            setIsLoading(false);
        }
    }

  return (
    <div>
        {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
        <Navbar />
        <div className='max-w-[1600px] mx-auto md:px-[4rem] px-[1rem] mt-9'>
            <div className='relative'>
                <img src={propertyInfo?.cover_image?.media} className='w-[100%] md:h-[500px] h-[300px] object-cover rounded-[20px]' alt="" />
                <div className='absolute top-4 right-6 flex items-center gap-2'>
                    <div onClick={toggleFavorite} className='flex flex-col items-center justify-center cursor-pointer text-[#2E8B57] bg-white py-2 px-3 rounded-full'>
                        <BiHeart className='text-[12px]'/>
                        <p className='text-[10px]'>Save</p>
                    </div>
                    <div className='flex flex-col items-center justify-center cursor-pointer text-[#2E8B57] bg-white py-2 px-3 rounded-full'>
                        <BiShare className='text-[12px]'/>
                        <p className='text-[10px]'>Share</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 md:gap-5 justify-between mt-5 overflow-x-scroll'>
                    {
                        propertyInfo?.media?.map((image, index) => (
                            <img key={index} src={image.media} alt="" className='md:w-[200px] w-[120px]' />
                        ))
                    }
                </div>
            </div>
            <div className='mt-[4rem]'>
                <p className='font-bold mb-2'>Property Overview</p>
                <p className="font-bold md:text-[30px] text-[20px] md:w-[700px]">{propertyInfo?.name}</p>
                <p>{propertyInfo?.address}</p>
                <p className='font-bold md:text-[30px] text-[20px] mt-5 pb-5 border-[#C2C2C2] border-b'>₦{propertyInfo?.price}</p>
                <div className='border-[#C2C2C2] border-b pb-5'>
                    <p className='font-[600] md:text-[22px] text-[18px] text-[#212121] mt-5 pb-2'>Property Details</p>
                    <p className='text-[14px] md:text-[16px]'>{propertyInfo?.description}</p>
                    <div className='flex items-center justify-start gap-10 mt-[20px]'>
                        <div className='flex gap-1 flex-col'>
                            <p>Land size in acres: {propertyInfo?.land_size_acres}</p>
                            <p>Land size in square meters: {propertyInfo?.land_size_sqm}</p>
                            <p>Land size in square feet: {propertyInfo?.sqr_feet}</p>
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
                        <img src="../images/man.png" alt="" className='w-[80px] h-[80px] rounded-full' />
                        <p className='md:text-[20px] text-[15px] text-[#212121] mt-3 font-[600]'>Listing Agent</p>
                        <p className='text-[14px] md:text-[16px]'>{propertyInfo?.user?.full_name}</p>
                        <a className='bg-[#2E8B57] py-[7px] px-[16px] rounded-[5px] text-white mt-2 text-[14px] md:text-[16px]' href={`tel:+${propertyInfo?.phone}`}>Contact Agent</a>
                    </div>
                </div>
                <div className='md:mt-8'>
                    {
                        propertyInfo?.user?.profile_pic === null ?
                        <img src={propertyInfo?.user?.profile_pic?.media} alt="" />
                        :
                        <img src="../images/map.png" alt="" />
                    }
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