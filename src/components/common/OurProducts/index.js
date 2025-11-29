"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide,useSwiper } from "swiper/react";

import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

import SectionTitle from "@/components/common/SectionTitle";

import next from "@/assets/common/nexticon.webp";
import previousicon from "@/assets/common/previousicon.webp";

import CustomerList from "@/data/common/CustomerList";
import { useEffect, useRef, useState } from "react";

const OurProducts = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(10);

  const updateItemsPerSlide = () => {
      const isMediumScreen = window.innerWidth >= 768 && window.innerWidth < 1024;
      setItemsPerSlide(isMediumScreen ? 8 : 10);
  };

  useEffect(() => {
      updateItemsPerSlide();
      window.addEventListener('resize', updateItemsPerSlide);
      return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            window.swiper.autoplay.start();
        } else {
          window.swiper.autoplay.stop();
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  

  return (
    <div ref={sectionRef} className="mt-[60px] md:mt-[100px] lg:mt-[120px]">
      <div className="mb-[60px]">
        <SectionTitle title="Our Customers"></SectionTitle>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: true,
        }}
        navigation={{
          nextEl: ".next-slide-button",
          prevEl: ".prev-slide-button",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation,Autoplay] }
        onSwiper={(swiper) => (window.swiper = swiper)}
      >
        {CustomerList.map((customer, index) => {
          if (index % 5 == 0) {
            return (
              <SwiperSlide
                key={index}
                onMouseEnter={() => window.swiper.autoplay.stop()}
                onMouseLeave={() => window.swiper.autoplay.start()}
              >
                <div key={index} className="mx-0 md:mx-0 lg:mx-[3%]">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-[12px] md:grid-[15px]">
                    {CustomerList.map((customer, i) => {
                    // const isMediumScreen = window.innerWidth >= 768 && window.innerWidth < 1024; // Adjust the range for md screen size
                    // const arraySlice = isMediumScreen ? 6 : 10;


                   if (i >= index && i < index + itemsPerSlide)
                        return (
                          <div key={i} className="w-full h-[150px] p-[45px] md:p-[30px] lg:p-[30px] xl:p-[45px] bg-[#F4F5FA] hover:scale-105 rounded-[6px] flex justify-center items-center transition-all">
                            <Image
                              src={customer?.url}
                              alt="Picture of the author"
                            />
                          </div>
                        );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
        <button className="swiper-button-next next-slide-button   ">
          <Image src={next} alt="Picture of the author" className="hidden md:hidden lg:block" />
        </button>
        <button className="swiper-button-prev prev-slide-button">
          <Image src={previousicon} alt="Picture of the author" className="hidden md:hidden lg:block" />
        </button>
      </Swiper>
    </div>
  );
};

export default OurProducts;