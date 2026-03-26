import TournamentSearch from "@/Components/Tournament/TournamentSearch";
import { tournaments } from "@/lib/tournaments";
import NotFoundUI from "@/Components/NotFoundUI";

export default function TournamentsPage() {
  const hasTournaments = tournaments && tournaments.length > 0;

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold mb-10">Tournaments</h2>

        {hasTournaments ? (
          <TournamentSearch tournaments={tournaments} />
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
