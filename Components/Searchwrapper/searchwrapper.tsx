"use client";

import React, { useState, useEffect ,useRef} from "react";
import SkeletonLoader from "@/Components/Skeleton/SkeletonLoader";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchWrapper<T>({
  items,
  filterFn,
  renderCard,
  placeholder = "Search...",
}: {
  items: T[];
  filterFn: (item: T, query: string) => boolean;
  renderCard: (item: T) => React.ReactNode;
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState<T[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [expanded, setExpanded] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setTimeout(() => {
      setFilteredItems(items);
      setLoading(false);
      setIsSearching(false);
    }, 1000);
  }, [items]);

  const handleSearch = (q: string) => {
    setLoading(true);
    setIsSearching(true);
    setQuery(q);

    setTimeout(() => {
      const results = items.filter((item) => filterFn(item, q));
      setFilteredItems(results);
      setLoading(false);
    }, 800);
  };

  const skeletonCount = isSearching
    ? filteredItems.length > 0 ? filteredItems.length : 0
    : items.length > 0 ? items.length : 3;

  return (
    <Box>
      {/* Expandable search bar aligned right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mb: 3,
        }}
      >
        <TextField
        inputRef={inputRef}
          variant="outlined"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          autoFocus={expanded}
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
              // focus the input after expanding
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
              setFilteredItems(items);
              setIsSearching(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      {/* Card grid */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
        gap={3}
      >
        {loading ? (
          Array.from({ length: skeletonCount }).map((_, i) => (
            <SkeletonLoader key={i} type="card" />
          ))
        ) : filteredItems.length === 0 && isSearching ? (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ gridColumn: "1 / -1", textAlign: "center", padding: "2rem" }}
          >
            No results found for "{query}"
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
