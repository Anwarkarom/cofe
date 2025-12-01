// src/components/CartSummary.js
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

function CartSummary() {
  const { items, updateQuantity, removeItem, totals } = useCart();
  const { t } = useLanguage();

  if (items.length === 0) {
    return (
      <div className="p-3 border rounded" style={{ borderColor: "#3a2519" }}>
        <p className="mb-0 text-muted">
          {t('emptyCart')}
        </p>
      </div>
    );
  }

  return (
    <div className="p-3 border rounded" style={{ borderColor: "#3a2519" }}>
      <h5 className="mb-3">{t('yourDrinks')}</h5>
      <Table borderless size="sm" className="align-middle text-light mb-3">
        <tbody>
          {items.map((item) => (
            <tr key={item.key}>
              <td style={{ minWidth: "140px" }}>
                <div className="fw-semibold">{item.name}</div>
                <div className="small text-muted">{item.category}</div>
                {item.sizeLabel && (
                  <div className="small text-muted">
                    Size: <span className="text-light">{item.sizeLabel}</span>
                  </div>
                )}
                {item.addOns && item.addOns.length > 0 && (
                  <div className="small text-muted">
                    Add-ons:{" "}
                    <span className="text-light">
                      {item.addOns.map((a) => a.label).join(", ")}
                    </span>
                  </div>
                )}
              </td>
              <td className="small" style={{ width: "120px" }}>
                <div className="d-flex align-items-center gap-2">
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="btn-coffee-outline"
                    onClick={() =>
                      updateQuantity(item.key, item.quantity - 1)
                    }
                  >
                    −
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    variant="outline-light"
                    size="sm"
                    className="btn-coffee-outline"
                    onClick={() =>
                      updateQuantity(item.key, item.quantity + 1)
                    }
                  >
                    +
                  </Button>
                </div>
              </td>
              <td className="text-end small">
                {item.unitPrice * item.quantity} MAD
                <div className="text-muted">
                  <small>{item.unitPrice} MAD / unité</small>
                </div>
              </td>
              <td className="text-end" style={{ width: "40px" }}>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none"
                  onClick={() => removeItem(item.key)}
                >
                  ✕
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center">
        <span className="small text-muted">
          {totals.totalItems} {t('itemInCart')}
        </span>
        <span className="fw-semibold fs-5">
          {t('total')}: {totals.totalPrice} MAD
        </span>
      </div>
    </div>
  );
}

export default CartSummary;
