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
  return <div role="tabpanel" hidden={value !== index}>{value === index && <Box sx={{ p: 2 }}>{children}</Box>}</div>;
}

interface TabSwitchProps {
  tournaments: Tournament[];
}

export default function TabSwitch({ tournaments }: TabSwitchProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Filter tournaments by status
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