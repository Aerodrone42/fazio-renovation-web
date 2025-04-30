
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HelmetProvider } from 'react-helmet-async';
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
import Coordination from "./pages/services/Coordination";

// Pages locales - Index
import RegionsIndex from "./pages/regions/RegionsIndex";

// Pages locales - Ain
import BourgEnBressePage from "./pages/regions/BourgEnBresse";
import AmberieuEnBugeyPage from "./pages/regions/AmberieuEnBugey";
import OyonnaxPage from "./pages/regions/Oyonnax";
import MiribelPage from "./pages/regions/Miribel";
import MeximieuxPage from "./pages/regions/Meximieux";
import BelleyPage from "./pages/regions/Belley";

// Pages locales - Ouest Lyonnais
import LArbreslePage from "./pages/regions/LArbresle";
import TassinLaDemiLunePage from "./pages/regions/TassinLaDemiLune";
import EcullyPage from "./pages/regions/Ecully";
import CharbonnieresLesBainsPage from "./pages/regions/CharbonnieresLesBains";
import DardillyPage from "./pages/regions/Dardilly";
import LimonestPage from "./pages/regions/Limonest";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
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
              <Route path="/services/coordination" element={<Coordination />} />
              
              {/* Pages locales - Index */}
              <Route path="/regions" element={<RegionsIndex />} />
              
              {/* Pages locales - Ain */}
              <Route path="/regions/bourgenbresse" element={<BourgEnBressePage />} />
              <Route path="/regions/amberieuenbugey" element={<AmberieuEnBugeyPage />} />
              <Route path="/regions/oyonnax" element={<OyonnaxPage />} />
              <Route path="/regions/miribel" element={<MiribelPage />} />
              <Route path="/regions/meximieux" element={<MeximieuxPage />} />
              <Route path="/regions/belley" element={<BelleyPage />} />
              
              {/* Pages locales - Ouest Lyonnais */}
              <Route path="/regions/larbresle" element={<LArbreslePage />} />
              <Route path="/regions/tassinlademilune" element={<TassinLaDemiLunePage />} />
              <Route path="/regions/ecully" element={<EcullyPage />} />
              <Route path="/regions/charbonniereslesbains" element={<CharbonnieresLesBainsPage />} />
              <Route path="/regions/dardilly" element={<DardillyPage />} />
              <Route path="/regions/limonest" element={<LimonestPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
