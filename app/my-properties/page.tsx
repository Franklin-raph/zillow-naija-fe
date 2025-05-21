"use client"

import React, { useEffect, useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
import { get } from '../utils/axiosHelpers';

// Define interface for a single property
interface PropertyItem {
  name: string;
  location: string;
  price: string;
  tag: string;
  image: string;
  details: string[];
  // Add other specific fields from your API
  id?: string | number;
  description?: string;
  lat?: string;
  long?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  status?: string;
  created_at?: string | Date;
  updatedAt?: string;
}

// Define interface for API response
interface ApiResponse {
  results: PropertyItem[];
  next: string | null;
  previous: string | null;
  count: number;
  current: number;
  total: number;
}

export default function Page() {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const [properties, setProperties] = useState<PropertyItem[]>([])
  const [pagination, setPagination] = useState({
    count: 0,
    current: 1,
    total: 0,
    next: null as string | null,
    previous: null as string | null
  })

  const handleToggleNav = (value: boolean) => {
    setToggleNav(value)
  }

  const getMyListedProperties = async () => {
    try {
      // Call your API to get my listed properties
      const response = await get('/listings/my_listings/') as ApiResponse
      
      // Set properties array from results
      setProperties(response.results || [])
      
      // Set pagination data
      setPagination({
        count: response.count || 0,
        current: response.current || 1,
        total: response.total || 0,
        next: response.next,
        previous: response.previous
      })
      
      console.log(response);
    } catch (error) {
      console.error("Error fetching properties:", error)
      setProperties([])
    }
  }

  useEffect(() => {
    getMyListedProperties()
  }, [])

  // Helper function to safely format dates
  const formatDate = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return 'N/A';
    try {
      return new Date(dateValue).toDateString();
    } catch (error) {
      console.error("Error formatting date:", error);
      return 'Invalid Date';
    }
  }

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
          <section className="w-[100%] mx-auto md:px-[1rem] px-[0px] pb-[80px]">
            <div className='flex items-center justify-between'>
              <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">Properties Posted</p>
              <p>Total: {pagination.count}</p>
            </div>
            {
              properties.length === 0 && (
                <div className="text-center text-[18px] font-[500]">No properties found.</div>
              )
            }
              <div className="relative overflow-x-auto mt-4">
                  <table className="w-full text-sm text-left rtl:text-left">
                      <thead className="text-[12px] md:text-[14px] bg-[#F9FAFB] text-[#475467]">
                          <tr>
                              <th scope="col" className="px-6 py-3 font-[600]">Property</th>
                              <th scope="col" className="px-6 py-3 font-[600]">Date Added</th>
                              <th scope="col" className="px-6 py-3 font-[600]">Lat.</th>
                              <th scope="col" className="px-6 py-3 font-[600]">Long.</th>
                              <th scope="col" className="px-6 py-3 font-[600]">Amount</th>
                              <th scope="col" className="px-6 py-3 font-[600]">Status</th>
                          </tr>
                      </thead>
                      <tbody>
                        {
                          properties.map((property, index) => (
                            <tr key={index} className="bg-white border-b hover:bg-[#F9FAFB]">
                                <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">{property.name}</td>
                                <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">{formatDate(property.created_at)}</td>
                                <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">{property.lat || 'N/A'}</td>
                                <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">{property.long || 'N/A'}</td>
                                <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">₦{property.price}</td>
                                <td className="px-6 py-4 text-[12px] md:text-[16px] flex gap-2 items-center">
                                  <p className={property.status === 'sold' ? 'text-[14px] text-[#027A48] font-[500]' : 'text-[14px] text-[#175CD3] font-[500]'}>
                                    {property.status || 'N/A'}
                                  </p>
                                </td>
                            </tr>
                          ))
                        }
                      </tbody>
                  </table>
              </div>
              {/* Pagination controls could be added here */}
          </section>
        </div>
      </div>
    </div>
  )
}