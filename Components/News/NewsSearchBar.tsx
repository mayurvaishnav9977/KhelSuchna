"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NewsCard from "./NewsCard";
import { News } from "@/Modals/allmodals";

export default function NewsSearchBar({ news }: { news: News[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredNews, setFilteredNews] = useState<News[]>(news);

  // Simulate loading when searchTerm changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const results = news.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNews(results);
      setLoading(false);
    }, 400); // small delay for skeleton effect
    return () => clearTimeout(timer);
  }, [searchTerm, news]);

  return (
    <>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-6"
      />

      {/* Skeleton or News Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-200 h-64 rounded-lg"
            />
          ))}
        </div>
      ) : filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="block hover:scale-[1.02] transition-transform"
            >
              <NewsCard news={item} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          No news found for <span className="font-semibold">"{searchTerm}"</span>.
        </div>
      )}
    </>
  );
}
