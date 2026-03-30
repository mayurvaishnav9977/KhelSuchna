// components/TournamentSection.tsx
import HydrationSafeSkeleton from "@/Components/HydrationSafeSkeleton";

interface SectionWrapperProps {
  children: React.ReactNode;
  type?: "text" | "card" | "list" | "detail";
  rows?: number;
  count?: number;
}

export default function SectionWrapper({
  children,
  type = "card",
  rows = 3,
  count = 1,
}: SectionWrapperProps) {
  return (
    <HydrationSafeSkeleton type={type} rows={rows} count={count}>
      {children}
    </HydrationSafeSkeleton>
  );
}