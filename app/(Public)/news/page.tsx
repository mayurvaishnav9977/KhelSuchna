import NewsSearchBar from "@/Components/News/NewsSearchBar";
import NotFoundUI from "@/Components/NotFoundUI";
import { mockNews } from "@/lib/news";
import SectionWrapper from "@/Components/SectionWrapper"

export default async function NewsPage() {
  const news = mockNews;
  const hasNews = news && news.length > 0;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-10">News</h2>

        {hasNews ? (
          <SectionWrapper type="text" rows={4}>
            <NewsSearchBar news={news} />
          </SectionWrapper>
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
