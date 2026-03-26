"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

import SkeletonLoader from "@/Components/Skeleton/SkeletonLoader";
import { Tournament } from "@/Modals/allmodals";

type Props = {
  tournaments: Tournament[];
};

export default function PopularTournaments({ tournaments }: Props) {
  const hasData = tournaments && tournaments.length > 0;

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2500, // 2.5 seconds between slides
        disableOnInteraction: false, // continue autoplay after user swipe
      }}
      loop={hasData && tournaments.length > 1} // loop only if more than 1 slide
      speed={600}
      spaceBetween={24}
      breakpoints={{
        0: { slidesPerView: 1.5 },
        640: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3 },
      }}
      onSwiper={(swiper) => swiper.autoplay?.start()} // TypeScript-safe autoplay start
    >
      {hasData
        ? tournaments.map((t) => (
            <SwiperSlide key={t.slug}>
              <Link href={`/tournaments/${t.slug}`} passHref>
                <div
                  className="bg-white rounded-lg shadow overflow-hidden 
                             w-full min-h-65 sm:min-h-80 lg:min-h-100 
                             cursor-pointer hover:shadow-lg transition"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-40 sm:h-56 lg:h-64 object-cover"
                  />
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="text-sm sm:text-lg lg:text-xl font-semibold truncate">
                      {t.name}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-500 truncate">
                      {t.location}
                    </p>
                    <p className="hidden sm:block text-xs sm:text-sm lg:text-base text-gray-400">
                      {t.date}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))
        : // Show skeletons while loading
          Array(3)
            .fill(null)
            .map((_, i) => (
              <SwiperSlide key={i}>
                <SkeletonLoader type="card" />
              </SwiperSlide>
            ))}
    </Swiper>
  );
}