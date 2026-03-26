import { Box, Typography, Stack, Button } from "@mui/material";
import { Tournament } from "@/Modals/allmodals";

export default function TournamentDetail({ tournament }: { tournament: Tournament }) {
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", md: 900 }, // full width on mobile, centered on desktop
        mx: "auto",
        p: { xs: 2, md: 3 }, // smaller padding on mobile
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={tournament.image}
        alt={tournament.name}
        sx={{
          width: "100%",
          maxHeight: { xs: 200, md: 300 }, // smaller height on mobile
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      {/* Title */}
      <Typography
        variant="h4" // smaller heading on mobile
        fontWeight="bold"
        sx={{ mt: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}
      >
        {tournament.name}
      </Typography>

      {/* Date + Location */}
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
      >
        {tournament.date} • {tournament.location}
      </Typography>

      {/* Status */}
      <Typography
        variant="caption"
        color="primary"
        sx={{ mt: 1, display: "block", fontSize: { xs: "0.8rem", md: "0.9rem" } }}
      >
        Status: {tournament.status.toUpperCase()}
      </Typography>

      {/* Info Row */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 4 }}
        sx={{ mt: 3 }}
      >
        <Typography variant="body2">Registration Deadline: {tournament.registrationDeadline}</Typography>
        <Typography variant="body2">Entry Fee: {tournament.entryFee}</Typography>
        <Typography variant="body2">Prize Pool: {tournament.prizePool}</Typography>
      </Stack>

      {/* CTA */}
      <Button
        variant="contained"
        color="primary"
        fullWidth // button spans full width on mobile
        sx={{ mt: 3, maxWidth: { xs: "100%", sm: 200 } }}
      >
        Register Now
      </Button>

      {/* Description */}
      <Typography
        sx={{
          mt: 4,
          textAlign: "justify",
          fontSize: { xs: "0.95rem", md: "1rem" },
          lineHeight: { xs: 1.5, md: 1.8 },
        }}
      >
        {tournament.description}
      </Typography>
    </Box>
  );
}
