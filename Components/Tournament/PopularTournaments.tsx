"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

import SkeletonLoader from "@/Components/Skeleton/SkeletonLoader";
import { Tournament } from "@/Modals/allmodals";

type Props = {
  tournaments: Tournament[];
};

export default function PopularTournaments({ tournaments }: Props) {
  // ✅ No artificial mounted delay — just check if data exists
  const hasData = tournaments && tournaments.length > 0;

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={false} // ✅ autoplay disabled
      loop={hasData && tournaments.length > 3} // ✅ loop only if enough slides
      speed={600}
      spaceBetween={24}
      breakpoints={{
        0: { slidesPerView: 1.5 },
        640: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3 },
      }}
    >
      {hasData
        ? tournaments.map((t) => (
            <SwiperSlide key={t.slug}>
              <Link href={`/tournaments/${t.slug}`} passHref>
                <div
                  className="bg-white rounded-lg shadow overflow-hidden 
                             w-full min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] 
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
        : // ✅ Show skeletons if no data yet
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
