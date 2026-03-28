import { tournaments } from "@/lib/tournaments";
import NotFoundUI from "@/Components/NotFoundUI";
import TabSwitch from "@/Components/TabSwitch/TabSwitch";
import SectionWrapper from "@/Components/SectionWrapper"

export default function TournamentsPage() {
  const hasTournaments = tournaments && tournaments.length > 0;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-4 sm:mb-6">Tournaments</h2>

        {hasTournaments ? (
       <SectionWrapper type="card" count={3}>
  <TabSwitch tournaments={tournaments} />
</SectionWrapper>
        ) : (
          <NotFoundUI
            title="No Tournaments Available"
            message="Currently there are no tournaments to display. Please check back later."
          />
        )}
      </div>
    </div>
  );
}
