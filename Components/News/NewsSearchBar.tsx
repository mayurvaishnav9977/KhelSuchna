"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NewsCard from "./NewsCard";
import { News } from "@/Modals/allmodals";

type Props = {
  news?: News[]; // allow optional, default to empty array
};

export default function NewsSearchBar({ news = [] }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredNews, setFilteredNews] = useState<News[]>(news);

  useEffect(() => {
    // Use current news array safely
    const currentNews = news || [];

    // Clear previous timeout if typing continues
    const timer = setTimeout(() => {
      if (!searchTerm) {
        setFilteredNews(currentNews);
        setLoading(false);
        return;
      }

      setLoading(true);

      // Filter news by title or source
      const results = currentNews.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.source.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredNews(results);
      setLoading(false);
    }, 400); // debounce 400ms

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
          No news found for <span className="font-semibold">&quot;{searchTerm}&quot;</span>.
        </div>
      )}
    </>
  );
}