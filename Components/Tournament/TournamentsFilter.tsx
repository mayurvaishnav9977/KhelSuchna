"use client";

import React, { useMemo, useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { Tournament } from "@/Modals/allmodals";
import TournamentCard from "@/Components/Tournament/TournamentCard";
import SearchWrapper from "@/Components/Searchwrapper/searchwrapper";

interface TabSwitchProps {
  tournaments: Tournament[];
  currentTab: "upcoming" | "ongoing" | "completed";
  onTabChange: (tab: "upcoming" | "ongoing" | "completed") => void;
}

export default function TabSwitch({
  tournaments,
  currentTab,
  onTabChange,
}: TabSwitchProps) {
  const [query, setQuery] = useState("");

  const tabs: ("upcoming" | "ongoing" | "completed")[] = [
    "upcoming",
    "ongoing",
    "completed",
  ];
  const value = tabs.indexOf(currentTab);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    onTabChange(tabs[newValue]);
    setQuery(""); // reset search when switching tabs
  };

  const filterByTab = useMemo(() => {
    return tournaments.filter((t) => t.status === currentTab);
  }, [currentTab, tournaments]);

  const filtered = useMemo(() => {
    if (!query) return filterByTab;
    return filterByTab.filter(
      (t) =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.location.toLowerCase().includes(query.toLowerCase())
    );
  }, [filterByTab, query]);

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* Tabs + Search */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Upcoming" />
          <Tab label="Ongoing" />
          <Tab label="Completed" />
        </Tabs>

        <Box sx={{ width: "350px" }}>
          <SearchWrapper
            placeholder="Search tournaments..."
            query={query}
            setQuery={setQuery}
          />
        </Box>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: { xs: 2, sm: 3 },
          mt: 2,
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((t) => (
            <TournamentCard key={t.slug} tournament={t} />
          ))
        ) : (
          <Typography>No {currentTab} tournaments found.</Typography>
        )}
      </Box>
    </Box>
  );
}
  