"use client"

import React, { useEffect, useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import RecentlyPostedHomeCards from "../components/recently-posted-homes-card/RecentlyPostedHomeCards";
import { get } from '../utils/axiosHelpers';


export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [properties, setProperties] = useState<any[]>([])

  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
  }

  // const properties = [
  //   {
  //     title: 'Portable 4 Bedroom Bungalow',
  //     location: 'Adeniran Ogunsanya Surulere, Lagos',
  //     price: '3,500,000',
  //     tag: '5 mins Ago',
  //     image: "./images/suggested-image.png",
  //     details: ['38eds', '28abrooms', '5z7n²'],
  //   },
  //   {
  //     title: 'Luxury 4 Bedroom Duplex',
  //     location: 'Ekwulobia-Umunze Road Awka, Anambra',
  //     price: '3,500,000',
  //     tag: '10 mins Ago',
  //     image: "./images/suggested-image-2.png",
  //     details: ['38eds', '28abrooms', '5z7n²'],
  //   },
  //   {
  //     title: 'Luxury 4 Bedroom Duplex',
  //     location: 'Independence Layout Nza, Enugu',
  //     price: '3,500,000',
  //     tag: '8 mins Ago',
  //     image: "./images/suggested-image-3.png",
  //     details: ['38eds', '28abrooms', '5z7n²'],
  //   },
  //   {
  //     title: 'Luxury 4 Bedroom Duplex',
  //     location: 'Ekwulobia-Umunze Road Awka, Anambra',
  //     price: '3,500,000',
  //     tag: '5 mins Ago',
  //     image: "./images/suggested-image.png",
  //     details: ['38eds', '28abrooms', '5z7n²'],
  //   },
  //   {
  //     title: 'Luxury 4 Bedroom Duplex',
  //     location: 'Independence Layout Nza, Enugu',
  //     price: '3,500,000',
  //     tag: '25 mins Ago',
  //     image: "./images/suggested-image-2.png",
  //     details: ['38eds', '28abrooms', '5z7n²'],
  //   },
  //   {
  //     title: 'Luxury 4 Bedroom Duplex',
  //     location: 'Ekwulobia-Umunze Road Awka, Anambra',
  //     price: '3,500,000',
  //     tag: 'Yesterday',
  //     image: "./images/suggested-image-3.png",
  //     details: ['38eds', '28abrooms', '5z7n²'],
  //   },
  //   {
  //     title: 'Luxury 4 Bedroom Duplex',
  //     location: 'Independence Layout Nza, Enugu',
  //     price: '3,500,000',
  //     tag: 'Last week',
  //     image: "./images/suggested-image.png",
  //     details: ['38eds', '28abrooms', '5z7n²'],
  //   },
  // ];

  const getMyListedProperties = async () => {
    // Call your API to get my listed properties
    const response = await get('/listings/my_listings/')
    setProperties(response.results)
    console.log(response);
  }

  useEffect(() => {
    getMyListedProperties()
  },[])

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
          pageTitle={'My Properties'}
        />
        <div className='mt-8'>
          <section className="w-[95%] mx-auto md:px-[1rem] px-[0px] pb-[80px]">
            <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">Properties Posted</p>
            {
              properties.length === 0 && (
                <div className="text-center text-[18px] font-[500]">No properties found.</div>
              )
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {properties.map((property, index) => (
                  <RecentlyPostedHomeCards key={index} property={property}/>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}