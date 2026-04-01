"use client";

import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";

type LoaderType = "text" | "card" | "list" | "detail";

interface SkeletonLoaderProps {
  type?: LoaderType;
  rows?: number;
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type = "text",
  rows = 3,
  count = 1,
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return (
          <Card
            className="shadow-md transition-transform duration-300"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              borderRadius: 2,
            }}
          >
            {/* Image area */}
            <Skeleton
              variant="rectangular"
              width="100%"
              height={180}
              sx={{ borderRadius: "8px 8px 0 0" }}
            />
            {/* Content */}
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
              <Skeleton variant="text" width="80%" height={30} />
              <Skeleton variant="text" width="95%" height={20} />
              <Skeleton variant="text" width="60%" height={20} />
            </CardContent>
            {/* Actions */}
            <CardActions sx={{ p: 2 }}>
              <Skeleton variant="rectangular" width={100} height={36} />
            </CardActions>
          </Card>
        );

      default:
        return (
          <Box>
            {Array.from({ length: rows }).map((_, i) => (
              <Skeleton
                key={i}
                variant="text"
                width="100%"
                height={20}
                sx={{ mb: 1 }}
              />
            ))}
          </Box>
        );
    }
  };

  return type === "card" ? (
    // Wrap card skeletons in a responsive grid
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <Box key={i}>{renderSkeleton()}</Box>
      ))}
    </div>
  ) : (
    // For text/list/detail skeletons, just stack vertically
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Box key={i} sx={{ mb: 2 }}>
          {renderSkeleton()}
        </Box>
      ))}
    </>
  );
};

export default SkeletonLoader;
