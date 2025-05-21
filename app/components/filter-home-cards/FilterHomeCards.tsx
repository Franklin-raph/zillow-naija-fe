"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'

// Define a type for your property listings
interface HousePost {
  id?: string;
  name?: string;
  address?: string;
  number_of_bathrooms?: string;
  sqr_feet?: string;
  number_of_bedrooms?: string;
  price?: string;
  created_at: string;
  cover_image?: {
    media: string;
  };
  // Add other properties as needed
}

export default function FilterHomeCards({ listing }: { listing: HousePost }) {

  const router = useRouter() 

  // Handle missing data with default values
  const title = listing?.name || 'Luxury Property';
  const address = listing?.address || 'Location information unavailable';
  const rawPrice = listing?.price || '0';
  
  // Format price with commas
  const formatPrice = (price: string) => {
    // Remove any existing commas or non-numeric characters except decimal points
    const cleanPrice = price.replace(/[^\d.]/g, '');
    
    // Handle decimal points correctly
    if (cleanPrice.includes('.')) {
      const parts = cleanPrice.split('.');
      // Format the integer part with commas
      return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + parts[1];
    }
    
    // Format integer with commas
    return cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const formattedPrice = formatPrice(rawPrice);
  
  // Use cover_image if available, otherwise fallback to default image
  const imageUrl = listing?.cover_image?.media 
    ? listing.cover_image.media 
    : "./images/suggested-image-3.png";

  return (
    <div className='mb-5 shadow-md rounded-[20px] relative cursor-pointer' onClick={() => router.push(`/properties/${listing?.id}`)}>
      <p className='absolute bg-[#2E8B57] text-white md:top-[40px] top-[20px] px-3 py-1 md:text-[14px] text-[12px] rounded-r-[5px]'>For Sale</p>
      <img 
        src={imageUrl} 
        alt={title} 
        className='md:h-[250px] h-[150px] object-cover w-full rounded-t-[20px]'
      />
      <div className='py-4 md:px-4 px-2'>
        <p className='font-[600] md:text-[18px] text-[12px]'>{title}</p>
        <p className='text-[12px] sm:text-[14px] mt-1 mb-3'>{address}</p>
        <p className='font-[700] text-[#2E8B57] md:text-[20px] text-[15px] flex items-center'>
          <TbCurrencyNaira /> {formattedPrice}
        </p>
        <div className='sm:flex hidden items-left md:gap-4 mt-2 pb-4 text-[13px]'>
          <div className='flex items-center gap-1'>
            <img src='./images/bed.svg' alt="Beds"/>
            <p className='text-[#000929]'>
              {listing?.number_of_bedrooms || 3} Beds
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <img src='./images/bathroom.svg' alt="Bathrooms"/>
            <p className='text-[#000929]'>
              {listing?.number_of_bathrooms || 2} Bathrooms
            </p>
          </div>
          <div className='flex items-center gap-1'>
            <img src='./images/area.svg' alt="Area"/>
            <p className='text-[#000929]'>
              {listing?.sqr_feet || '5x7'} m²
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}