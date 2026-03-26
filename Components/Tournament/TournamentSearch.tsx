"use client";

import SearchWrapper from "@/Components/Searchwrapper/searchwrapper";
import TournamentCard from "@/Components/Tournament/TournamentCard";
import { Tournament } from "@/Modals/allmodals";

export default function TournamentSearch({ tournaments }: { tournaments: Tournament[] }) {
  return (
    <SearchWrapper
      items={tournaments}
      filterFn={(item, q) =>
        item.name.toLowerCase().includes(q.toLowerCase()) ||
        item.location.toLowerCase().includes(q.toLowerCase())
      }
      renderCard={(item) => <TournamentCard tournament={item} />}
      placeholder="Search tournaments..."
    />
  );
}
