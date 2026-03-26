import Navbar from "@/Components/Navbar/Navbar";
import BottomNavbar from "@/Components/Navbar/BottomNavbar";
import "react-datepicker/dist/react-datepicker.css";
import EmotionProvider from "@/lib/emotion-provider";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <EmotionProvider>
      {/* Desktop navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main content */}
      <main className="pb-16">{children}</main>

      {/* Mobile bottom navbar */}
      <div className="md:hidden fixed bottom-0 w-full">
        <BottomNavbar />
      </div>
      </EmotionProvider>
    </div>

  );
}