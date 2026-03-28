"use client";

import React, { useState, useMemo, useRef } from "react";
import SkeletonLoader from "@/Components/Skeleton/SkeletonLoader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface SearchWrapperProps<T> {
  items: T[];
  filterFn: (item: T, query: string) => boolean;
  renderCard: (item: T) => React.ReactNode;
  placeholder?: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchWrapper<T>({
  items,
  filterFn,
  renderCard,
  placeholder = "Search...",
  query,
  setQuery,
}: SearchWrapperProps<T>) {
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // ✅ Derived state (NO useEffect needed)
  const filteredItems = useMemo(() => {
    if (!query) return items;
    return items.filter((item) => filterFn(item, query));
  }, [items, query, filterFn]);

  const handleSearch = (q: string) => {
    setLoading(true);
    setQuery(q);

    // simulate delay (optional UX)
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const skeletonCount = items.length || 3;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mb: 3,
        }}
      >
        <TextField
          id="search-input"
          inputRef={inputRef}
          variant="outlined"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          sx={{
            width: expanded ? { xs: "100%", sm: 250, md: 300 } : 0,
            opacity: expanded ? 1 : 0,
            transition: "width 0.3s ease, opacity 0.3s ease",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              fontSize: "0.95rem",
            },
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

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
        }}
        gap={3}
      >
        {loading ? (
          Array.from({ length: skeletonCount }).map((_, i) => (
            <SkeletonLoader key={i} type="card" />
          ))
        ) : filteredItems.length === 0 && query ? (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "2rem",
            }}
          >
            No results found for &quot;{query}&quot;
          </Typography>
        ) : (
          filteredItems.map((item, i) => (
            <Box key={i}>{renderCard(item)}</Box>
          ))
        )}
      </Box>
    </Box>
  );
}