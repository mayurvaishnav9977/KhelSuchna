import { tournaments } from "@/lib/tournaments";
import PopularTournaments from "@/Components/Tournament/PopularTournaments";
import AllTournaments from "@/Components/Tournament/AllTournaments";
import HomeNewsSection from "@/Components/News/NewsSection";
import NewsByCategory from "@/Components/News/NewsByCategory";
import { mockNews } from "@/lib/news";
import SectionWrapper from "@/Components/SectionWrapper";

export default function DashboardPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-5">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 space-y-10">
        
        {/* Popular Tournaments Section */}
        <section>
          <h2 className="text-left text-xl sm:text-3xl font-bold mb-5">
            Popular Tournaments
          </h2>
          <SectionWrapper type="card" count={6}>
            <PopularTournaments tournaments={tournaments.slice(0, 6)} />
          </SectionWrapper>
        </section>

        {/* All Tournaments Section */}
        <section>
          <h2 className="text-left text-xl sm:text-3xl font-bold mb-5">
            Explore Tournaments
          </h2>
          <SectionWrapper type="card" count={4}>
            <AllTournaments tournaments={tournaments} />
          </SectionWrapper>
        </section>

        {/* News Section */}
        <section>
          <SectionWrapper type="text" rows={4}>
            <HomeNewsSection />
          </SectionWrapper>
        </section>

        {/* News By Category */}
        <main className="space-y-16 p-4 md:p-8">
          <SectionWrapper type="list" count={3}>
            <NewsByCategory news={mockNews} />
          </SectionWrapper>
        </main>
      </div>
    </div>
  );
}
