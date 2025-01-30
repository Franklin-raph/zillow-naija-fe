"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import { BiKey, BiSearch } from "react-icons/bi";
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

  interface StatItem {
    value: number;
    label: string;
  }

  const stats: StatItem[] = [
    { value: 1200, label: 'Properties Sold' },
    { value: 1200, label: 'Happy Customer' },
    { value: 1200, label: 'Awards Won' },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const increment = 10; // Time between increments in milliseconds

    stats.forEach((stat, index) => {
      const targetValue = stat.value;
      const steps = Math.ceil(duration / increment);
      const incrementValue = targetValue / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(
            Math.ceil(incrementValue * currentStep),
            targetValue
          );
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, increment);
    });
  }, []);

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
          {/* {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <span className="text-4xl font-bold">{counts[index]}+</span>
          <p className="text-lg mt-2">{stat.label}</p>
        </div>
      ))} */}
          <div className="flex items-center justify-between mt-5">
            <div className="text-center flex items-center flex-col">
              <RiKey2Line className="text-[40px]"/>
              <p className="text-[25px] my-[-10px]">1,200 +</p>
              <p className="mt-2">Properties Sold</p>
            </div>
            <div className="text-center flex items-center flex-col">
              <FaRegSmile className="text-[30px] mb-[2px]"/>
              <p className="text-[25px] my-[-10px]">1,200 +</p>
              <p className="mt-2">Happy Customer</p>
            </div>
            <div className="text-center flex items-center flex-col">
              <FaAward className="text-[30px] mb-[2px]"/>
              <p className="text-[25px] my-[-10px]">1,200 +</p>
              <p className="mt-2">Awards Won</p>
            </div>
          </div>
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
    </div>
  );
}