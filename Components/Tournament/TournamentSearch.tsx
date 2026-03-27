"use client";

import React, { useState } from "react";
import SearchWrapper from "@/Components/Searchwrapper/searchwrapper";
import TournamentCard from "@/Components/Tournament/TournamentCard";
import { Tournament } from "@/Modals/allmodals";

interface Props {
  tournaments: Tournament[];
}

export default function TournamentSearch({ tournaments }: Props) {
  const [query, setQuery] = useState(""); // track the search input

  return (
    <SearchWrapper<Tournament>
      items={tournaments}
      filterFn={(item, q) =>
        item.name.toLowerCase().includes(q.toLowerCase()) ||
        item.location.toLowerCase().includes(q.toLowerCase())
      }
      renderCard={(item) => <TournamentCard tournament={item} />}
      placeholder="Search tournaments..."
      query={query}         // pass current search query
      setQuery={setQuery}   // pass state setter to update query
    />
  );
}