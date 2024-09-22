import Pos from './pages/Pos'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path='/services/pos' element={<Pos />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
