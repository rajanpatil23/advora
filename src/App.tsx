import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Community from "./pages/Community";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

// Service pages - BUILD (Tech)
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import CustomSoftware from "./pages/services/CustomSoftware";
import UIUXDesign from "./pages/services/UIUXDesign";
import Branding from "./pages/services/Branding";

// Service pages - GROW & SCALE (Digital)
import DigitalPresence from "./pages/services/DigitalPresence";
import GrowthMarketing from "./pages/services/GrowthMarketing";
import SalesRevenue from "./pages/services/SalesRevenue";
import StrategyScaling from "./pages/services/StrategyScaling";

// Product detail pages
import Tool1 from "./pages/products/Tool1";
import Tool2 from "./pages/products/Tool2";
import Tool3 from "./pages/products/Tool3";
import Tool4 from "./pages/products/Tool4";

// Blog pages
import { BlogDataProvider } from "./blog/state/BlogDataProvider";
import BlogIndex from "./blog/ui/BlogIndex";
import CategoryLanding from "./blog/ui/CategoryLanding";
import PostDetail from "./blog/ui/PostDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <BackToTop />
        <BlogDataProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/digital-presence" element={<DigitalPresence />} />
            <Route path="/services/growth-marketing" element={<GrowthMarketing />} />
            <Route path="/services/sales-revenue" element={<SalesRevenue />} />
            <Route path="/services/strategy-scaling" element={<StrategyScaling />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/tool-1" element={<Tool1 />} />
            <Route path="/products/tool-2" element={<Tool2 />} />
            <Route path="/products/tool-3" element={<Tool3 />} />
            <Route path="/products/tool-4" element={<Tool4 />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* Blog routes */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:category" element={<CategoryLanding />} />
            <Route path="/blog/:category/:slug" element={<PostDetail />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/community" element={<Community />} />
            <Route path="/careers" element={<Careers />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BlogDataProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
