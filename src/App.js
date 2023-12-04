import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Hamburger/Hamburger";
import Skills from "./components/Skills/Skills";
import SlideshowCarousel from "./components/SlideshowCarousel/SlideshowCarousel";
import Projects from './components/Projects/Projects.jsx'
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const [open, setOpen] = useState(false)

  return (

    <div className="App">
      <Router>

        <Navbar
          open={open}
          setOpen={setOpen}
        />

        <Routes>
            
            <Route path='/' element={<Landing />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/skills' element={<SlideshowCarousel />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path='/rep' element={<Rep />} /> */}
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<AboutMe />} />
            {/* <div className="skill-icon-container mb-5">
              
            </div> */}

        </Routes >
      </Router>

    </div>

  );
}

export default App;
