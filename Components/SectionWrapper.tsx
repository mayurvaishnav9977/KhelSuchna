// components/SectionWrapper.tsx
import HydrationSafeSkeleton from "./HydrationSafeSkeleton";

interface SectionWrapperProps {
  children: React.ReactNode;
  type?: "text" | "card" | "list" | "detail";
  rows?: number;
  count?: number;
}

export default function SectionWrapper({
  children,
  type = "card",   // default skeleton style
  rows = 3,
  count = 1,
}: SectionWrapperProps) {
  return (
    <HydrationSafeSkeleton type={type} rows={rows} count={count}>
      {children}
    </HydrationSafeSkeleton>
  );
}
