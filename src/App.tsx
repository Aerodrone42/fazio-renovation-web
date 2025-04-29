
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Realisations from "./pages/Realisations";

// Services
import Carrelage from "./pages/services/Carrelage";
import Mosaique from "./pages/services/Mosaique";
import PierreMarbre from "./pages/services/PierreMarbre";
import DoucheItalienne from "./pages/services/DoucheItalienne";
import RenovationSalleDeBain from "./pages/services/RenovationSalleDeBain";
import Plomberie from "./pages/services/Plomberie";
import Coordination from "./pages/services/Coordination";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/realisations" element={<Realisations />} />
            
            {/* Services */}
            <Route path="/services/carrelage" element={<Carrelage />} />
            <Route path="/services/mosaique" element={<Mosaique />} />
            <Route path="/services/pierre-marbre" element={<PierreMarbre />} />
            <Route path="/services/douche-italienne" element={<DoucheItalienne />} />
            <Route path="/services/renovation-salle-de-bain" element={<RenovationSalleDeBain />} />
            <Route path="/services/plomberie" element={<Plomberie />} />
            <Route path="/services/coordination" element={<Coordination />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
