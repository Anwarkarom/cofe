import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/LanguageContext";

function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="text-center py-5">
      <h1 className="fw-semibold mb-2">{t('pageNotFound')}</h1>
      <p style={{ color: "#f6e5d6b3" }}>
        {t('pageNotFoundText')}
      </p>
      <Button as={Link} to="/menu" className="btn-coffee-primary mt-2">
        {t('goToMenu')}
      </Button>
    </div>
  );
}

export default NotFoundPage;
