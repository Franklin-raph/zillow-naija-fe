"use client"

import { useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import { BiSearch } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import HomeCard from "./components/home-card/HomeCard";

export default function Home() {
  const tabs = ["Buy", "Rent", "Sell"];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  return (
    <div>
      <Navbar />
      <section className='flex md:justify-between items-center flex-col md:flex-row h-screen relative max-w-[1600px] mx-auto px-[4rem] gap-5 bg-[#EEF1EE]'>
        <div className='py-14 md:pb-0 md:pt-[6rem] lg:w-[45%] md:w-[70%] w-[98%]'>
          <p className="lg:text-[55px] md:text-[45px] text-[30px] font-[700] text-center md:text-left leading-[65px] mb-5">
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
          <div className="border border-[#212121] rounded-[10px] mt-[20px] px-4 flex items-center gap-3">
            <BiSearch className="text-[20px]"/>
            <input 
              type="text" 
              className="outline-none px-3 py-[10px] bg-transparent w-full text-[#777575]" 
              placeholder="Please enter town, area, state" 
            />
          </div>
        </div>
        
        <div className="md:w-[50%] w-full h-[400px] md:h-[500px] overflow-hidden">
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
      <section className="max-w-[1600px] mx-auto px-[4rem] py-[80px]">
        <p className="font-[#212121] font-[700] text-[30px]">Suggested Homes For You</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {
            // Mock data for home cards
            Array.from({ length: 5 }, (_, index) => (
              <HomeCard key={index} />
            ))
          }
          {/* HomeCards */}
        </div>
      </section>
    </div>
  );
}