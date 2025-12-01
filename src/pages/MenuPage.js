import React from "react";
import MenuGrid from "../components/MenuGrid";
import { useLanguage } from "../context/LanguageContext";

function MenuPage() {
  const { t } = useLanguage();

  return (
    <>
      <header className="mb-3">
        <h1 className="fw-semibold">{t('menu')}</h1>
        <p style={{ color: "#f6e5d6b3" }}>
          Café chaud, boissons glacées, rafraîchissements aux fruits et mocktails. Appuyez sur{" "}
          <strong>Personnaliser & ajouter</strong> puis dirigez-vous vers la page Commande pour envoyer
          vos détails de livraison.
        </p>
      </header>
      <MenuGrid />
    </>
  );
}

export default MenuPage;
