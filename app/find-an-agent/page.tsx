"use client"

import React, { useEffect, useState } from 'react'
import Navbar from '../components/nav-bar/Navbar'
import Footer from '../components/footer/Footer'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { BiSearchAlt } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs'
import { RxMinus, RxPlus } from 'react-icons/rx'
import AgentCardSkeleton from '../components/agent-card-skeleton/AgentCardSkeleton';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import TopRatedAgents from '../components/top-rated-agents/TopRatedAgents'
import { useRouter } from 'next/navigation'
import { get } from '../utils/axiosHelpers'

type Agent = {
  id: string;
  image?: string;
  full_name: string;
  profile_image?: {
    media: string;
  };
  location: string;
  email: string;
  created_at: string;
  average_rating?: number;
}

export default function Page() {

  const topRatedAgents = [
    {
      image: "./images/agent-2.png",
      name: "Chiamaka Sandra Okoro",
    },
    {
      image: "./images/agent-3.png",
      name: "Abdulkareem Bello Idris",
    },
    {
      image: "./images/agent-1.png",
      name: "Abdulkareem Bello Idris",
    },
    {
      image: "./images/agent-2.png",
      name: "Chiamaka Sandra Okoro",
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqItems = [
    {
      question: 'Is there a fee for using Zillow9ja?',
      answer: 'Zillow9ja is free to use for property seekers. There may be fees associated with listing a property, depending on the type of listing or services you require.',
    },
    {
      question: 'What is Next.js?',
      answer: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.',
    },
    {
      question: 'What is Tailwind CSS?',
      answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    },
    {
      question: 'How do I use TypeScript with Next.js?',
      answer: 'You can create a Next.js project with TypeScript by using the `--typescript` flag when setting up your project.',
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const searchParamsArray = [
    {
      label: "Name",
      value: "name"
    },
    {
      label: "Location",
      value: "location"
    },
  ]

  const [searchParams, setSearchParams] = useState<string | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);

  const router = useRouter()

  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getAgents() {
      setIsLoading(true);
      try {
          const res = await get('/ratings/top-rated-agents/retrieve');
          console.log(res);
          
          setAgents(res.results || []);
      } catch (err) {
          console.error('Error fetching agents:', err);
          setAgents([]); // Set empty array on error to avoid undefined issues
      } finally {
          setIsLoading(false);
      }
  }

  useEffect(() => {
    setHasHydrated(true);
    getAgents();
  }, []);

  // Don't render until hydrated to prevent hydration mismatch
  if (!hasHydrated) {
    return null;
  }

  return (
    <div>
        <Navbar />
        <div className='mb-5 shadow-md rounded-[20px] relative h-[80vh]'>
            <div className='absolute bg-[#212121a8] text-white h-full w-full px-[6px] md:px-3 py-1 md:text-[14px] text-[12px] rounded-r-[5px] flex flex-col items-center justify-center'>
                <div className='text-center md:w-[70%] mx-auto'>
                    <p className='lg:text-[65px] md:text-[48px] text-[34px] font-bold md:leading-[75px] md:mb-4 mb-2'>
                      Find Your Perfect Agent.
                    </p>
                    <p className='md:text-[20px] text-[16px] mb-1'>
                      Connect with trusted professionals to sell or buy property
                    </p>
                </div>
                <div className='flex items-center md:gap-8 gap-2 bg-white text-[#121212] md:py-4 py-3 md:px-5 px-2 lg:w-[50rem] w-[100%] rounded-full mt-5'>
                  <div className="flex md:gap-5 gap-2">
                    {
                      searchParamsArray.map((param, index) => (
                        <button key={index} onClick={() => setSearchParams(param.value)} className={`md:text-[14px] font-[500] ${searchParams === param.value? 'border-b border-[#2E8B57]' : 'text-[#121212]'}`}>
                          {param.label}
                        </button>
                      ))
                    }
                  </div>
                  <div className='flex items-center border w-full px-3 rounded-full'>
                    <CiLocationOn />
                    <input type="text" placeholder={`${searchParams === 'location' ? 'Enter location to search for agent' : 'Enter name of agent you wish to search for'}`} className='bg-transparent outline-none w-full py-3 px-4'/>
                    <BiSearchAlt />
                  </div>
                </div>
            </div>
            <img src="./images/sold.png" alt="" className='w-full h-full object-cover'/>
        </div>
        
        <div className='mt-[7rem] md:max-w-[1600px] w-[95%] mx-auto lg:px-[2rem]'>
          <div className='w-full'>
            <p className='text-center font-bold md:text-[30px] text-[20px] text-[#212121]'>Real Estate Agents For You</p>
            <p className='text-center md:text-[16px] text-[14px] text-[#212121]'>Find the Perfect Agent For Your Property</p>

            {/* Loading state */}
            {isLoading && (
              <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7 mt-[50px]'>
                {[1,2,3,4].map((_, index) => (
                  <AgentCardSkeleton key={index} />
                ))}
              </div>
            )}

            {/* No agents found state */}
            {!isLoading && agents.length === 0 && (
              <div className='text-center mt-[50px]'>
                <p className='text-[#777575] text-[16px] md:text-[18px]'>No agents found</p>
              </div>
            )}

            {/* Agents grid - only show when not loading and has agents */}
            {!isLoading && agents.length > 0 && (
              <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7 mt-[50px]'>
                {agents.map((agent, index) => (
                  <div key={agent.id || index} className='relative'>
                    <img 
                      src={agent?.profile_image?.media || '/images/default-avatar.png'} 
                      className='w-[100px] h-[100px] rounded-full mb-[-45px] ml-2 object-cover' 
                      alt={`${agent.full_name}'s profile`} 
                    />
                    <div className='shadow-lg rounded-lg px-4 pb-4 pt-[3rem] border'>
                      <p className='text-[#212121] text-[20px] font-[500]'>{agent.full_name}</p>
                      <p className='text-[#212121] text-[14px] flex items-center gap-2'> 
                        <CiLocationOn /> {agent.location}
                      </p>
                      <p className='text-[#212121] text-[14px] flex items-center gap-2'> 
                        <CiMail /> {agent.email}
                      </p>
                      <p className='text-[#777575] text-[12px] mt-3'>
                        Member since {new Date(agent.created_at).toLocaleDateString()}
                      </p>
                      <div className='flex items-center justify-between text-[12px] mt-3'>
                        <div className='flex items-center gap-2'>
                          <p>{agent.average_rating || 'N/A'}</p>
                          <BsStarFill className='text-[#F8BD00]'/>
                        </div>
                        <button 
                          className='text-[#2E8B57] hover:underline' 
                          onClick={() => router.push(`/agent/${agent.id}`)}
                        >
                          View managed properties
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Show "View more agents" button only when there are agents */}
            {!isLoading && agents.length > 0 && (
              <div className='flex justify-center mt-[3rem]'>
                <button className='text-[#2E8B57] border border-[#2E8B57] text-[14px] px-10 py-2 rounded-md hover:bg-[#2E8B57] hover:text-white transition-colors'>
                  View more agents
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='mt-[7rem] md:max-w-[1200px] bg-[#121212] text-white w-[95%] mx-auto md:h-[60vh] flex items-center flex-col-reverse md:flex-row rounded-[30px]'>
          <div className='md:px-[4rem] px-[1.5rem] py-[4rem] md:py-0'>
            <p className='font-bold md:text-[30px] text-[20px] mb-3'>Connecting You with Experts to Handle Your Property</p>
            <p className='text-[14px] md:text-[16px]'>Got a property to sell or rent? We have the perfect agent ready to help you every step of the way!</p>
          </div>
          <img src="./images/find-agent-1.png" alt="" className='w-full h-full object-cover rounded-r-[30px]'/>
        </div>

        <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] pt-[100px]">
          <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">Our Top Rated Agents</p>
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
            className="mySwiper md:h-[350px] h-[265px]"
            loop={true}
            style={{
              '--swiper-pagination-color': '#22AC00',
              '--swiper-pagination-bullet-inactive-color': '#999999',
              '--swiper-pagination-bullet-inactive-opacity': '0.5',
              '--swiper-pagination-bullet-size': '8px',
              '--swiper-pagination-bullet-horizontal-gap': '6px',
            } as React.CSSProperties}
          >
          {topRatedAgents.map((agent, index) => (
            <SwiperSlide key={index}>
              <TopRatedAgents agent={agent}/>
            </SwiperSlide>
          ))}
        </Swiper>
        </section>

        <section className="mt-[7rem] mb-[5rem]">
          <div className="text-center mb-5">
            <p className="text-[#212121] font-bold md:text-[30px] text-[20px]">Frequently Asked Questions</p>
            <p className="text-[#777575] text-[14px] md:text-[16px]">Got Questions? We&apos;ve Got Answers!</p>
          </div>
          <div className="max-w-3xl mx-auto p-4">
            {faqItems.map((item, index) => (
              <div key={index} className="mb-4 border-b border-gray-200">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full text-left py-2 flex justify-between items-center focus:outline-none"
                >
                  <span className="text-md font-medium">{item.question}</span>
                  <span className="transform transition-transform duration-200">
                    {activeIndex === index ? <RxMinus /> : <RxPlus />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="py-2 text-[#212121] text-[14px] md:text-[16px]">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className='mt-[7rem] md:max-w-[1200px] bg-[#13544E] text-white w-[95%] mx-auto md:h-[60vh] flex flex-col-reverse md:flex-row-reverse items-center rounded-[30px]'>
          <div className='md:px-[4rem] px-[1.5rem] py-[4rem] md:py-0'>
            <p className='font-bold md:text-[30px] text-[20px] mb-3'>Ready to make your next move?</p>
            <p className='text-[14px] md:text-[16px]'>Find the perfect agent to turn your property dreams into reality - with expert guidance, every step of the way!</p>
            <button className='bg-white text-[#13544E] text-[14px] md:text-[16px] py-[6px] mt-3 px-4 rounded-[6px] hover:bg-gray-100 transition-colors'>
              Search for agents
            </button>
          </div>
          <img src="./images/find-agent-2.png" alt="" className='md:w-[52%] h-full object-cover rounded-l-[30px]'/>
        </div>

        <Footer />
    </div>
  )
}