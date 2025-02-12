"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { BiBed } from 'react-icons/bi'
import { TbCurrencyNaira } from 'react-icons/tb'

interface Property {

    title: string;
    location: string;
    price: string;
    tag: string;
    image: string;
    details: string[];
  }
  
  interface PropertyCardProps {
    property: Property;
  }

  
  export default function RecentlyPostedHomeCards({ property }: PropertyCardProps) {
    
    const router = useRouter()

    return (
    <div onClick={() => router.push(`/properties/${123}`)} className='mb-5 shadow-md rounded-[20px] relative cursor-pointer'>
        <p className='absolute bg-[#212121] text-white md:top-[40px] top-[20px] px-3 py-1 md:text-[14px] text-[12px] rounded-r-[5px]'>{property.tag}</p>
        <img src={property.image} alt="" className='md:h-[250px] h-[150px]  object-cover w-full rounded-t-[20px]'/>
        <div className='p-4'>
            <p className='font-[600] md:text-[18px] text-[14px]'>{property.title}</p>
            <p className='text-[14px] mt-1 mb-3'>{property.location}</p>
            <p className='font-[700] text-[#2E8B57] md:text-[20px] text-[18px] flex items-center'> <TbCurrencyNaira /> {property.price}</p>
            <div className='flex md:items-center flex-col md:flex-row items-left md:gap-4 mt-2 pb-4 text-[13px]'>
                <div className='flex items-center gap-1'>
                    <img src='./images/bed.svg'/>
                    <p className='text-[#000929]'>3 Beds</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src='./images/bathroom.svg'/>
                    <p className='text-[#000929]'>2 Bathrooms</p>
                </div>
                <div className='flex items-center gap-1'>
                    <img src='./images/area.svg'/>
                    <p className='text-[#000929]'>5x7 m²</p>
                </div>
            </div>
        </div>
    </div>
  )
}
