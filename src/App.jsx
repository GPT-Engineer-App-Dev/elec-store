import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Products from "./pages/Products.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Router>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/products" element={<Products searchQuery={searchQuery} />} />
      </Routes>
    </Router>
  );
}

export default App;