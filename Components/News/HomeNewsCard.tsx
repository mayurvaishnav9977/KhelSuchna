"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { News } from "@/Modals/allmodals";

interface Props {
  news: News;
  variant?: "hero" | "side" | "list";
}

export default function HomeNewsCard({ news, variant = "side" }: Props) {
  return (
    <Card
      className="shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: variant === "hero" ? 400 : "auto", // fixed height for hero
        borderRadius: 2,
        boxShadow: variant === "list" ? "none" : 2,
      }}
    >
      {variant !== "list" && news.imageUrl && (
        <CardMedia
          component="img"
          image={news.imageUrl}
          alt={news.title}
          sx={{
            width: "100%",
            objectFit: "cover",
            height: variant === "hero" ? 240 : 100, // fixed image height
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      )}

      <CardContent
        sx={{
          flexGrow: 0, // prevent growing with content
          p: 2,
          overflow: "hidden", // cut off overflow
        }}
      >
        <Typography
          variant={variant === "hero" ? "h6" : "subtitle2"}
          className="font-bold mb-2 line-clamp-2"
          sx={{
            fontSize: {
              xs: variant === "hero" ? "1.1rem" : "0.85rem",
              md: variant === "hero" ? "1.3rem" : "0.95rem",
            },
            lineHeight: 1.3,
          }}
        >
          {news.title}
        </Typography>

        {variant !== "list" && (
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp-2 mb-2"
            sx={{ fontSize: variant === "side" ? "0.75rem" : "0.85rem" }}
          >
            {news.summary}
          </Typography>
        )}

        <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.7rem" }}>
          {news.publishedAt} • {news.source}
        </Typography>
      </CardContent>

      {variant !== "list" && (
        <CardActions sx={{ p: 2, mt: "auto" }}>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            fullWidth={variant === "side"}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "primary.light",
                borderColor: "primary.main",
              },
            }}
          >
            Read More
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
