"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="!pb-0"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[260px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
