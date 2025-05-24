// src/App.tsx actualizado
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importación de páginas
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import StructuralEngineering from "./pages/StructuralEngineering";
import Geosciences from "./pages/Geosciences";
import Computing from "./pages/Computing";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/servicios/ingenieria-estructural" element={<StructuralEngineering />} />
          <Route path="/servicios/geociencias" element={<Geosciences />} />
          <Route path="/servicios/computacion" element={<Computing />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;