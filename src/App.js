import React from "react";
import { Container } from "react-bootstrap";
import Landing from "./components/Landing/Landing";
import Navbar from "./components/Hamburger/Hamburger";
import Skills from "./components/Skills/Skills";
import Rep from './components/Rep/Rep'
import SlideshowCarousel from "./components/SlideshowCarousel/SlideshowCarousel";
import Projects from './components/Projects/Projects.jsx'
import AboutMe from "./components/AboutMe/AboutMe.jsx";

function App() {


  return (


    <div className="App">
      <Navbar />
      <Container>

        

        <Landing />

        <Skills />

        <div className="skill-icon-container mb-5">
          <SlideshowCarousel />
        </div>

        <Rep />

        <Projects />

        <AboutMe />

      </Container>
    </div>

  );
}

export default App;
