"use client";

import React, { useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@/Components/TextField/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchWrapperProps {
  placeholder?: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchWrapper({
  placeholder = "Search...",
  query,
  setQuery,
}: SearchWrapperProps) {
  const [expanded, setExpanded] = React.useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        mb: 2,
      }}
    >
      <TextField
        inputRef={inputRef}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          width: expanded ? { xs: "100%", sm: 250, md: 300 } : 0,
          opacity: expanded ? 1 : 0,
          transition: "width 0.3s ease, opacity 0.3s ease",
        }}
      />

      {!expanded ? (
        <IconButton
          onClick={() => {
            setExpanded(true);
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
        >
          <SearchIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            setExpanded(false);
            setQuery("");
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
}
