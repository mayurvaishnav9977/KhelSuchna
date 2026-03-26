// components/TournamentCard.tsx
"use client";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";  
import { Tournament } from "@/Modals/allmodals";
import Link from "next/link";
export default function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <Link href={`/tournaments/${tournament.slug}`} style={{ textDecoration: "none" }}>
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        
        image={tournament.image}
        alt={tournament.name}
        sx={{ 
           width: "100%",
    objectFit: "cover",
    aspectRatio: "16/9",   // smaller ratio than 16/9
         // keeps image compact
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {tournament.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tournament.date} • {tournament.location}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography
            variant="caption"
            sx={{
              color:
                tournament.status === "upcoming"
                  ? "green"
                  : tournament.status === "ongoing"
                  ? "orange"
                  : "gray",
              fontWeight: "bold",
            }}
          >
            {tournament.status.toUpperCase()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
    </Link>
  );
}
