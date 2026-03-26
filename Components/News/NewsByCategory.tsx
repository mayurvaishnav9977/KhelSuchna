"use client";

import React from "react";
import Link from "next/link";
import { News } from "@/Modals/allmodals";

type Props = { news: News[] };

export default function NewsByCategory({ news }: Props) {
  const categories: ("cricket" | "football" | "chess")[] = [
    "cricket",
    "football",
    "chess",
  ];

  return (
    <div className="space-y-10 sm:space-y-12">
      {categories.map((category) => {
        const filtered = news
          .filter((n) => n.category === category)
          .slice(0, 4); // only top 4

        return (
          <section key={category}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              {category.toUpperCase()} 
            </h2>

            {/* Uniform Grid: 2 cols on mobile, 4 on desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((n) => (
                <Link key={n.id} href={`/news/${n.id}`}>
                  <div className="bg-white rounded-lg shadow cursor-pointer hover:shadow-lg transition overflow-hidden flex flex-col h-full">
                    <img
                      src={n.imageUrl}
                      alt={n.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-3 flex-1 flex flex-col justify-between">
                      <h3 className="text-sm sm:text-base font-semibold line-clamp-2">
                        {n.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm mt-2">
                        {n.publishedAt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}