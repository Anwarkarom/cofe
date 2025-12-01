import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLanguage } from "../context/LanguageContext";

function AboutPage() {
  const { t } = useLanguage();

  return (
    <section>
      <Row className="g-4">
        <Col md={6}>
          <h1 className="fw-semibold mb-3">{t('aboutTitle')}</h1>
          <p style={{ color: "#f6e5d6b3" }}>
            {t('aboutText1')}
          </p>
          <p style={{ color: "#f6e5d6b3" }}>
            {t('aboutText2')}
          </p>
          <p style={{ color: "#f6e5d6b3" }}>
            {t('aboutFocus')}
          </p>
          <ul>
            <li>{t('freshBeans')}</li>
            <li>{t('carefulPackaging')}</li>
            <li>{t('simpleOrdering')}</li>
          </ul>
          <p style={{ color: "#f6e5d6b3", marginTop: "1rem" }}>
            📍 <strong>Agadir, Maroc</strong> - Livraison dans toute la ville / توصيل في جميع أنحاء المدينة
          </p>
        </Col>
        <Col md={6}>
          <div
            style={{
              borderRadius: "1.25rem",
              overflow: "hidden",
              border: "1px solid rgba(208,158,99,0.28)"
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop"
              alt="Café traditionnel marocain à Agadir / Moroccan coffee bar in Agadir"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default AboutPage;
