import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SmartTableNZ/" element={<HomePage />} />
        <Route path="/SmartTableNZ/pricing" element={<PricingPage />} />
        <Route path="/SmartTableNZ/contact" element={<ContactPage />} />
        <Route path="/SmartTableNZ/products" element={<ProductsPage />} />
        <Route path="/SmartTableNZ*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
