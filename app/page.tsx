"use client"

import { useEffect, useState } from "react";
import Navbar from "./components/nav-bar/Navbar";
import { BiChevronDown, BiHomeHeart, BiKey, BiSearch } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import SuggestedHomeCard from "./components/suggested-home-card/SuggestedHomeCard";
import { IoArrowForwardOutline, IoChatboxEllipsesOutline, IoLocationOutline, IoVideocamOutline } from "react-icons/io5";
import { GoArrowRight, GoTasklist } from "react-icons/go";
import RecentlyPostedHomeCards from "./components/recently-posted-homes-card/RecentlyPostedHomeCards";
import { CiLocationOn } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { FaAward, FaPlus, FaRegSmile } from "react-icons/fa";
import { RiKey2Line } from "react-icons/ri";
import HomeStatsCounter from "./components/home-stats-counter/HomeStatsCounter";
import { HiChevronDown, HiChevronUp, HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import { PiPhoneCall, PiSelectionPlusThin } from "react-icons/pi";
import { LiaHandPointerSolid } from "react-icons/lia";
import TestimonialSwiper from "./components/testimonial-component/TestimonialComponent";
import { RxMinus, RxPlus } from "react-icons/rx";
import Image from "next/image";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";


export default function Home() {
  const tabs = ["Buy", "Rent", "Sell"];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const properties = [
    {
      title: 'Portable 4 Bedroom Bungalow',
      location: 'Adeniran Ogunsanya Surulere, Lagos',
      price: '#3,500,000',
      tag: '5 mins Ago',
      image: "./images/suggested-image.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '#3,500,000',
      tag: '10 mins Ago',
      image: "./images/suggested-image-2.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '#3,500,000',
      tag: '8 mins Ago',
      image: "./images/suggested-image-3.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '#3,500,000',
      tag: '5 mins Ago',
      image: "./images/suggested-image.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '#3,500,000',
      tag: '25 mins Ago',
      image: "./images/suggested-image-2.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Ekwulobia-Umunze Road Awka, Anambra',
      price: '#3,500,000',
      tag: 'Yesterday',
      image: "./images/suggested-image-3.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
    {
      title: 'Luxury 4 Bedroom Duplex',
      location: 'Independence Layout Nza, Enugu',
      price: '#3,500,000',
      tag: 'Last week',
      image: "./images/suggested-image.png",
      details: ['38eds', '28abrooms', '5z7n²'],
    },
  ];

  const testimonials = [
    {
      text: "I recently relocated to Port Harcourt and had no idea where to start. Their site helped me narrow down options based on my budget and preferences.",
      author: "Chioma E., Port Harcourt",
    },
    {
      text: "Zillow9ja made my house hunt stress-free. I was honestly tired of visiting places that didn’t match the pictures, but what I saw online was exactly what I got. The agent I worked with was professional and patient.",
      author: "Amaka I., Lagos",
    },
    {
      text: "I listed my apartment on Zillow9ja, and within a week, I had serious tenants reaching out. What stood out for me was how smooth and straightforward the entire process was. It saved me so much time.",
      author: "Bayo A., Abuja",
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <div>
      <Navbar />
      <section className='flex md:justify-between items-start flex-col md:flex-row pt-[3rem] relative max-w-[1600px] mx-auto px-[4rem] gap-5 bg-[#F5F6F7]'>
        <div className='py-14 md:pb-0 md:pt-[6rem] lg:w-[45%] md:w-[70%] w-[98%] relative bottom-[20px]'>
          <p className="lg:text-[50px] md:text-[40px] text-[30px] font-[700] text-center md:text-left leading-[65px] mb-5">
            Buy, Lease, rent, or sell your property easily with Zillow9ja
          </p>
          <p className="text-[20px] text-[#212121]">
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
        
        <div className="md:w-[50%] w-full h-[400px] md:h-[500px] overflow-hidden bottom-[-110px] relative">
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
        <div className="text-center bg-gradient-to-r from-[#2E8B57] to-[#13544E] h-64 flex flex-col items-center justify-center text-white mt-[60px] rounded-[18px]">
          <p className="font-[600] md:text-[30px] text-[20px]">You're a step away from your dream home</p>
          <button className="py-[10px] px-[20px] bg-[#2E8B57] mt-7 rounded-[8px]">Sign Up</button>
        </div>
      </section>

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] py-[80px]">
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
          className="mySwiper md:h-[470px] h-[420px]"
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

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] px-[0px] pt-[80px] flex items-start">
        <img src="./images/sold.png" alt="" className="w-[50%] h-[500px] object-cover rounded-[10px]" />
        <div className="w-[50%] ml-[50px] grid grid-cols-1 gap-5">
          <div className="border-2 rounded-t-[7px]">
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
          <div className="my-4 border-2 rounded-t-[7px]">
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
                  <p>Selling a home can be a rewarding and exciting experience. With our easy-to-use platform, you can list your home quickly and easily, and we'll work with you to find the best price and buyer.</p>
                </div>
              )
            }
          </div>
          <div className="border-2 rounded-t-[7px]">
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
                  <p>Looking for a place to call home? We make renting simple, hassle-free, and tailored to your needs. We've got you covered at Zillow9ja.</p>
                </div>
              )
            }
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
        <div className="relative z-[2] text-white md:max-w-[800px] w-[95%] md:px-[4rem] ml-[2.5rem] pt-[0px]">
          <p className="font-[800] text-[40px]">Why Choose Us</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="relative z-[2] md:max-w-[1600px] mx-auto w-[95%] md:px-[4rem] pt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          <div className="flex items-center gap-5">
            <div className="text-[30px] bg-white p-[10px] text-[#2E8B57] rounded-full">
              <PiSelectionPlusThin />
            </div>
            <div>
              <p className="font-[700] mb-2">Wide Property Selection</p>
              <p>Explore thousands of listings tailored to your needs, from budget-friendly apartments to luxury homes, all in one place.</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-[30px] bg-white p-[10px] text-[#2E8B57] rounded-full">
              <GoTasklist />
            </div>
            <div>
              <p className="font-[700] mb-2">Verified Listings</p>
              <p>Enjoy peace of mind with properties verified for accuracy and authenticity, ensuring a safe and secure transaction process.</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-[30px] bg-white p-[10px] text-[#2E8B57] rounded-full">
              <LiaHandPointerSolid />
            </div>
            <div>
              <p className="font-[700] mb-2">User-Friendly Interface</p>
              <p>Our intuitive platform makes searching, comparing, and contacting property owners or agents seamless and hassle-free.</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-[30px] bg-white p-[10px] text-[#2E8B57] rounded-full">
              <BiHomeHeart />
            </div>
            <div>
              <p className="font-[700] mb-2">Find your future home</p>
              <p>We help you find a new home by offering a smart real estate.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F6F7] py-[9rem]">
        <div className="text-center mb-8">
          <p className="text-[#212121] font-bold text-[30px]">Don't take our words for it!</p>
          <p>See what some of our users has to say about Zillow9ja</p>
        </div>
        <TestimonialSwiper />
      </section>

      <section className="bg-[#165751] py-[6rem]">
        <div className="text-center mb-8 text-white">
          <p className="text-[18px] text-center mb-1">Get Started with Zillow9ja</p>
          <p className="text-[35px] w-[700px] font-bold mx-auto">Looking for a place to call home or ready  to sell one?  Zillow9ja makes it easy!</p>
          <button className="py-[15px] px-[25px] text-[#2E8B57] bg-[#fff] mt-7 rounded-[8px] font-[500]">Get started for free</button>
        </div>
      </section>

      <section className="my-[9rem]">
        <div className="text-center mb-5">
          <p className="text-[#212121] font-bold text-[30px]">Frequently Asked Questions</p>
          <p className="text-[#777575]">Got Questions? We've Got Answers!</p>
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
                <p className="py-2 text-[#212121]">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="md:max-w-[1600px] w-[95%] mx-auto md:px-[4rem] flex items-start">
        <div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h3 className="text-[#2E8B57] font-medium mb-2">Contact Us</h3>
              <h2 className="text-4xl font-bold text-navy-900 mb-4 text-[#212121]">Easy to contact us</h2>
              <p className="text-[#212121] mb-8">
                We always ready to help by providing the best services for you. We beleive a good place to live can make your life better.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <h3 className="font-medium text-lg">{method.title}</h3>
                        <p className="text-[#121212]">{method.number}</p>
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

      <section className="bg-[#13544E] md:px-[6.2rem] px-[0px] pt-[80px] flex items-start justify-between my-[9rem] text-white">
        <div className="w-[50%] mt-[60px]">
          <p  className="font-bold text-[48px]">Do more on the app</p>
          <p className="text-[22px]">
            Save your searches, buy, rent and sell properties. Get dimensions of properties and more. Available on iOS and Android
          </p>
          <div className="flex items-center gap-5 pt-5">
            <img src="./images/play-store.svg" alt="" className="w-[120px]" />
            <img src="./images/apple-store.svg" alt="" className="w-[120px]" />
          </div>
        </div>
        <img src="./images/mockup-2.svg" className="w-[400px]" alt="" />
      </section>

      <footer className="text-[#777575]">
        <div className="md:max-w-[2000px] w-[95%] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Vision Section */}
            <div className="flex flex-col gap-2 w-[400px]">
              <div className="flex items-center gap-1">
                <h1 className="text-3xl font-bold text-[#22AC00]">Zillow9ja</h1>
              </div>
              <p className="text-[#777575] text-[13px]">
               Zillow9ja is Nigeria's trusted platform for buying, selling, and renting apartments. We connect people to their perfect homes with ease, offering a wide range of verified listings, simple search tools, and reliable support. Whether you're looking for a place to live or a buyer for your property, Zillow9ja makes the process smooth and stress-free.
              </p>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[#777575] text-[13px]">Subscribe for our weekly news letter</h2>
              <form onSubmit={handleSubmit} className="flex text-[13px]">
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="px-4 py-2 rounded-l bg-white text-black w-[20rem] border focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#13544E] text-white px-4 py-2 rounded-r flex items-center gap-2 hover:bg-[#154742] transition-colors"
                >
                  Submit
                  <IoIosSend />
                </button>
              </form>
            </div>

            {/* Location and Navigation */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-col items-end gap-2 text-[#777575]">
                <IoLocationOutline className="text-[20px]" />
                <p className=" text-[13px]">145 New York, FL 5467, USA</p>
              </div>
              <nav>
                <ul className="flex gap-6 text-[#777575] text-[13px]">
                  <li><a href="#" className="hover:text-[#121212] transition-colors">Buy</a></li>
                  <li><a href="#" className="hover:text-[#121212] transition-colors">Sell</a></li>
                  <li><a href="#" className="hover:text-[#121212] transition-colors">Find an agent</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <p className="bg-[#121212] text-white py-5 text-center text-[14px] mt-5">&copy; All Right Reserved {new Date().getFullYear()} </p>
    </div>
  );
}