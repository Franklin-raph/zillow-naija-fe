import React from 'react'
import Navbar from '../../components/nav-bar/Navbar'
import Footer from '../../components/footer/Footer'
import { BiFilter, BiSearch } from 'react-icons/bi'
import FilterHomeCards from '../../components/filter-home-cards/FilterHomeCards';
import { CiLocationOn } from 'react-icons/ci';

export default function Page() {

    const properties = [
        {
          title: 'Portable 4 Bedroom Bungalow',
          location: 'Adeniran Ogunsanya Surulere, Lagos',
          price: '3,500,000',
          tag: '5 mins Ago',
          image: "../images/suggested-image.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Ekwulobia-Umunze Road Awka, Anambra',
          price: '3,500,000',
          tag: '10 mins Ago',
          image: "../images/suggested-image-2.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Independence Layout Nza, Enugu',
          price: '3,500,000',
          tag: '8 mins Ago',
          image: "../images/suggested-image-3.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        },
        {
          title: 'Luxury 4 Bedroom Duplex',
          location: 'Ekwulobia-Umunze Road Awka, Anambra',
          price: '3,500,000',
          tag: '5 mins Ago',
          image: "../images/suggested-image.png",
          details: ['38eds', '28abrooms', '5z7n²'],
        }
      ];

  return (
    <div>
        <Navbar />
        <div className="">
            <div className='bg-[#212121] w-full h-[150px]'></div>
            <div className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] py-[20px]">
                <div className='flex items-center gap-3 md:mt-[-95px] mt-[-75px]'>
                    <img src="../images/user2.png" alt="" className='md:w-[100px] w-[75px]' />
                    <div className='pb-5'>
                        <p className='text-white font-[500] md:text-[25px]'>Chinasa Okafor Jessica</p>
                        <div className='text-white flex items-center gap-2'>
                            <CiLocationOn />
                            <p className='text-[15px]'>Nnewi, Anambra State</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[3rem]'>
                    <p className='font-[600] md:text-[28px] text-[20px] mb-2'>About Chinasa Okafor</p>
                    <p className='text-[14px] md:text-[16px]'>
                        Chinasa Okafor is a dedicated and results-driven real estate agent with a passion for connecting clients to their dream properties in Anambra State and beyond. With years of experience in the real estate industry, Chinasa has built a reputation for integrity, professionalism, and exceptional customer service. Specializing in residential and commercial properties, Chinasa takes pride in helping clients navigate the complexities of property transactions with ease. Whether you're buying your first home, selling a property, or looking for lucrative investment opportunities, Chinasa&apos;s expertise and local market knowledge ensure you make informed decisions. Chinasa is committed to understanding each client&apos;s unique needs, delivering personalized solutions, and building lasting relationships based on trust and satisfaction. Outside of real estate, Chinasa enjoys volunteering in the community and exploring innovative ways to make property ownership accessible to all.
                    </p>
                    <div className='pt-[3rem] mt-[3rem] border-t'>
                        <p className='font-[600] md:text-[28px] text-[20px] mb-4'>Chinasa Newest Listings</p>
                        <div className='flex justify-center items-start pb-8 lg:flex-row flex-col-reverse'>
                            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 content-center gap-3'>
                                {properties.map((property, index) => (
                                    <FilterHomeCards key={index} property={property}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
