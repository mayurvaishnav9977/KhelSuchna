"use client";

import React, { useState, useMemo } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { Tournament } from "@/Modals/allmodals";
import TournamentCard from "@/Components/Tournament/TournamentCard";
import SearchWrapper from "@/Components/Searchwrapper/searchwrapper";

interface TabSwitchProps {
  tournaments: Tournament[];
}

export default function TabSwitch({ tournaments }: TabSwitchProps) {
  const [value, setValue] = useState(0);
  const [query, setQuery] = useState("");

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setQuery(""); // reset search when switching tabs
  };

  // filter by tab
  const filterByTab = useMemo(() => {
    switch (value) {
      case 1:
        return tournaments.filter((t) => t.status === "upcoming");
      case 2:
        return tournaments.filter((t) => t.status === "ongoing");
      case 3:
        return tournaments.filter((t) => t.status === "completed");
      default:
        return tournaments;
    }
  }, [value, tournaments]);

  // filter by search
  const filtered = useMemo(() => {
    if (!query) return filterByTab;
    return filterByTab.filter(
      (t) =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.location.toLowerCase().includes(query.toLowerCase())
    );
  }, [filterByTab, query]);

  const tabLabel = ["All", "Upcoming", "Ongoing", "Completed"][value];

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* Tabs + Search */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "stretch", sm: "center" },
          justifyContent: { sm: "space-between" },
        }}
      >
        <Box
          sx={{
            order: { xs: 1, sm: 2 },
            width: { xs: "100%", sm: "250px" },
          }}
        >
          <SearchWrapper<Tournament>
            items={[]} 
            filterFn={() => true}
            renderCard={() => null}
            placeholder="Search tournaments..."
            query={query}
            setQuery={setQuery}
          />
        </Box>

        <Box sx={{ order: { xs: 2, sm: 1 } }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tournament tabs"
            sx={{
              "& .MuiTab-root": {
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                minWidth: { xs: 60, sm: 90, md: 120 },
                padding: { xs: "6px 8px", sm: "8px 12px" },
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Upcoming" />
            <Tab label="Ongoing" />
            <Tab label="Completed" />
          </Tabs>
        </Box>
      </Box>

      {/* Cards BELOW */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
          mt: 2,
          justifyContent: "start", // ✅ ensures items align left
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((t) => (
            <TournamentCard key={t.slug} tournament={t} />
          ))
        ) : (
          <Box
            sx={{
              gridColumn: "1 / -1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4,
            }}
          >
            <Typography variant="body1" color="text.secondary">
              {query
                ? "No tournaments match your search."
                : `No ${tabLabel.toLowerCase()} tournaments found.`}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
