import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import FeaturesPage from "./pages/FeaturesPage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";

// Wrapper to manage body class dynamically
function BodyClassController() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.body.classList.add("home-page");
      document.body.classList.remove("plain-page");
    } else {
      document.body.classList.add("plain-page");
      document.body.classList.remove("home-page");
    }
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/SmartTableNZ">
      <BodyClassController />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Features*" element={<FeaturesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
