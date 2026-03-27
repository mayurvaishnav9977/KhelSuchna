"use client";

import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Tournament } from "@/Modals/allmodals";
import TournamentCard from "@/Components/Tournament/TournamentCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

interface TabSwitchProps {
  tournaments: Tournament[]; // ← must include this
  currentTab?: "upcoming" | "ongoing" | "completed";
  onTabChange?: (tab: "upcoming" | "ongoing" | "completed") => void;
}

export default function TabSwitch({
  tournaments,
  currentTab,
  onTabChange,
}: TabSwitchProps) {
  const tabIndex = {
    upcoming: 0,
    ongoing: 1,
    completed: 2,
  };

  const indexTab = ["upcoming", "ongoing", "completed"] as const;

  const [value, setValue] = React.useState<number>(
    currentTab ? tabIndex[currentTab] : 0
  );

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (onTabChange) onTabChange(indexTab[newValue]);
  };

  const upcoming = tournaments.filter((t) => t.status === "upcoming");
  const ongoing = tournaments.filter((t) => t.status === "ongoing");
  const completed = tournaments.filter((t) => t.status === "completed");

  const renderTournaments = (list: Tournament[]) => {
    if (!list.length) return <Box>No tournaments available.</Box>;
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 3,
        }}
      >
        {list.map((t) => (
          <TournamentCard key={t.slug} tournament={t} />
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="tournament tabs" centered>
        <Tab label="Upcoming" />
        <Tab label="Ongoing" />
        <Tab label="Completed" />
      </Tabs>

      <TabPanel value={value} index={0}>
        {renderTournaments(upcoming)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {renderTournaments(ongoing)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {renderTournaments(completed)}
      </TabPanel>
    </Box>
  );
}