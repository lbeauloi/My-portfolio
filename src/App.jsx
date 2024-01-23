import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './component/Home';
import Navbar from './component/Navbar';
import TechTalks from './component/TechTalks'; 

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/techtalks" element={<TechTalks />} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <p className="mobile-message">Mobile and tablet versions are currently being modified, come back later!</p>
    </Router>
  )
}

export default App;
