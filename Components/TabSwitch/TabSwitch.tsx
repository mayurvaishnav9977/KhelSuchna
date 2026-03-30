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

  // Filter tournaments by tab
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

  // Apply search query
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
      {/* Mobile header: Title + Search inline */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1.5,
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Tournaments
        </Typography>

        <Box
          sx={{
            flex: 1,
            maxWidth: "65%",
            minWidth: "120px",
          }}
        >
          <SearchWrapper
            placeholder="Search tournaments..."
            query={query}
            setQuery={setQuery}
          />
        </Box>
      </Box>

      {/* Desktop header: Tabs + Search */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tournament tabs"
          sx={{
            "& .MuiTab-root": {
              fontSize: { xs: "0.75rem", sm: "0.9rem", md: "1rem" },
              minWidth: { xs: 70, sm: 90, md: 120 },
              px: { xs: 1, sm: 2 },
            },
          }}
        >
          <Tab label="All" />
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

      {/* Cards or Empty State */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: { xs: 2, sm: 3 },
          mt: 2,
          justifyItems: "stretch",
          alignItems: "start",
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
              minHeight: "200px",
              border: "1px dashed",
              borderColor: "divider",
              borderRadius: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              {query
                ? `No tournaments match "${query}".`
                : `No ${tabLabel.toLowerCase()} tournaments found.`}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
