// app/news/page.tsx
import NewsSearchBar from "@/Components/News/NewsSearchBar";
import { News } from "@/Modals/allmodals";
import NotFoundUI from "@/Components/NotFoundUI";

// Mock data (replace with API fetch)
const mockNews: News[] = [
  {
    id: 1,
    title: "Local Sports Event Ends in Surprise Victory",
    summary: "An underdog team stunned fans with a last-minute goal.",
    imageUrl: "https://picsum.photos/seed/sports/400/250",
    publishedAt: "19 Mar 2026",
    source: "Sports Daily",
  },
  {
    id: 2,
    title: "AI Tech Conference 2026 Announced",
    summary: "Experts will discuss breakthroughs in artificial intelligence.",
    imageUrl: "https://picsum.photos/seed/tech/400/250",
    publishedAt: "18 Mar 2026",
    source: "Tech Times",
  },
  {
    id: 3,
    title: "Stock Markets Hit Record High",
    summary: "Global markets surged amid positive economic signals.",
    imageUrl: "https://picsum.photos/seed/finance/400/250",
    publishedAt: "17 Mar 2026",
    source: "Finance World",
  },
  {
    id: 4,
    title: "New Movie Breaks Box Office Records",
    summary: "The latest blockbuster has become the highest-grossing film this year.",
    imageUrl: "https://picsum.photos/seed/movie/400/250",
    publishedAt: "16 Mar 2026",
    source: "Entertainment Hub",
  },
  {
    id: 5,
    title: "Health Experts Warn of Seasonal Flu Rise",
    summary: "Doctors advise precautions as flu cases increase.",
    imageUrl: "https://picsum.photos/seed/health/400/250",
    publishedAt: "15 Mar 2026",
    source: "Health News",
  },
  {
    id: 6,
    title: "Startup Ecosystem Booms in India",
    summary: "New startups are attracting record investments this quarter.",
    imageUrl: "https://picsum.photos/seed/startup/400/250",
    publishedAt: "14 Mar 2026",
    source: "Business Insider",
  },
  {
    id: 7,
    title: "Climate Change Summit 2026 Highlights",
    summary: "World leaders discuss urgent environmental policies.",
    imageUrl: "https://picsum.photos/seed/climate/400/250",
    publishedAt: "13 Mar 2026",
    source: "Global News",
  },
  {
    id: 8,
    title: "New Smartphone Launch Shocks Industry",
    summary: "A flagship device introduces groundbreaking features.",
    imageUrl: "https://picsum.photos/seed/mobile/400/250",
    publishedAt: "12 Mar 2026",
    source: "Gadget Central",
  },

];

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