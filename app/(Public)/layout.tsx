"use client";
import Navbar from "@/Components/Navbar/Navbar";
import BottomNavbar from "@/Components/Navbar/BottomNavbar";
import Footer from "@/Components/Footer/footer";
import "react-datepicker/dist/react-datepicker.css";
import EmotionProvider from "@/lib/emotion-provider";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <EmotionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* MUI default styles */}
        
        {/* Desktop navbar */}
        <Navbar />

        {/* Main content */}
        <main className="pb-16">{children}</main>

        {/* Footer */}
        <Footer />

        {/* Mobile bottom navbar */}
        <div className="md:hidden fixed bottom-0 w-full">
          <BottomNavbar />
        </div>
      </ThemeProvider>
    </EmotionProvider>
  );
}