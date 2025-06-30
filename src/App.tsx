import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import BlogPage from "./pages/BlogPage"
import ProgramrarePage from './pages/ProgramrarePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/calendar" element={<ProgramrarePage />} />
      </Routes>
    </Router>
  )
}

export default App