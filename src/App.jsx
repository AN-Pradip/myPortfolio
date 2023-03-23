import { Link, BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

import Introduction from "./pages/Introduction"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  const [navigate, setNavigate] = useState("Introduction");

  function Navigate(name){
    document.getElementById("Header-Container-Executable").innerHTML = "";
    setNavigate(name)
  }

  return (
      <HashRouter basename="/myPortfolio">
          <Header location={navigate} />
          <nav className="navBar">
            <Link className="" to="/" onClick={ () => Navigate("Introduction")}> Introduction </Link>
            <Link className="" to="/réalisations" onClick={ () => Navigate("Réalisations")}> Réalisations  </Link>
            <Link className="" to="/compétences" onClick={ () => Navigate("Compétences")}> Compétences </Link>
            <Link className="" to="/contact" onClick={ () => Navigate("Contact")}> Contact </Link>
          </nav>
            <Routes>
              <Route path="/" element={<Introduction />}/>
              <Route path="/réalisations" element={<Projects />}/>
              <Route path="/compétences" element={<Skills />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          <Footer />
      </HashRouter>
  );
}

export default App;
