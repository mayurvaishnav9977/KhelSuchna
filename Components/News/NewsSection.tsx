"use client";

import HomeNewsCard from "@/Components/News/HomeNewsCard";
import { mockNews } from "@/lib/news";

export default function HomeNewsSection() {
  // Limit hero stories to only 2
  const heroStories = mockNews.filter(n => n.variant === "hero").slice(0, 2);
  const sideStories = mockNews.filter(n => n.variant === "side").slice(0,3);
  const headlines = mockNews.filter(n => n.variant === "list");

  return (
    <section className="space-y-10">
      <h2 className="text-left text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
        News
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left column with exactly two hero cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          {heroStories.map(hero => (
            <HomeNewsCard key={hero.id} news={hero} variant="hero" />
          ))}
        </div>

        {/* Right column with side cards */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {sideStories.map(story => (
            <HomeNewsCard key={story.id} news={story} variant="side" />
          ))}
        </div>
      </div>

      {/* Headlines */}
      <div>
        <h3 className="font-bold text-xl sm:text-2xl mb-4">
          Today’s Must-Read Headlines
        </h3>
        <div className="flex flex-col gap-3">
          {headlines.map(h => (
            <HomeNewsCard key={h.id} news={h} variant="list" />
          ))}
        </div>
      </div>
    </section>
  );
}
