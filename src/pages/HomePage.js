import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import MenuGrid from "../components/MenuGrid";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/LanguageContext";

function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <section className="mt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="fw-semibold mb-1">Sélections du jour / اختيارات اليوم</h2>
            <p className="mb-0" style={{ color: "#f6e5d6b3" }}>
              Quelques favoris que nos habitués adorent. Voir le menu complet pour plus.
            </p>
          </div>
          <Button
            as={Link}
            to="/menu"
            size="sm"
            variant="outline-light"
            className="btn-coffee-outline"
          >
            Voir le menu complet / عرض القائمة كاملة
          </Button>
        </div>
        <MenuGrid showCategoryFilter={false} limit={6} />
      </section>
    </>
  );
}

export default HomePage;
