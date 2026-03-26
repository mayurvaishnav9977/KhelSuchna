"use client";

import { Box, Typography} from "@mui/material";
interface NotFoundUIProps {
  title?: string;
  message?: string;
  backHref?: string;
  backLabel?: string;
}

export default function NotFoundUI({
  title = "Page Not Found",
  message = "The resource you’re looking for doesn’t exist or may have been removed.",
}: NotFoundUIProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: { xs: "60vh", md: "70vh" }, // responsive height
        px: { xs: 2, sm: 4 }, // responsive padding
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem" }, // responsive font size
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mb: 4,
          maxWidth: { xs: "100%", sm: "500px" }, // limit width on larger screens
        }}
      >
        {message}
      </Typography>


    </Box>
  );
}
