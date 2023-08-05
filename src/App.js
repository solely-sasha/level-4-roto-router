import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import "./App.css"


import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    
 <BrowserRouter>
<Navbar/>
 <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/about' element={<About />}/>
   <Route path='/services' element={<Services/>}/>
   <Route path='/contact' element={<Contact/>}/>
   

 </Routes>
</BrowserRouter>

  )
}
export default App;
