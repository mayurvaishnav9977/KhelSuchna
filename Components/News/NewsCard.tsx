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

export default function NewsCard({ news, variant = "side" }: Props) {
  return (
    <Card
      className="shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-102"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 2,
        boxShadow: variant === "list" ? "none" : 2,
      }}
    >
      {/* Image only for hero/side */}
      {variant !== "list" && news.imageUrl && (
        <CardMedia
          component="img"
          image={news.imageUrl}
          alt={news.title}
          sx={{
            width: "100%",
            objectFit: "cover",
            aspectRatio: variant === "hero" ? "16/9" : "4/3",
             maxHeight: variant === "hero" ? 220 : 160, // reduce height
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      )}

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography
          variant={variant === "hero" ? "h5" : "h6"}
          className="font-bold mb-2"
          sx={{
            fontSize: {
              xs: variant === "hero" ? "1.25rem" : "1rem",
              md: variant === "hero" ? "1.5rem" : "1.25rem",
            },
          }}
        >
          {news.title}
        </Typography>

        {/* Summary only for hero/side */}
        {variant !== "list" && (
          <Typography
            variant="body2"
            color="text.secondary"
            className="line-clamp-3 mb-2"
          >
            {news.summary}
          </Typography>
        )}

        <Typography variant="caption" color="text.secondary">
          {news.publishedAt} • {news.source}
        </Typography>
      </CardContent>

      {/* Read More button only for hero/side */}
      {variant !== "list" && (
        <CardActions sx={{ p: 2 }}>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            Read More
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
