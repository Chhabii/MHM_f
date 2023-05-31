import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar'

import Stressometer from './Containers/Stressometer/Stressometer';
import DoctorAI from './Containers/DoctorAI/DoctorAI';
import Recommend from './Containers/Recommend/Recommend';
import './App.css';
import  Header  from '../src/Components/header/Header';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import {Navigate} from 'react-router-dom';

import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

axios.defaults.withCredentials = true;


import Blog from './Containers/Blog/Blog';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/stressometer" element={user ? <Stressometer /> : <Navigate to="/login" />} />
        <Route path="/recommend" element={user ? <Recommend /> : <Navigate to="/login" />} />
        <Route path="/doctorai" element={user ? <DoctorAI /> : <Navigate to="/login" />} />
        <Route path="/blog" element={user ? <Blog />:<Navigate to="/login" />} />
        
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </Router>
    </div>
  );
}

export default App; 
