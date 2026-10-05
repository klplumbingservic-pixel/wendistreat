import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index.tsx";
import MenuPage from "./pages/MenuPage.tsx";
import BookingPage from "./pages/BookingPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
