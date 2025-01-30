import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  location: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Chioma E.",
    location: "Port Harcourt",
    content: "I recently relocated to Port Harcourt and had no idea where to start. Their site helped me narrow down options based on my budget and preferences."
  },
  {
    name: "Amaka I.",
    location: "Lagos",
    content: "Zillow9ja made my house hunt stress-free. I was honestly tired of visiting places that didn't match the pictures, but with Zillow9ja, what I saw online was exactly what I got. The agent I worked with was professional and patient."
  },
  {
    name: "Bayo A.",
    location: "Abuja",
    content: "I listed my apartment on Zillow9ja, and within a week, I had serious tenants reaching out. What stood out for me was how smooth and straightforward the entire process was. It saved me so much time. I'm definitely using them again for my other properties."
  },
  {
    name: "Amaka I.",
    location: "Lagos",
    content: "Zillow9ja made my house hunt stress-free. I was honestly tired of visiting places that didn't match the pictures, but with Zillow9ja, what I saw online was exactly what I got. The agent I worked with was professional and patient."
  },
  {
    name: "Bayo A.",
    location: "Abuja",
    content: "I listed my apartment on Zillow9ja, and within a week, I had serious tenants reaching out. What stood out for me was how smooth and straightforward the entire process was. It saved me so much time. I'm definitely using them again for my other properties."
  }
];

const TestimonialSwiper = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active bg-green-700',
        }}
        className="testimonial-swiper py-12 md:h-[370px] h-[420px]"
        style={{
            '--swiper-pagination-color': '#13544E', // Active bullet color
            '--swiper-pagination-bullet-inactive-color': '#999999', // Inactive bullet color
            '--swiper-pagination-bullet-inactive-opacity': '0.5', // Inactive bullet opacity
            '--swiper-pagination-bullet-size': '8px', // Bullet size
            '--swiper-pagination-bullet-horizontal-gap': '6px', // Space between bullets
            // '--swiper-pagination-top': '353px', // Move pagination down
          } as React.CSSProperties}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div 
                className={`
                  rounded-2xl p-6 transition-all duration-300
                  ${isActive 
                    ? 'bg-[#13544E] text-white scale-110 shadow-xl h-[290px] mt-5' 
                    : 'bg-white text-gray-800 scale-90 mt-8'
                  }
                `}
              >
                <p className="text-sm sm:text-base mb-4">
                  {testimonial.content}
                </p>
                <div className="mt-auto">
                  <p className="font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm opacity-80">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;