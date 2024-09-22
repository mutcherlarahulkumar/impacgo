import Pos from './pages/Pos'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path='/services/pos' element={<Pos />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
