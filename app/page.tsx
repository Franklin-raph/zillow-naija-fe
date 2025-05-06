"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import { BiHomeHeart } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import SuggestedHomeCard from "./components/suggested-home-card/SuggestedHomeCard";
import { IoChatboxEllipsesOutline, IoVideocamOutline } from "react-icons/io5";
import { GoArrowRight, GoTasklist } from "react-icons/go";
import RecentlyPostedHomeCards from "./components/recently-posted-homes-card/RecentlyPostedHomeCards";
import { GrMapLocation } from "react-icons/gr";
import HomeStatsCounter from "./components/home-stats-counter/HomeStatsCounter";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { PiPhoneCall, PiSelectionPlusThin } from "react-icons/pi";
import { LiaHandPointerSolid } from "react-icons/lia";
import TestimonialSwiper from "./components/testimonial-component/TestimonialComponent";
import { RxMinus, RxPlus } from "react-icons/rx";
import { FaRegMessage } from "react-icons/fa6";
import Footer from "./components/footer/Footer";
import { useRouter } from "next/navigation";
import { get } from "./utils/axiosHelpers";


export default function Home() {
  const tabs = ["Buy", "Rent", "Sell"];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  const router = useRouter()

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

  const [aboutSection, setAboutSection] = useState({
    first: true,
    second: true,
    third: true,
  })

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

  const contactMethods = [
    {
      title: 'Call',
      number: '08139362969',
      icon: <PiPhoneCall />
    },
    {
      title: 'Chat',
      number: '08139362969',
      icon: <IoChatboxEllipsesOutline />
    },
    {
      title: 'Video Call',
      number: '08139362969',
      icon: <IoVideocamOutline />
    },
    {
      title: 'Message',
      number: '08139362969',
      icon: <FaRegMessage />
    }
  ];

  async function getListings() {
    const res = await get('/listings/')
    console.log(res)
  }

  useEffect(() => {
    getListings()
  },[])

  return (
    <div>
      <Navbar />
      <section className='flex md:justify-between items-start flex-col md:flex-row pt-[3rem] relative max-w-[1600px] mx-auto md:px-[4rem] px-[1rem] gap-5 bg-[#F5F6F7]'>
        <div className='md:py-14 md:pb-0 md:pt-[6rem] lg:w-[45%] md:w-[70%] w-[98%] relative bottom-[20px]'>
          <p className="lg:text-[50px] md:text-[40px] text-[35px] font-[700] text-left md:leading-[65px] mb-5 leading-[40px]">
            Buy, Lease, rent, or sell your property easily with Zillow9ja
          </p>
          <p className="md:text-[20px] text-[#212121]">
            Discover a range of possibilities for purchasing, selling, or leasing properties that suit your requirements.
          </p>
          <div>
            {tabs.map((tab: string, index) => (
              <button 
                key={index} 
                onClick={() => setSelectedTab(tab)} 
                className={`${selectedTab === tab ? 'border-b-2 border-[#22AC00]' : ''} font-[500] px-2 py-1 mt-5 mr-5 text-[#212121]`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="bg-[#110F11] rounded-[8px] mt-[20px] flex items-center p-[6px]">
            <div className=" rounded-l-[10px] p-3">
              <GrMapLocation className="text-[20px] text-white"/>
            </div>
            <input 
              type="text" 
              className="outline-none px-3 py-[10px] bg-transparent border-b mx-1 w-full text-[#fff]" 
              placeholder="Please enter town, area, state" 
            />
            <button className="bg-white text-[#212121] px-5 py-[10px] rounded-[5px]">Search</button>
          </div>
          <HomeStatsCounter />
        </div>
        
        <div className="md:w-[50%] w-full h-[400px] md:h-[500px] overflow-hidden md:bottom-[-110px] bottom-[-20px] relative">
          <Swiper
            direction={'vertical'}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: 'bullets',
            }}
            loop={true}
            slidesPerView={1}
            className="w-full h-full swiper-vertical"
            style={{
              '--swiper-pagination-color': '#22AC00',
              '--swiper-pagination-bullet-inactive-color': '#999999',
              '--swiper-pagination-bullet-inactive-opacity': '0.5',
              '--swiper-pagination-bullet-size': '8px',
              '--swiper-pagination-bullet-horizontal-gap': '6px'
            } as React.CSSProperties}
          >
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="./images/mockup.svg" 
                  alt="Property" 
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="./images/mockup-2.svg" 
                  alt="Property" 
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] py-[80px]">
        <p className="font-[#212121] font-[700] md:text-[25px] text-[18px]">Suggested Homes For You</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
          {
            // Mock data for home cards
            Array.from({ length: 3 }, (_, index) => (
              <SuggestedHomeCard key={index} />
            ))
          }
        </div>
        <div className="flex justify-center items-center mt-5 cursor-pointer group text-[17px]">
          <p className="px-[5px] py-[2px] text-[#212121]">View all suggested homes</p>
          <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-3" />
        </div>
        <div className="px-6 text-center bg-gradient-to-r from-[#2E8B57] to-[#13544E] h-64 flex flex-col items-center justify-center text-white mt-[60px] rounded-[18px]">
          <p className="font-[600] md:text-[30px] text-[20px]">You&apos;re a step away from your dream home</p>
          <button onClick={() => router.push('/register')} className="py-[10px] px-[20px] bg-[#2E8B57] mt-7 rounded-[8px]">Sign Up</button>
        </div>
      </section>

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] pb-[80px]">
        <p className="font-[#212121] font-[700] md:text-[25px] text-[18px] mb-3">Recently Posted</p>
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
          className="mySwiper md:h-[470px] h-[350px]"
          loop={true}
          style={{
            '--swiper-pagination-color': '#22AC00', // Active bullet color
            '--swiper-pagination-bullet-inactive-color': '#999999', // Inactive bullet color
            '--swiper-pagination-bullet-inactive-opacity': '0.5', // Inactive bullet opacity
            '--swiper-pagination-bullet-size': '8px', // Bullet size
            '--swiper-pagination-bullet-horizontal-gap': '6px', // Space between bullets
            // '--swiper-pagination-top': '353px', // Move pagination down
          } as React.CSSProperties}
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <RecentlyPostedHomeCards property={property}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] pt-[40px] flex items-start flex-col md:flex-row">
        <img src="./images/sold.png" alt="" className="md:w-[50%] h-[500px] object-cover rounded-[10px] w-full" />
        <div className="md:w-[50%] w-full md:ml-[50px] mt-[50px] md:mt-0 grid grid-cols-1 gap-5">
          <div className="border-2 rounded-t-[7px] md:block hidden">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer" onClick={() => setAboutSection({...aboutSection, first: !aboutSection.first})}>
              <div className="flex items-center gap-4">
                <img src="./images/buy.svg" alt="" className="w-[35px]" />
                <p>Buy a home</p>
              </div>
              {
                aboutSection.first ? <HiOutlineChevronDown className="text-[20px]"/> : <HiOutlineChevronUp className="text-[20px]"/>
              }
            </div>
            {
              aboutSection.first && (
                <div className="mt-5 py-[8px] px-5">
                  <p>Discover the perfect home that fits your style and budget. With verified listings and expert support, we make buying a home stress free.</p>
                </div>
              )
            }
          </div>

          <div className="my-4 border-2 rounded-t-[7px] md:hidden block">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer">
              <div className="flex items-center gap-4">
                <img src="./images/sell.svg" alt="" className="w-[35px]" />
                <p>Buy a home</p>
              </div>
            </div>
              <div className="mt-5 py-[8px] px-5">
                <p>Discover the perfect home that fits your style and budget. With verified listings and expert support, we make buying a home stress free.</p>
              </div>
          </div>

          <div className="my-4 border-2 rounded-t-[7px] md:block hidden">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer" onClick={() => setAboutSection({...aboutSection, second: !aboutSection.second})}>
              <div className="flex items-center gap-4">
                <img src="./images/sell.svg" alt="" className="w-[35px]" />
                <p>Sell a home</p>
              </div>
              {
                aboutSection.second ? <HiOutlineChevronDown className="text-[20px]"/> : <HiOutlineChevronUp className="text-[20px]"/>
              }
            </div>
            {
              aboutSection.second && (
                <div className="mt-5 py-[8px] px-5">
                  <p>Selling a home can be a rewarding and exciting experience. With our easy-to-use platform, you can list your home quickly and easily, and we&apos;ll work with you to find the best price and buyer.</p>
                </div>
              )
            }
          </div>

          <div className="border-2 rounded-t-[7px] md:hidden block">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer">
              <div className="flex items-center gap-4">
                <img src="./images/sell.svg" alt="" className="w-[35px]" />
                <p>Sell a home</p>
              </div>
            </div>
              <div className="mt-5 py-[8px] px-5">
                <p>Selling a home can be a rewarding and exciting experience. With our easy-to-use platform, you can list your home quickly and easily, and we&apos;ll work with you to find the best price and buyer.</p>
              </div>
          </div>

          <div className="border-2 rounded-t-[7px] md:block hidden">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer" onClick={() => setAboutSection({...aboutSection, third: !aboutSection.third})}>
              <div className="flex items-center gap-4">
                <img src="./images/rent.svg" alt="" className="w-[35px]" />
                <p>Rent a home</p>
              </div>
              {
                aboutSection.third ? <HiOutlineChevronDown className="text-[20px]"/> : <HiOutlineChevronUp className="text-[20px]"/>
              }
            </div>
            {
              aboutSection.third && (
                <div className="mt-5 py-[8px] px-5">
                  <p>Looking for a place to call home? We make renting simple, hassle-free, and tailored to your needs. We&apos;ve got you covered at Zillow9ja.</p>
                </div>
              )
            }
          </div>

          <div className="my-4 border-2 rounded-t-[7px] md:hidden block">
            <div className="flex items-center justify-between bg-[#EEF1EE] py-[8px] font-[500] px-5 rounded-t-[5px] cursor-pointer">
              <div className="flex items-center gap-4">
                <img src="./images/sell.svg" alt="" className="w-[35px]" />
                <p>Rent a home</p>
              </div>
            </div>
              <div className="mt-5 py-[8px] px-5">
                <p>Looking for a place to call home? We make renting simple, hassle-free, and tailored to your needs. We&apos;ve got you covered at Zillow9ja.</p>
              </div>
          </div>
        </div>
      </section>
      
      <div className="text-center">
        <div className="flex items-center justify-center mt-20">
          <img src="./images/user1.png" alt="" className="w-[70px]"/>
          <img src="./images/user2.png" alt="" className="w-[70px] border-2 rounded-full ml-[-10px]"/>
          <img src="./images/user3.png" alt="" className="w-[70px] border-2 rounded-full ml-[-10px]"/>
        </div>
        <p className="text-[20px] font-[600] mt-3">Trusted by over <span className="text-[#2E8B57]">1,000</span> users all over Nigeria</p>
      </div>

      <section id="why-choose-us-section" className="relative mt-[80px]">
        <div className="absolute bg-black bg-opacity-70 h-full w-full top-0 z-[1]"></div>
        <div className="relative z-[2] text-white md:max-w-[800px] w-[95%] md:px-[4rem] ml-[1rem] md:ml-[2.5rem] pt-[0px]">
          <p className="font-[800] md:text-[40px] text-[20px]">Why Choose Us</p>
          <p className="text-[14px] md:text-[16px]">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="relative z-[2] md:max-w-[1600px] mx-auto w-[95%] md:px-[4rem] pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          <div className="flex items-center gap-5">
            <div className="text-[30px] bg-white p-[10px] text-[#2E8B57] rounded-full">
              <PiSelectionPlusThin />
            </div>
            <div>
              <p className="font-[700] mb-2">Wide Property Selection</p>
              <p className="text-[13px] md:text-[16px]">Explore thousands of listings tailored to your needs, from budget-friendly apartments to luxury homes, all in one place.</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-[30px] bg-white p-[10px] text-[#2E8B57] rounded-full">
              <GoTasklist />
            </div>
            <div>
              <p className="font-[700] mb-2">Verified Listings</p>
              <p className="text-[13px] md:text-[16px]">Enjoy peace of mind with properties verified for accuracy and authenticity, ensuring a safe and secure transaction process.</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-[30px] bg-white p-[10px] text-[#2E8B57] rounded-full">
              <LiaHandPointerSolid />
            </div>
            <div>
              <p className="font-[700] mb-2">User-Friendly Interface</p>
              <p className="text-[13px] md:text-[16px]">Our intuitive platform makes searching, comparing, and contacting property owners or agents seamless and hassle-free.</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-[30px] bg-white p-[10px] text-[#2E8B57] rounded-full">
              <BiHomeHeart />
            </div>
            <div>
              <p className="font-[700] mb-2">Find your future home</p>
              <p className="text-[13px] md:text-[16px]">We help you find a new home by offering a smart real estate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F7] py-[9rem]">
        <div className="text-center mb-8">
          <p className="text-[#212121] font-bold md:text-[30px] text-[20px]">Don&apos;t take our words for it!</p>
          <p className="text-[14px] md:text-[16px]">See what some of our users has to say about Zillow9ja</p>
        </div>
        <TestimonialSwiper />
      </section>

      <section className="bg-[#165751] py-[6rem]">
        <div className="text-center mb-8 text-white">
          <p className="text-[18px] text-center mb-1">Get Started with Zillow9ja</p>
          <p className="md:text-[35px] md:w-[700px] px-5 font-bold mx-auto">Looking for a place to call home or ready  to sell one?  Zillow9ja makes it easy!</p>
          <button className="py-[15px] px-[25px] text-[#2E8B57] bg-[#fff] mt-7 rounded-[8px] font-[500]" onClick={() => router.push('/register')}>Get started for free</button>
        </div>
      </section>

      <section className="mt-[9rem] mb-[5rem]">
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

      <section className="md:max-w-[1600px] w-[95%] mx-auto lg:px-[2rem] flex items-start">
        <div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h3 className="text-[#2E8B57] font-medium mb-2">Contact Us</h3>
              <h2 className="md:text-4xl text-xl font-bold text-navy-900 mb-4 text-[#212121]">Easy to contact us</h2>
              <p className="text-[#212121] mb-8 text-[14px] md:text-[16px]">
                We always ready to help by providing the best services for you. We beleive a good place to live can make your life better.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
                {contactMethods.map((method, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-white rounded-lg shadow-sm border contact cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-[32px] h-[32px] bg-[#165751] rounded-full flex items-center justify-center text-white">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-medium md:text-lg">{method.title}</h3>
                        <p className="text-[#121212] text-[14px] md:text-[16px]">{method.number}</p>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-[#EEF1EE] text-[#121212] rounded-lg hover:bg-blue-100 transition-colors">
                      Call Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="./images/contact.png"
                alt="Modern house"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#13544E] lg:px-[6.2rem] md:px-[2.2rem] px-[0px] pt-[80px] flex items-start justify-between flex-col md:flex-row my-[9rem] text-white">
        <div className="md:w-[50%] mt-[40px] text-center md:text-left mb-[60px]">
          <p  className="font-bold md:text-[48px] text-[28px]">Do more on the app</p>
          <p className="md:text-[22px]">
            Save your searches, buy, rent and sell properties. Get dimensions of properties and more. Available on iOS and Android
          </p>
          <div className="flex items-center md:justify-normal justify-center gap-5 pt-5">
            <img src="./images/play-store.svg" alt="" className="w-[120px]" />
            <img src="./images/apple-store.svg" alt="" className="w-[120px]" />
          </div>
        </div>
        <img src="./images/mockup-2.svg" className="w-[400px] mx-auto" alt="" />
      </section>

      <Footer />
    </div>
  );
}