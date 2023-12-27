import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Projet1 from './component/Projet1';
import Projet2 from './component/Projet2';
import Projet3 from './component/Projet3';
import Projet4 from './component/Projet4';
import Myresume from './component/MyResume';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop';

function App() {
return (
  <>
 <Router>
  <Navbar/>
  <ScrollToTop/>
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projet 1" element={<Projet1 />} />
      <Route path="/projet 2" element={<Projet2 />} />
      <Route path="/projet 3" element={<Projet3 />} />
      <Route path="/projet 4" element={<Projet4 />} />
    </Routes>
  </Router>

  <Footer/>
  </>
)
}

export default App;
