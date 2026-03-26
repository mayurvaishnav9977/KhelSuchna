"use client"; 
import React from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabSwitch() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tab Headers */}
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs" centered>
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
        <Tab label="Tab Three" />
      </Tabs>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        Content for Tab One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Content for Tab Three
      </TabPanel>
    </Box>
  );
}
