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

        {/* New product pages from PPT */}
        <Route path="/products/dairy-farm" element={<DairyFarm />} />
        <Route path="/products/work-task" element={<WorkTask />} />
        <Route path="/products/construction-planner" element={<ConstructionPlanner />} />
        <Route path="/services/ax-migration" element={<AXMigration />} />
        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App