// app/news/page.tsx
import NewsSearchBar from "@/Components/News/NewsSearchBar";
import { News } from "@/Modals/allmodals";
import NotFoundUI from "@/Components/NotFoundUI";
import { mockNews } from "@/lib/news";


export default async function NewsPage() {
  const news = mockNews; // or fetch from API here

  const hasNews = news && news.length > 0;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-10">News</h2>

        {hasNews ? (
          <NewsSearchBar news={news} />
        ) : (
          <NotFoundUI
            title="No News Available"
            message="Currently there are no news articles to display. Please check back later."
            backHref="/"
            backLabel="Go Back Home"
          />
        )}
      </div>
    </div>
  );
}