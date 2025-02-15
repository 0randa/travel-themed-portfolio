import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/links" element={<Links />} /> */}
    </Routes>
  </Router>
  )

}

export default App;
