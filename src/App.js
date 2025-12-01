import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="app-root d-flex flex-column min-vh-100">
        <MainNavbar />
        <main className="flex-grow-1">
          <Container className="py-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
