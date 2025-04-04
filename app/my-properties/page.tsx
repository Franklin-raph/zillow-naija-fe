"use client"

import React, { useEffect, useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import RecentlyPostedHomeCards from "../components/recently-posted-homes-card/RecentlyPostedHomeCards";
import { get } from '../utils/axiosHelpers';

// Define a proper interface for your property objects
interface Property {
  title: string;
  location: string;
  price: string;
  tag: string;
  image: string;
  details: string[];
  // Add other specific fields from your API
  id?: string | number;
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  // Instead of [key: string]: any, use a more specific index signature if needed
  [key: string]: string | number | string[] | boolean | undefined;
}

export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [properties, setProperties] = useState<Property[]>([])

  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
  }

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