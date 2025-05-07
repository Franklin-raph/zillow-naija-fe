"use client"

import React, { useEffect, useState } from 'react'
import SideNav from '../components/side-nav/SideNav'
import TopNav from '../components/top-nav/TopNav'
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
              <div className="relative overflow-x-auto mt-4">
                  <table className="w-full text-sm text-left rtl:text-left">
                      <thead className="text-[12px] md:text-[14px] bg-[#F9FAFB] text-[#475467]">
                          <tr>
                              <th scope="col" className="px-6 py-3 font-[600]">Property</th>
                              <th scope="col" className="px-6 py-3 font-[600]">Date</th>
                              {/* <th scope="col" className="px-6 py-3 font-[600]">Saved Date</th>
                              <th scope="col" className="px-6 py-3 font-[600]">Amount</th>
                              <th scope="col" className="px-2 py-3 font-[600]">Status</th> */}
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">CERT-2025-0012</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Granite Tiles</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">23 Apr 2025</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#100,000</td>
                              <td className="py-4 text-[12px] md:text-[16px] flex gap-2 items-center">
                                  <div className="inline-flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                                      <img src="./arrow-up.svg" alt="" className="w-[16px]" />
                                      <p className="text-[14px] text-[#027A48] font-[500]">Paid</p>
                                  </div>
                                  <div className="inline-flex items-center gap-2 bg-[#EFF8FF] rounded-full py-[6px] px-[10px]">
                                      <p className="text-[14px] text-[#175CD3] font-[500]">Certified</p>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">CERT-2025-0012</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Cement Mix</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">15 Apr 2025</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#50,000</td>
                              <td className="py-4 text-[12px] md:text-[16px] flex gap-2 items-center">
                                  <div className="inline-flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                                      <img src="./arrow-up.svg" alt="" className="w-[16px]" />
                                      <p className="text-[14px] text-[#027A48] font-[500]">Paid</p>
                                  </div>
                                  <div className="inline-flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                                      <p className="text-[14px] text-[#B54708] font-[500]">Under review</p>
                                  </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">CERT-2025-0012</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Concrete Mix</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">02 Apr 2025</td>
                              <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#70,000</td>
                              <td className="py-4 text-[12px] md:text-[16px] flex gap-2 items-center">
                                  <div className="inline-flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                                      <img src="./arrow-up.svg" alt="" className="w-[16px]" />
                                      <p className="text-[14px] text-[#027A48] font-[500]">Paid</p>
                                  </div>
                                  <div className="inline-flex items-center gap-2 bg-[#EFF8FF] rounded-full py-[6px] px-[10px]">
                                      <p className="text-[14px] text-[#175CD3] font-[500]">Certified</p>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </section>
        </div>
      </div>
    </div>
  )
}