// src/components/ItemCustomizerModal.js
import React, { useEffect, useMemo, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { useLanguage } from "../context/LanguageContext";

function ItemCustomizerModal({ show, onHide, item, onAdd }) {
  const { t } = useLanguage();
  const [selectedSizeId, setSelectedSizeId] = useState(null);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState([]);

  useEffect(() => {
    if (item) {
      // default to first size if available
      if (item.sizes && item.sizes.length > 0) {
        setSelectedSizeId(item.sizes[0].id);
      } else {
        setSelectedSizeId(null);
      }
      setSelectedAddOnIds([]);
    }
  }, [item]);

  const selectedAddOns = useMemo(() => {
    if (!item || !item.addOns) return [];
    return item.addOns.filter((a) => selectedAddOnIds.includes(a.id));
  }, [item, selectedAddOnIds]);

  const unitPrice = useMemo(() => {
    if (!item) return 0;
    let base = item.price;
    if (item.sizes && selectedSizeId) {
      const size = item.sizes.find((s) => s.id === selectedSizeId);
      if (size) base += size.priceModifier || 0;
    }
    const addOnsTotal = selectedAddOns.reduce(
      (sum, a) => sum + (a.price || 0),
      0
    );
    return base + addOnsTotal;
  }, [item, selectedSizeId, selectedAddOns]);

  if (!item) return null;

  const handleToggleAddOn = (id) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleAdd = () => {
    const sizeDef =
      item.sizes && selectedSizeId
        ? item.sizes.find((s) => s.id === selectedSizeId)
        : null;

    onAdd({
      sizeId: sizeDef ? sizeDef.id : null,
      sizeLabel: sizeDef ? sizeDef.label : null,
      addOns: selectedAddOns,
      unitPrice
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>
          Customize {item.name}{" "}
          <Badge bg="secondary" className="ms-2">
            {item.category}
          </Badge>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light">
        <p className="small text-muted mb-3">{item.description}</p>

        {item.sizes && item.sizes.length > 0 && (
          <div className="mb-3">
            <Form.Label className="fw-semibold">Size</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {item.sizes.map((size) => (
                <Button
                  key={size.id}
                  variant={
                    selectedSizeId === size.id ? "warning" : "outline-light"
                  }
                  size="sm"
                  onClick={() => setSelectedSizeId(size.id)}
                  className="btn-coffee-outline"
                >
                  {size.label}
                  {size.priceModifier > 0 && (
                    <span className="ms-1">
                      (+{size.priceModifier} MAD)
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        )}

        {item.addOns && item.addOns.length > 0 && (
          <div className="mb-3">
            <Form.Label className="fw-semibold">Add-ons</Form.Label>
            <div className="d-flex flex-column gap-1">
              {item.addOns.map((addOn) => (
                <Form.Check
                  key={addOn.id}
                  type="checkbox"
                  id={`addon-${item.id}-${addOn.id}`}
                  label={
                    <>
                      {addOn.label}{" "}
                      {addOn.price > 0 ? (
                        <span className="text-muted">
                          (+{addOn.price} MAD)
                        </span>
                      ) : (
                        <span className="text-muted">(مجاني)</span>
                      )}
                    </>
                  }
                  checked={selectedAddOnIds.includes(addOn.id)}
                  onChange={() => handleToggleAddOn(addOn.id)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="small text-muted">
            Prix par boisson avec options / سعر لكل مشروب مع الخيارات:
          </span>
          <span className="fw-bold fs-5">{unitPrice} MAD</span>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={onHide}>
          Annuler / إلغاء
        </Button>
        <Button className="btn-coffee-primary" onClick={handleAdd}>
          Ajouter à la commande / إضافة للطلب
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ItemCustomizerModal;
