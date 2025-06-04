"use client";

import Image from "next/image";
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
        className="!pb-0 bg-black rounded-lg"
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <Image
              width={361}
              height={260}
              src={src}
              alt={`slide-${src}`}
              className="w-full h-[260px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
