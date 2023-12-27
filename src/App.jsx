import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Projet1 from './Projet1';
import Projet2 from './Projet2';
import Home from './Home';
function App() {
return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projet 1" element={<Projet1 />} />
      <Route path="/projet 2" element={<Projet2 />} />
    </Routes>
  </Router>

  </>
)
}

export default App;
