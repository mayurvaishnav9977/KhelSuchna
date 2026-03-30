"use client";

import React, { useState, useMemo } from "react";
import { Tournament } from "@/Modals/allmodals";
import TabSwitch from "@/Components/TabSwitch/TabSwitch";
import SearchWrapper from "@/Components/Searchwrapper/searchwrapper";
import TournamentCard from "@/Components/Tournament/TournamentCard";
import { Box } from "@mui/material";

interface Props {
  tournaments: Tournament[];
}

export default function TournamentsFilter({ tournaments }: Props) {
  const [currentTab, setCurrentTab] = useState<"upcoming" | "ongoing" | "completed">("upcoming");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter tournaments based on current tab and search query
  const filteredTournaments = useMemo(() => {
    return tournaments.filter(
      (t) =>
        t.status === currentTab &&
        (t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
         t.location.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [currentTab, searchQuery, tournaments]);

  return (
    <Box>
      {/* Tabs */}
      <TabSwitch
        tournaments={tournaments} // ✅ MUST pass tournaments here
        currentTab={currentTab}
        onTabChange={(tab) => setCurrentTab(tab)}
      />

      {/* Search */}
      <SearchWrapper
  items={filteredTournaments}
  filterFn={(item, q) =>
    item.name.toLowerCase().includes(q.toLowerCase()) ||
    item.location.toLowerCase().includes(q.toLowerCase())
  }
  renderCard={(item) => <TournamentCard tournament={item} />}
  placeholder="Search tournaments..."
  query={searchQuery}           // ✅ pass current query
  setQuery={setSearchQuery}     // ✅ pass state updater
/>
    </Box>
  );
}