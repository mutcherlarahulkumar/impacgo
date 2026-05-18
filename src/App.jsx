import Pos from './pages/Pos'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import D365 from './pages/D365';
import AppDevelopment from "./pages/appDevelopment";
import ImplementationServices from './components/ImplementationServices';
import DevelopmentServices from './components/DevelopmentServices';
import AMS from './components/AMS';
import ContactUs from './components/ContactUs';

// New service pages from PPT
import ERPNext from './pages/erpnext';
import MES from './pages/mes';
import Integrations from './pages/integrations';
import Consulting from './pages/Consulting';
import AIAutomation from './pages/Aiautomation';

// New product pages from PPT
import DairyFarm from './pages/Dairyfarm';
import WorkTask from './pages/Worktask';
import ConstructionPlanner from './pages/Constructionplanner';
import AXMigration from "./pages/Axmigration";

// Blog
import BlogIndex from "./pages/blog/BlogIndex";
import AX2012EndOfSupport2028Blog from "./pages/blog/AX2012EndOfSupport2028Blog";

// Power Platform cluster (4 pages)
import PowerApps from "./pages/Powerapps";
import PowerAutomate from "./pages/PowerAutomate";
import PowerBI from "./pages/Powerbi";
import AIBuilder from "./pages/Aibuilder";  
import D365Manufacturing from "./pages/D365manufacturing";
import D365Distribution from "./pages/D365distribution";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Existing service pages */}
        <Route path="/services/pos" element={<Pos />} />
        <Route path="/services/d365" element={<D365 />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/implementation" element={<ImplementationServices />} />
        <Route path="/services/development" element={<DevelopmentServices />} />
        <Route path="/services/ams" element={<AMS />} />

        {/* New service pages from PPT */}
        <Route path="/services/erpnext" element={<ERPNext />} />
        <Route path="/services/mes" element={<MES />} />
        <Route path="/services/integrations" element={<Integrations />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/ai-automation" element={<AIAutomation />} />

        {/* AX Migration */}
        <Route path="/services/ax-migration" element={<AXMigration />} />

        {/* Power Platform cluster */}
        <Route path="/services/power-apps" element={<PowerApps />} />
        <Route path="/services/power-automate" element={<PowerAutomate />} />
        <Route path="/services/power-bi" element={<PowerBI />} />
        <Route path="/services/ai-builder" element={<AIBuilder />} />

        {/* Product pages */}
        <Route path="/products/dairy-farm" element={<DairyFarm />} />
        <Route path="/products/work-task" element={<WorkTask />} />
        <Route path="/products/construction-planner" element={<ConstructionPlanner />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/ax-2012-end-of-support-2028-india" element={<AX2012EndOfSupport2028Blog />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* Industry pages (vertical) */}
        <Route path="/industries/manufacturing" element={<D365Manufacturing />} />
        <Route path="/industries/distribution" element={<D365Distribution />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App