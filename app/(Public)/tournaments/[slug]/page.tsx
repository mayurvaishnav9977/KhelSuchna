import { tournaments } from "@/lib/tournaments";
import NotFoundUI from "@/Components/NotFoundUI";
import TournamentDetail from "@/Components/Tournament/TournamentDetail";

interface Params {
  params: { slug: string };
}

export default async function TournamentPage({ params }: Params) {
  const { slug } = await params; // ✅ plain object, no await


  const tournament = tournaments.find(t => t.slug === slug);

  if (!tournament) {
    return(<NotFoundUI
     title="Tournament Not Found"
        message="The tournament you’re looking for doesn’t exist or may have been removed."
    />);
  }

  return <TournamentDetail tournament={tournament} />;
}
