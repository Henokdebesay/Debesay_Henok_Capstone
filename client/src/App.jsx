import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import EnglandMap from './Pages/EnglandMap';
import SpainMap from './Pages/SpainMap';
import ItalyMap from './Pages/ItalyMap';
import Navbar from './Components/Navbar';


function App() {
 return (
   <div className='container'>
   <Router>
     <Routes >
       <Route path="/" element={<Navbar />} />
       <Route path="/england" element={<EnglandMap />} />
       <Route path="/spain" element={<SpainMap />} />
       <Route path="/italy" element={<ItalyMap />} />
     </Routes>
   </Router>   
   </div>
  
 );
}


export default App;