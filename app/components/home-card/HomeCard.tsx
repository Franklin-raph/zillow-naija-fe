import React from 'react'
import { BiBed } from 'react-icons/bi'
import { TbCurrencyNaira } from 'react-icons/tb'

export default function HomeCard() {
  return (
    <div className='mb-5 shadow-md rounded-[20px]'>
        <img src="./images/suggested-image-3.png" alt="" className='h-[250px] object-cover w-full rounded-t-[20px]'/>
        <div className='p-4'>
            <p className='font-[600] text-[18px]'>Luxury 4 bedroom apartment</p>
            <p className='text-[14px] mt-1 mb-3'>Gwarimpa, Abuja, Abuja FCT</p>
            <p className='font-[700] text-[#2E8B57] text-[20px] flex items-center'> <TbCurrencyNaira /> 2,500,000</p>
            <div className='flex items-center gap-4 mt-2 pb-4'>
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
