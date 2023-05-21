import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar'

import Stressometer from './Containers/Stressometer/Stressometer';
import DoctorAI from './Containers/DoctorAI/DoctorAI';
import Recommend from './Containers/Recommend/Recommend';
import './App.css';
import  Header  from '../src/Components/header/Header';

// import Blog from './Blog';

function App() {
  return (
    <div>
    
   
    
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/stressometer"  element={<Stressometer />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/doctorai" element={<DoctorAI />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App; 
