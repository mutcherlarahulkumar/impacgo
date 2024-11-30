import Pos from './pages/Pos'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import D365 from './pages/D365';
import Crm from './pages/Crm';
import ImplementationServices from './components/ImplementationServices';
import DevelopmentServices from './components/DevelopmentServices';
import AMS from './components/AMS';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path='/services/pos' element={<Pos />}/>
        <Route  path='/services/d365' element={<D365 />}/>
        <Route path='/services/crm' element={<Crm />}/>
        <Route path='/services/implementation' element={<ImplementationServices />}/>
        <Route path='/services/development' element={<DevelopmentServices />}/>
        <Route path='/services/ams' element={<AMS />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
