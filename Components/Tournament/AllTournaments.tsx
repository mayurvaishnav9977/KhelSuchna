"use client";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link"; // import Next.js Link
import { Tournament } from "@/Modals/allmodals";
import SkeletonLoader from "@/Components/Skeleton/SkeletonLoader";

type Props = {
  tournaments: Tournament[];
};

export default function AllTournaments({ tournaments }: Props) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      {/* Two-column flex layout */}
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        {/* Left column: tournaments list */}
        <Box flex={1}>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 1,
              overflow: "hidden",
            }}
          >
            {mounted
              ? tournaments.map((t, i) => (
                  <Link
                    key={t.slug ?? i}
                    href={`/tournaments/${t.slug}`} // dynamic route
                    passHref
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        p: { xs: 1.5, sm: 2.5 },
                        "&:hover": { bgcolor: "grey.50" },
                        transition: "background-color 0.2s ease",
                        cursor: "pointer", // show pointer cursor
                      }}
                    >
                      {/* Thumbnail image */}
                      <Box
                        component="img"
                        src={t.image}
                        alt={t.name}
                        sx={{
                          width: { xs: "4.5rem", sm: "6rem", md: "7rem" },
                          height: "auto",
                          borderRadius: 1,
                          flexShrink: 0,
                          objectFit: "cover",
                        }}
                      />

                      {/* Tournament info */}
                      <Box sx={{ ml: 2, flex: 1 }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontSize: { xs: "0.7rem", sm: "0.85rem" } }}
                        >
                          {t.date}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {t.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            fontSize: { xs: "0.7rem", sm: "0.85rem" },
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {t.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                ))
              : Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonLoader key={i} type="card" />
                ))}
          </Box>

          {/* Explore More button */}
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              href="/tournaments"
              fullWidth
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                maxWidth: { md: 200 },
              }}
            >
              Explore More
            </Button>
          </Box>
        </Box>

        {/* Right column: extra content */}
        <Box flex={{ xs: "none", md: "0.4" }} mt={{ xs: 3, md: 0 }}>
          <Box sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 1, p: { xs: 2, sm: 3 } }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Trending News
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
            >
              • New season starting soon <br />
              • Finals scheduled next week <br />
              • Player transfers announced
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "white",
              borderRadius: 2,
              boxShadow: 1,
              p: { xs: 2, sm: 3 },
              mt: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Upcoming Matches
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.85rem" } }}
            >
              • Team A vs Team B — March 28 <br />
              • Team C vs Team D — April 2
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
