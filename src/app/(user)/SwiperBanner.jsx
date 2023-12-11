"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import Image from "next/image";
import BTC from "/public/images/BTC.svg"
import BTC2 from "/public/images/BTC2.svg"
import BTC3 from "/public/images/BTC3.svg"
import BTC4 from "/public/images/BTC4.svg"
import BTC5 from "/public/images/BTC5.svg"
const SwiperBanner = () => {
  return (
    <>
      <Swiper
        slidesPerView={"1"}
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        speed={700}
        className="swiperBanner h-60 cursor-pointer w-full md:w-2/4 md:order-last md:h-96">
        <SwiperSlide className="  h-full flex justify-center items-start ">
          <Image width={600} height={300} className="object-cover rounded-[3rem] h-4/5 w-full" src="https://s8.uupload.ir/files/pexels-markus-spiske-3806753_t4oq.jpg" alt="banner"></Image>
        </SwiperSlide>
        <SwiperSlide className="  h-full flex justify-center items-start">
          <Image width={600} height={300}  className="object-cover rounded-[3rem] h-4/5  w-full" src="https://s8.uupload.ir/files/pexels-ivan-babydov-7788009_en9i.jpg" alt="banner"></Image>
        </SwiperSlide>
        <SwiperSlide className="  h-full flex justify-center items-start">
          <Image width={600} height={300}  className="object-cover rounded-[3rem] h-4/5  w-full" src="https://s8.uupload.ir/files/pexels-crypto-crow-1447418_iw7e.jpg" alt="banner"></Image>
        </SwiperSlide>
        <SwiperSlide className="  h-full flex justify-center items-start">
          <Image width={600} height={300}  className="object-cover rounded-[3rem] h-4/5  w-full" src={BTC} alt="banner"></Image>
        </SwiperSlide>
        <SwiperSlide className="  h-full flex justify-center items-start">
          <Image width={600} height={300}  className="object-cover rounded-[3rem] h-4/5  w-full" src={BTC2} alt="banner"></Image>
        </SwiperSlide>
        <SwiperSlide className="  h-full flex justify-center items-start">
          <Image width={600} height={300}  className="object-cover rounded-[3rem] h-4/5  w-full" src={BTC3} alt="banner"></Image>
        </SwiperSlide>
        <SwiperSlide className="  h-full flex justify-center items-start">
          <Image width={600} height={300}  className="object-cover rounded-[3rem] h-4/5  w-full" src={BTC4} alt="banner"></Image>
        </SwiperSlide>
        <SwiperSlide className="  h-full flex justify-center items-start">
          <Image width={600} height={300}  className="object-cover rounded-[3rem] h-4/5  w-full" src={BTC5} alt="banner"></Image>
        </SwiperSlide>
      </Swiper>
      <style>
        {`
        .swiperBanner .swiper-pagination-bullet {
            width: .5rem;
            height: .5rem;
            transition: all .7s;
          }
        .swiperBanner .swiper-pagination-bullet-active {
            width: 1.5rem;
            border-radius: 25px;
          }
        `}
      </style>
    </>
  );
};

export default SwiperBanner;
