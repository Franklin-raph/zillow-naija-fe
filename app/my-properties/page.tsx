"use client"

import React, { useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import RecentlyPostedHomeCards from "../components/recently-posted-homes-card/RecentlyPostedHomeCards";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [pageTitle, setPageTitle] = useState<string>('My Properties')

  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
  }

  const properties = [
    {
      title: 'Portable 4 Bedroom Bungalow',
      location: 'Adeniran Ogunsanya Surulere, Lagos',
      price: '3,500,000',
      tag: '5 mins Ago',
      image: "./images/suggested-image.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '3,500,000',
      tag: '10 mins Ago',
      image: "./images/suggested-image-2.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '3,500,000',
      tag: '8 mins Ago',
      image: "./images/suggested-image-3.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '3,500,000',
      tag: '5 mins Ago',
      image: "./images/suggested-image.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '3,500,000',
      tag: '25 mins Ago',
      image: "./images/suggested-image-2.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '3,500,000',
      tag: 'Yesterday',
      image: "./images/suggested-image-3.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '3,500,000',
      tag: 'Last week',
      image: "./images/suggested-image.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
  ];

  return (
    <div>
      <SideNav toggle={{
        toggleNav: toggleNav, 
        setToggleNav: handleToggleNav
      }}/>
      <div className={`w-full lg:w-[78%] ml-auto pb-5 ${toggleNav ? 'lg:ml-[22%]' : 'lg:ml-auto'}`}>
        <TopNav 
          toggle={{
            toggleNav: toggleNav,
            setToggleNav: handleToggleNav
          }}
          pageTitle={pageTitle}
        />
        <div className='mt-8'>
          <section className="w-[95%] mx-auto md:px-[1rem] px-[0px] pb-[80px]">
            <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">Properties Posted</p>
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
              {properties.map((property, index) => (
                <SwiperSlide key={index}>
                  <RecentlyPostedHomeCards property={property}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </div>
    </div>
  )
}