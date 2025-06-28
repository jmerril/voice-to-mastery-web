
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as React from "react";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Industries from "./pages/Industries";
import Technology from "./pages/Technology";
import CaseStudies from "./pages/CaseStudies";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";
import ZyglioLanding from "./pages/ZyglioLanding";
import ROICalculator from "./pages/ROICalculator";
import Medical from "./pages/Medical";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/zyglio" element={<ZyglioLanding />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/roi-calculator" element={<ROICalculator />} />
              <Route path="/pharmaceutical" element={<Medical />} />
              <Route path="/medical" element={<Medical />} />
              <Route path="/about" element={<About />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
