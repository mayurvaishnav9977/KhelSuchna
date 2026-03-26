"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import { NewsArticle } from "@/Modals/allmodals";
import { useRouter } from "next/navigation";
import Button from "@/Components/Button/button"
export default function NewsDetail({ news }: { news: NewsArticle }) {
    const router = useRouter();
  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", md: 900 },
        margin: "auto",
        mt: { xs: 3, md: 5 },
        boxShadow: 1,
        borderRadius: 2,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <CardContent sx={{ px: { xs: 2, sm: 3, md: 4 },
                        py: { xs: 2, sm: 3, md: 4 }
    }}>
        {/* Title */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: "700",
            lineHeight: 1.3,
             textTransform: "uppercase",
             letterSpacing: 0.5,
            fontFamily:  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'  ,
            
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
          }}
        >
          {news.title}
        </Typography>

        {/* Author + Date */}
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: "0.85rem", md: "1rem" },
        fontStyle:"italic" }}
        >
         By {news.author} •{" "}
          {new Date(news.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Typography>
      </CardContent>

      {/* Image after title */}
      <Box
        component="img"
        src={news.imageUrl}
        alt={news.title}
        sx={{
          width: "100%",
          aspectRatio:"16/9",
          objectFit: "cover",
          borderTopLeftRadius:"8px",
          borderTopRightRadius:"8px"
           
        }}
      />

      <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        {/* Content with HTML */}
       <Box
  sx={{
    "& p": {
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      fontWeight: 400,
      lineHeight: 1.8,
      fontSize: {
        xs: "1rem",    // mobile
        sm: "1.05rem", // tablets
        md: "1.2rem",  // desktop
        lg: "1.3rem",  // large screens
      },
      color: "#48494a",
      mb: 2,
      textAlign: "justify",
      textJustify: "inter-word",
    },
    "& h2": {
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: {
        xs: "1.2rem",  // mobile
        md: "1.6rem",  // desktop
        lg: "1.8rem",  // large screens
      },
      lineHeight: 1.4,
      color: "#2c2d2e", // slightly darker for emphasis
      mt: 3,
      mb: 2,
      textAlign: "left", // headings usually left-aligned
    },
    "& blockquote": {
      fontFamily: 'Georgia, "Times New Roman", Times, serif',
      fontStyle: "italic",
      fontWeight: 400,
      lineHeight: 1.8,
      fontSize: {
        xs: "1rem",
        md: "1.15rem",
      },
      borderLeft: "4px solid #ccc",
      pl: 2,
      color: "#48494a",
      mb: 3,
      textAlign: "justify",
      textJustify: "inter-word",
    },
  }}
>
  <div dangerouslySetInnerHTML={{ __html: news.content }} />
</Box>
         <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => router.back()}
           
        
          >
            ← Go Back to News
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
