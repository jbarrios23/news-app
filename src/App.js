import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </Router>

  );
}

export default App;
