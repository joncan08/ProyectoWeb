import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OrderPage from "./components/OrderPage";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer /> {/* Agrega el footer aquí */}
    </Router>
  );
}
export default App;
