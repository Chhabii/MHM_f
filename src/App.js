import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar'

import Stressometer from './Containers/Stressometer/Stressometer';
import DoctorAI from './Containers/DoctorAI/DoctorAI';
import Recommend from './Containers/Recommend/Recommend';
// import Blog from './Blog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/stressometer" element={<Stressometer />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/doctorai" element={<DoctorAI />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </Router>
  );
}

export default App; 
