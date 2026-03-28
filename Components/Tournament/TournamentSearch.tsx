"use client";

import React, { Dispatch, SetStateAction } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface TournamentSearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export default function TournamentSearch({ query, setQuery }: TournamentSearchProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search tournaments..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      sx={{ mb: 3 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
        endAdornment: query ? (
          <InputAdornment position="end">
            <IconButton onClick={() => setQuery("")} size="small">
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ) : null,
      }}
    />
  );
}
