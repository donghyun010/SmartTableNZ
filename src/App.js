import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";


function App() {
  return (
    <Router basename="/SmartTableNZ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products*" element={<ProductsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
