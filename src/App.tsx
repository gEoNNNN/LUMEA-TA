import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import ProgramrarePage from './pages/ProgramrarePage'
import Maroc from "./pages/MarocTripPage"
import China from "./pages/ChinaTripPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/calendar" element={<ProgramrarePage />} />
        <Route path="/maroc" element={<Maroc />} />
        <Route path="/china" element={<China />} />
      </Routes>
    </Router>
  )
}

export default App