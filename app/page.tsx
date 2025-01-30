"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import { BiChevronDown, BiKey, BiSearch } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import SuggestedHomeCard from "./components/suggested-home-card/SuggestedHomeCard";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import RecentlyPostedHomeCards from "./components/recently-posted-homes-card/RecentlyPostedHomeCards";
import { CiLocationOn } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { FaAward, FaRegSmile } from "react-icons/fa";
import { RiKey2Line } from "react-icons/ri";
import HomeStatsCounter from "./components/home-stats-counter/HomeStatsCounter";
import { HiChevronDown, HiChevronUp, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";


export default function Home() {
  const tabs = ["Buy", "Rent", "Sell"];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const properties = [
    {
      title: 'Portable 4 Bedroom Bungalow',
      location: 'Adeniran Ogunsanya Surulere, Lagos',
      price: '#3,500,000',
      tag: '5 mins Ago',
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '#3,500,000',
      tag: '10 mins Ago',
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '#3,500,000',
      tag: '8 mins Ago',
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '#3,500,000',
      tag: '5 mins Ago',
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '#3,500,000',
      tag: '25 mins Ago',
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '#3,500,000',
      tag: 'Yesterday',
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '#3,500,000',
      tag: 'Last week',
      details: ['38eds', '28abrooms', '5z7n²'],
    },
  ];

  const [aboutSection, setAboutSection] = useState({
    first: true,
    second: true,
    third: true,
  })

  return (
    <div>
      <Navbar />
      <section className='flex md:justify-between items-start flex-col md:flex-row pt-[3rem] relative max-w-[1600px] mx-auto px-[4rem] gap-5 bg-[#EEF1EE]'>
        <div className='py-14 md:pb-0 md:pt-[6rem] lg:w-[45%] md:w-[70%] w-[98%] relative bottom-[20px]'>
          <p className="lg:text-[50px] md:text-[40px] text-[30px] font-[700] text-center md:text-left leading-[65px] mb-5">
            Buy, Lease, rent, or sell your property easily with Zillow9ja
          </p>
          <p className="text-[20px] text-[#212121]">
            Discover a range of possibilities for purchasing, selling, or leasing properties that suit your requirements.
          </p>
          <div>
            {tabs.map((tab: string, index) => (
              <button 
                key={index} 
                onClick={() => setSelectedTab(tab)} 
                className={`${selectedTab === tab ? 'border-b-2 border-[#22AC00]' : ''} font-[500] px-2 py-1 mt-5 mr-5 text-[#212121]`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-[#110F11] rounded-[8px] mt-[20px] flex items-center p-[6px]">
            <div className=" rounded-l-[10px] p-3">
              <GrMapLocation className="text-[20px] text-white"/>
            </div>
            <input 
              type="text" 
              className="outline-none px-3 py-[10px] bg-transparent border-b mx-1 w-full text-[#fff]" 
              placeholder="Please enter town, area, state" 
            />
            <button className="bg-white text-[#212121] px-5 py-[10px] rounded-[5px]">Search</button>
          </div>
          <HomeStatsCounter />
        </div>
        
        <div className="md:w-[50%] w-full h-[400px] md:h-[500px] overflow-hidden bottom-[-110px] relative">
          <Swiper
            direction={'vertical'}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: 'bullets',
            }}
            loop={true}
            slidesPerView={1}
            className="w-full h-full swiper-vertical"
            style={{
              '--swiper-pagination-color': '#22AC00',
              '--swiper-pagination-bullet-inactive-color': '#999999',
              '--swiper-pagination-bullet-inactive-opacity': '0.5',
              '--swiper-pagination-bullet-size': '8px',
              '--swiper-pagination-bullet-horizontal-gap': '6px'
            } as React.CSSProperties}
          >
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="./images/mockup.svg" 
                  alt="Property" 
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="./images/mockup-2.svg" 
                  alt="Property" 
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] py-[80px]">
        <p className="font-[#212121] font-[700] md:text-[25px] text-[18px]">Suggested Homes For You</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
          {
            // Mock data for home cards
            Array.from({ length: 3 }, (_, index) => (
              <SuggestedHomeCard key={index} />
            ))
          }
        </div>
        <div className="flex justify-center items-center mt-5 cursor-pointer group text-[17px]">
          <p className="px-[5px] py-[2px] text-[#212121]">View all suggested homes</p>
          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-3" />
        </div>
        <div className="text-center bg-gradient-to-r from-[#2E8B57] to-[#13544E] h-64 flex flex-col items-center justify-center text-white mt-[60px] rounded-[18px]">
          <p className="font-[600] md:text-[30px] text-[20px]">You're a step away from your dream home</p>
          <button className="py-[10px] px-[20px] bg-[#2E8B57] mt-7 rounded-[8px]">Sign Up</button>
        </div>
      </section>

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] py-[80px]">
        <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">Recently Posted</p>
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
          className="mySwiper md:h-[470px] h-[420px]"
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
          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <RecentlyPostedHomeCards property={property}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] pt-[80px] flex items-start ">
        <img src="./images/sold.png" alt="" className="w-[50%] h-[500px] object-cover rounded-[10px]" />
        <div className="w-[50%] ml-[50px] grid grid-cols-1 gap-5">
          <div className="border-2 rounded-t-[7px]">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer" onClick={() => setAboutSection({...aboutSection, first: !aboutSection.first})}>
              <div className="flex items-center gap-4">
                <img src="./images/buy.svg" alt="" className="w-[35px]" />
                <p>Buy a home</p>
              </div>
              {
                aboutSection.first ? <HiOutlineChevronDown className="text-[20px]"/> : <HiOutlineChevronUp className="text-[20px]"/>
              }
            </div>
            {
              aboutSection.first && (
                <div className="mt-5 py-[8px] px-5">
                  <p>Discover the perfect home that fits your style and budget. With verified listings and expert support, we make buying a home stress free.</p>
                </div>
              )
            }
          </div>
          <div className="my-4 border-2 rounded-t-[7px]">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer" onClick={() => setAboutSection({...aboutSection, second: !aboutSection.second})}>
              <div className="flex items-center gap-4">
                <img src="./images/sell.svg" alt="" className="w-[35px]" />
                <p>Sell a home</p>
              </div>
              {
                aboutSection.second ? <HiOutlineChevronDown className="text-[20px]"/> : <HiOutlineChevronUp className="text-[20px]"/>
              }
            </div>
            {
              aboutSection.second && (
                <div className="mt-5 py-[8px] px-5">
                  <p>Selling a home can be a rewarding and exciting experience. With our easy-to-use platform, you can list your home quickly and easily, and we'll work with you to find the best price and buyer.</p>
                </div>
              )
            }
          </div>
          <div className="border-2 rounded-t-[7px]">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer" onClick={() => setAboutSection({...aboutSection, third: !aboutSection.third})}>
              <div className="flex items-center gap-4">
                <img src="./images/rent.svg" alt="" className="w-[35px]" />
                <p>Rent a home</p>
              </div>
              {
                aboutSection.third ? <HiOutlineChevronDown className="text-[20px]"/> : <HiOutlineChevronUp className="text-[20px]"/>
              }
            </div>
            {
              aboutSection.third && (
                <div className="mt-5 py-[8px] px-5">
                  <p>Looking for a place to call home? We make renting simple, hassle-free, and tailored to your needs. We've got you covered at Zillow9ja.</p>
                </div>
              )
            }
          </div>
        </div>
      </section>
      <div className="text-center">
        <div className="flex items-center justify-center mt-20">
          <img src="./images/user1.png" alt="" className="w-[70px]"/>
          <img src="./images/user2.png" alt="" className="w-[70px] ml-[-10px]"/>
          <img src="./images/user3.png" alt="" className="w-[70px] ml-[-10px]"/>
        </div>
        <p className="text-[20px] font-[600] mt-3">Trusted by over <span className="text-[#2E8B57]">1,000</span> users all over Nigeria</p>
      </div>

      <section id="why-choose-us-section">

      </section>
    </div>
  );
}