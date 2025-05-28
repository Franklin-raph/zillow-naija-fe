"use client"

import Navbar from '@/app/components/nav-bar/Navbar'
import React, { useEffect, useState } from 'react'
// import { BsSquare } from 'react-icons/bs'
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
import { get, post, remove } from '@/app/utils/axiosHelpers';
import { useParams } from 'next/navigation';
import Alert from '@/app/components/alert/Alert';
import { AxiosError } from 'axios';
import { BsFillHeartFill } from 'react-icons/bs';
import Map from '@/app/components/map/Map';

// Define the property info type
interface MediaItem {
    media: string;
}

interface User {
    full_name: string;
    profile_pic?: {
        media: string;
    } | null;
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
    added_to_favourite?: boolean;
    location?: {
        coordinates: [number, number];
    };
}

export default function Page() {

    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [propertyInfo, setPropertyInfo] = useState<PropertyInfo | null>(null);
    const [hasHydrated, setHasHydrated] = useState(false);
    const { property } = useParams()
    const [msg, setMsg] = useState<string>('')
    const [alertType, setAlertType] = useState<string>('')

    async function getListings() {
        try {
            const res = await get('/listings/');
            setListings(res.results?.slice(0, 6) || []);
        } catch (err) {
            console.error('Error fetching listings:', err);
            setListings([]); // Set empty array on error to avoid undefined issues
        }
    }

    async function getPropertyInfo() {
        setIsLoading(true);
        try {
            const res = await get(`/listings/${property}/`);
            console.log(res);
            setPropertyInfo(res);
        } catch (err) {
            console.error('Error fetching property info:', err);
            setPropertyInfo(null);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setHasHydrated(true);
        getListings();
        getPropertyInfo();
    }, [property])

    const addFavorite = async () => {
        if (!propertyInfo?.id) return;
        
        try {
            setIsLoading(true);
            await post(`/favorites/`, {"listing": propertyInfo.id});
            await getPropertyInfo(); // Refresh property info
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
        } finally {
            setIsLoading(false);
        }
    }

    const removeFavorite = async () => {
        if (!propertyInfo?.id) return;
        
        try {
            setIsLoading(true);
            await remove(`/favorites/${propertyInfo.id}/`);
            await getPropertyInfo(); // Refresh property info
            setMsg('Property removed from favorites');
            setAlertType('success');
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setMsg(error.response?.data?.message || 'An error occurred');
                setAlertType('warning');
            } else {
                setMsg('An unexpected error occurred.');
                setAlertType('error');
            }
        } finally {
            setIsLoading(false);
        }
    }

    // Don't render until hydrated to prevent hydration mismatch
    if (!hasHydrated) {
        return null;
    }

    // Loading state
    if (isLoading && !propertyInfo) {
        return (
            <div>
                <Navbar />
                <div className='max-w-[1600px] mx-auto md:px-[4rem] px-[1rem] mt-9'>
                    <div className='animate-pulse'>
                        <div className='bg-gray-300 w-full md:h-[500px] h-[300px] rounded-[20px] mb-5'></div>
                        <div className='bg-gray-300 h-8 w-3/4 rounded mb-4'></div>
                        <div className='bg-gray-300 h-6 w-1/2 rounded mb-4'></div>
                        <div className='bg-gray-300 h-10 w-1/3 rounded'></div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // No property found state
    if (!isLoading && !propertyInfo) {
        return (
            <div>
                <Navbar />
                <div className='max-w-[1600px] mx-auto md:px-[4rem] px-[1rem] mt-9'>
                    <div className='text-center py-20'>
                        <p className='text-[#777575] text-[18px] md:text-[24px]'>Property not found</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
            <Navbar />
            <div className='max-w-[1600px] mx-auto md:px-[4rem] px-[1rem] mt-9'>
                <div className='relative'>
                    <img 
                        src={propertyInfo?.cover_image?.media || '/images/default-property.jpg'} 
                        className='w-[100%] md:h-[500px] h-[300px] object-cover rounded-[20px]' 
                        alt={propertyInfo?.name || 'Property image'} 
                    />
                    <div className='absolute top-4 right-6 flex items-center gap-2'>
                        {
                            propertyInfo?.added_to_favourite ?
                            <div onClick={removeFavorite} className='flex flex-col items-center justify-center cursor-pointer text-[#2E8B57] bg-white p-3 rounded-full hover:bg-gray-100 transition-colors'>
                                <BsFillHeartFill className='text-[16px]'/>
                            </div>
                            :
                            <div onClick={addFavorite} className='flex flex-col items-center justify-center cursor-pointer text-[#2E8B57] bg-white p-3 rounded-full hover:bg-gray-100 transition-colors'>
                                <BiHeart className='text-[16px]'/>
                            </div>
                        }
                        <div className='flex flex-col items-center justify-center cursor-pointer text-[#2E8B57] bg-white p-3 rounded-full hover:bg-gray-100 transition-colors'>
                            <BiShare className='text-[16px]'/>
                        </div>
                    </div>
                    {propertyInfo?.media && propertyInfo.media.length > 0 && (
                        <div className='flex items-center gap-2 md:gap-5 justify-between mt-5 overflow-x-scroll'>
                            {propertyInfo.media.map((image, index) => (
                                <img 
                                    key={index} 
                                    src={image.media} 
                                    alt={`Property image ${index + 1}`} 
                                    className='md:w-[200px] w-[120px] rounded-lg object-cover' 
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className='mt-[4rem]'>
                    <p className='font-bold mb-2'>Property Overview</p>
                    <p className="font-bold md:text-[30px] text-[20px] md:w-[700px]">{propertyInfo?.name}</p>
                    <p className='text-[#777575] mt-2'>{propertyInfo?.address}</p>
                    <p className='font-bold md:text-[30px] text-[20px] mt-5 pb-5 border-[#C2C2C2] border-b text-[#2E8B57]'>₦{propertyInfo?.price?.toLocaleString()}</p>
                    
                    <div className='border-[#C2C2C2] border-b pb-5'>
                        <p className='font-[600] md:text-[22px] text-[18px] text-[#212121] mt-5 pb-2'>Property Details</p>
                        <p className='text-[14px] md:text-[16px] leading-relaxed'>{propertyInfo?.description}</p>
                        <div className='flex items-center justify-start gap-10 mt-[20px]'>
                            <div className='flex gap-1 flex-col text-[14px] md:text-[16px]'>
                                {propertyInfo?.land_size_acres && (
                                    <p><span className='font-semibold'>Land size in acres:</span> {propertyInfo.land_size_acres}</p>
                                )}
                                {propertyInfo?.land_size_sqm && (
                                    <p><span className='font-semibold'>Land size in square meters:</span> {propertyInfo.land_size_sqm}</p>
                                )}
                                {propertyInfo?.sqr_feet && (
                                    <p><span className='font-semibold'>Land size in square feet:</span> {propertyInfo.sqr_feet}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    <div className='py-[2rem] flex justify-between flex-col md:flex-row items-start gap-6'>
                        <div className='flex-1'>
                            <p className='font-[600] md:text-[22px] text-[18px] mb-4'>Property Features</p>
                            <ul className='text-[#212121] grid gap-2 pl-4 list-disc md:text-[16px] text-[14px]'>
                                <li>Spacious living area with flat-screen TV and DSTV.</li>
                                <li>Fully equipped kitchen with microwave, fridge, and cooking utensils.</li>
                                <li>Master bedroom with en-suite bathroom and water heater.</li>
                                <li>Private garden for relaxation and outdoor activities.</li>
                                <li>Proximity to major amenities.</li>
                            </ul>
                        </div>
                        
                        <div className='flex items-center justify-center flex-col bg-gray-50 p-6 rounded-lg min-w-[250px]'>
                            <img 
                                src={propertyInfo?.user?.profile_pic?.media || "/images/default-avatar.png"} 
                                alt={`${propertyInfo?.user?.full_name || 'Agent'} profile`} 
                                className='w-[80px] h-[80px] rounded-full object-cover' 
                            />
                            <p className='md:text-[20px] text-[15px] text-[#212121] mt-3 font-[600]'>Listing Agent</p>
                            <p className='text-[14px] md:text-[16px] text-center'>{propertyInfo?.user?.full_name || 'Agent Name'}</p>
                            {propertyInfo?.phone && (
                                <a 
                                    className='bg-[#2E8B57] py-[7px] px-[16px] rounded-[5px] text-white mt-2 text-[14px] md:text-[16px] hover:bg-[#236B4A] transition-colors' 
                                    href={`tel:+${propertyInfo.phone}`}
                                >
                                    Contact Agent
                                </a>
                            )}
                        </div>
                    </div>
                    
                    <div className='md:mt-8'>
                        <Map address={propertyInfo?.address} location={propertyInfo?.location?.coordinates}/>
                    </div>
                </div>
                
                {listings.length > 0 && (
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
                                '--swiper-pagination-color': '#22AC00',
                                '--swiper-pagination-bullet-inactive-color': '#999999',
                                '--swiper-pagination-bullet-inactive-opacity': '0.5',
                                '--swiper-pagination-bullet-size': '8px',
                                '--swiper-pagination-bullet-horizontal-gap': '6px',
                            } as React.CSSProperties}
                            >
                            {listings.map((listing, index) => (
                                <SwiperSlide key={index}>
                                    <RecentlyPostedHomeCards listing={listing}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                )}
            </div>
            <Footer />
        </div>
    )
}