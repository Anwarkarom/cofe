import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLanguage } from "../context/LanguageContext";

function HeroSection() {
  const { t } = useLanguage();

  // Custom hero image - Agadir city
  const backgroundImage = "/hero.jpg";

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay">
        <Row className="g-4">
          <Col lg={7}>
            <div className="hero-badge mb-3">
              <span>Livraison rapide de café / توصيل سريع للقهوة</span>
              <span>•</span>
              <span>Ouvert 7 jours / مفتوح 7 أيام</span>
            </div>
            <h1 className="hero-title mb-3">
              {t('heroTitle')}
              <br />
              {t('heroSubtitle').split('.')[0]}
            </h1>
            <p className="hero-subtitle mb-4">
              {t('heroSubtitle')}
            </p>

            <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
              <Button
                as={Link}
                to="/menu"
                size="lg"
                className="btn-coffee-primary px-4"
              >
                {t('browseMenu')}
              </Button>
              <Button
                as={Link}
                to="/order"
                variant="outline-light"
                size="lg"
                className="btn-coffee-outline px-4"
              >
                {t('buildOrder')}
              </Button>
            </div>

            <div className="d-flex flex-wrap gap-4">
              <div>
                <div className="hero-stat">25+ </div>
                <div className="hero-stat-label">{t('artisanDrinks')}</div>
              </div>
              <div>
                <div className="hero-stat">30–45 min</div>
                <div className="hero-stat-label">{t('averageDelivery')}</div>
              </div>
              <div className="hero-highlight-pill">
                <span>{t('freeDeliveryOver')} 150 MAD</span>
              </div>
            </div>
          </Col>
          <Col
            lg={5}
            className="d-none d-lg-flex align-items-end justify-content-end"
          >
            {/* Empty column just to let background image breathe on large screens */}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default HeroSection;
