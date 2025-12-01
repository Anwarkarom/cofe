import React from "react";
import Container from "react-bootstrap/Container";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer mt-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span>© {new Date().getFullYear()} CoffeeAgadir - Café & Boissons / CoffeeAgadir أغادير - قهوة ومشروبات.</span>
        <span className="small">
          {t('orderByPhone')}:{" "}
          <a href="tel:+212528000000" className="text-decoration-underline">
            +212 5 28 00 00 00
          </a>{" "}
          • {t('whatsappSupported')}
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
