import React, { useMemo, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import CartSummary from "../components/CartSummary";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_PHONE = "+212774614690"; // Moroccan WhatsApp / phone number for Agadir

function OrderPage() {
  const { items, totals, clearCart } = useCart();
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    deliveryTime: t('asSoonAsPossible')
  });
  const [feedback, setFeedback] = useState(null);

  const disabled = items.length === 0;

  const orderText = useMemo(() => {
    if (items.length === 0) return "";

    const lines = [];
    lines.push("Nouvelle commande de livraison depuis le site CoffeeAgadir / طلب توصيل جديد من موقع CoffeeAgadir أغادير:");
    lines.push("");
    lines.push("Articles / العناصر:");
    items.forEach((item) => {
      lines.push(
        `- ${item.name} x${item.quantity} = ${item.quantity * item.unitPrice} MAD`
      );
    });
    lines.push("");
    lines.push(`Total: ${totals.totalPrice} MAD`);
    lines.push("");
    lines.push("Détails client / تفاصيل العميل:");
    lines.push(`Nom: ${form.name || "—"}`);
    lines.push(`Téléphone: ${form.phone || "—"}`);
    lines.push(`Adresse: ${form.address || "—"}`);
    lines.push(`Heure de livraison préférée: ${form.deliveryTime || "—"}`);
    lines.push("");
    if (form.notes) {
      lines.push("Notes / ملاحظات:");
      lines.push(form.notes);
    }
    return lines.join("\n");
  }, [items, totals.totalPrice, form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderText) return;

    const encoded = encodeURIComponent(orderText);
    const waUrl = `https://wa.me/${WHATSAPP_PHONE.replace(
      /[^0-9]/g,
      ""
    )}?text=${encoded}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");

    setFeedback({
      type: "success",
      message:
        "We opened WhatsApp with your order. Please review and send it to complete the request."
    });

    // Optional: you can clear cart AFTER user actually confirms, but for demo we keep it.
    // clearCart();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(orderText);
      setFeedback({
        type: "info",
        message:
          "Order details copied. You can paste them into a phone message or any app."
      });
    } catch (err) {
      setFeedback({
        type: "danger",
        message: "Could not copy to clipboard. Please copy manually."
      });
    }
  };

  return (
    <>
      <header className="mb-3">
        <h1 className="fw-semibold">{t('deliveryDetails')}</h1>
        <p style={{ color: "#f6e5d6b3" }}>
          {t('deliveryDescription')}
        </p>
      </header>

      {feedback && (
        <Alert
          variant={feedback.type}
          onClose={() => setFeedback(null)}
          dismissible
        >
          {feedback.message}
        </Alert>
      )}

      <Row className="g-4">
        <Col md={5}>
          <CartSummary />
        </Col>
        <Col md={7}>
          <div className="order-form-card p-3">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="orderName">
                <Form.Label>{t('yourName')} *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Sara El Amrani / مثال: سارة العمراني"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="orderPhone">
                <Form.Label>{t('phoneNumber')} *</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="e.g. +212 6 ... / مثال: +212 6 ..."
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
                <Form.Text className="text-muted">
                  Nous utilisons ceci uniquement pour confirmer et livrer votre commande. / نستخدم هذا فقط لتأكيد وتوصيل طلبك.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="orderAddress">
                <Form.Label>{t('deliveryAddress')} *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Rue, bâtiment, étage, appartement, ville / الشارع، المبنى، الطابق، الشقة، المدينة"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="orderTime">
                <Form.Label>{t('preferredDeliveryTime')}</Form.Label>
                <Form.Select
                  name="deliveryTime"
                  value={form.deliveryTime}
                  onChange={handleChange}
                >
                  <option>{t('asSoonAsPossible')}</option>
                  <option>{t('within30Minutes')}</option>
                  <option>{t('within1Hour')}</option>
                  <option>{t('scheduleForLater')}</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="orderNotes">
                <Form.Label>{t('notes')}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Code porte, glace supplémentaire, sans sucre, instructions de sonnerie... / رمز الباب، ثلج إضافي، بدون سكر، تعليمات الرنين..."
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                />
              </Form.Group>

              <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
                <div className="small" style={{ color: "#f6e5d6b3" }}>
                  {t('orderTotal')}:{" "}
                  <strong>{totals.totalPrice} MAD</strong>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <Button
                    type="submit"
                    disabled={disabled}
                    className="btn-coffee-primary"
                  >
                    {t('sendOrderViaWhatsapp')}
                  </Button>
                  <Button
                    type="button"
                    variant="outline-light"
                    className="btn-coffee-outline"
                    disabled={disabled}
                    onClick={handleCopy}
                  >
                    {t('copyOrderText')}
                  </Button>
                </div>
              </div>

              {disabled && (
                <p className="small mt-2 text-warning">
                  {t('addDrinksFirst')}
                </p>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default OrderPage;
