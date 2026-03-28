// components/HydrationSafeSkeleton.tsx
"use client";

import { useEffect, useState } from "react";
import SkeletonLoader from "@/Components/Skeleton/SkeletonLoader";

interface HydrationSafeSkeletonProps {
  type?: "text" | "card" | "list" | "detail";
  rows?: number;
  count?: number;
  children: React.ReactNode;
}

export default function HydrationSafeSkeleton({
  type = "text",
  rows = 3,
  count = 1,
  children,
}: HydrationSafeSkeletonProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <SkeletonLoader type={type} rows={rows} count={count} />;
  }

  return <>{children}</>;
}
