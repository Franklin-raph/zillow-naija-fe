import React from 'react'
import Navbar from '../components/nav-bar/Navbar'
import Footer from '../components/footer/Footer'
import { BiFilter, BiSearch } from 'react-icons/bi'
import FilterHomeCards from '../components/filter-home-cards/FilterHomeCards';

export default function Page() {

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
        <Navbar />
        <div className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] pt-[40px]">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 border py-2 px-2 rounded-full w-[400px]'>
                    <BiSearch />
                    <input type="text" className='outline-none w-full'/>
                </div>
                <div className='flex items-center gap-1 cursor-pointer text-gray-600'>
                    <BiFilter className='text-[20px]'/>
                    <p>Filter</p>
                </div>
            </div>
        </div>
        <div className='flex justify-between items-start py-8 px-4 h-[150vh] overflow-y-scroll'>
            <img src="./images/map_view.png" className='w-[55%]' alt="" />
            <div className='grid grid-cols-2 gap-3'>
                {properties.map((property, index) => (
                    <FilterHomeCards key={index} property={property}/>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}
