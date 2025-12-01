import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLanguage } from "../context/LanguageContext";

const features = [
  {
    title: "Torréfié ce matin / محمص هذا الصباح",
    description:
      "Nous travaillons avec des torréfacteurs locaux et moulons à la demande pour des tasses lumineuses et aromatiques. / نعمل مع محامص محليين ونطحن عند الطلب لكؤوس مشرقة وعطرة."
  },
  {
    title: "Expérience axée sur la livraison / تجربة تركز على التوصيل",
    description:
      "Optimisé pour l'emporter et la livraison avec un emballage isolé pour que les boissons arrivent parfaites. / محسن للأخذ والتوصيل مع تغليف معزول حتى تصل المشروبات مثالية."
  },
  {
    title: "Commandez à votre façon / اطلب بطريقتك",
    description:
      "Appelez-nous, envoyez WhatsApp, ou passez commande via le site web. Zéro friction. / اتصل بنا، أرسل واتساب، أو اطلب عبر الموقع. لا احتكاك."
  }
];

function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="mt-5">
      <Row className="align-items-center g-4">
        <Col md={6}>
          <h2 className="fw-semibold mb-3">
            Fabriqué comme un café,
            <br />
            livré comme une app.
          </h2>
          <p className="text-muted mb-4" style={{ color: "#f6e5d6b3" }}>
            CoffeeAgadir apporte l'expérience de votre café préféré à la maison. Grains frais,
            recettes de barista, et boissons aux fruits glacées, livrées rapidement et avec
            soin.
          </p>
        </Col>
        <Col md={6}>
          <Row className="g-3">
            {features.map((f) => (
              <Col xs={12} key={f.title}>
                <div className="feature-card p-3">
                  <h5 className="mb-1">{f.title}</h5>
                  <p className="mb-0" style={{ color: "#f6e5d6b0" }}>
                    {f.description}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default FeaturesSection;
