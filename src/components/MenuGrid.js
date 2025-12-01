// src/components/MenuGrid.js
import React, { useMemo, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import menuData from "../data/menu";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import ItemCustomizerModal from "./ItemCustomizerModal";

function MenuGrid({ showCategoryFilter = true, limit }) {
  const [category, setCategory] = useState("All");
  const [activeItem, setActiveItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addItem } = useCart();
  const { t } = useLanguage();

  const categories = useMemo(
    () => [t('all'), ...Array.from(new Set(menuData.map((m) => m.category)))],
    [t]
  );

  const filtered = useMemo(
    () =>
      menuData.filter(
        (item) => category === "All" || item.category === category
      ),
    [category]
  );

  const visibleItems = limit ? filtered.slice(0, limit) : filtered;

  const handleOpenCustomize = (item) => {
    setActiveItem(item);
    setShowModal(true);
  };

  const handleAddFromModal = (config) => {
    if (!activeItem) return;
    addItem(activeItem.id, config);
  };

  return (
    <>
      <section className="mt-4">
        {showCategoryFilter && (
          <div className="mb-3 d-flex flex-wrap gap-2">
            <ButtonGroup>
              {categories.map((cat) => (
                <ToggleButton
                  key={cat}
                  id={`cat-${cat}`}
                  type="radio"
                  variant={cat === category ? "warning" : "outline-light"}
                  name="categories"
                  value={cat}
                  checked={cat === category}
                  onChange={(e) => setCategory(e.currentTarget.value)}
                  size="sm"
                >
                  {cat}
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
        )}

        <Row className="g-4">
          {visibleItems.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <Card className="menu-card h-100 text-light">
                <Card.Img src={item.image} alt={item.name} />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="fs-5">{item.name}</Card.Title>
                    <span className="menu-price">
                      من {item.price} MAD
                    </span>
                  </div>
                  <Card.Text className="mb-2" style={{ color: "#f6e5d6b3" }}>
                    {item.description}
                  </Card.Text>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {item.tags?.map((tag) => (
                      <span className="menu-chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                    <Badge bg="dark" className="border badge-soft">
                      {item.category}
                    </Badge>
                  </div>
                  <Button
                    className="btn-coffee-primary w-100"
                    onClick={() => handleOpenCustomize(item)}
                  >
                    {t('customizeAdd')}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {visibleItems.length === 0 && (
          <p className="mt-3 text-muted">No drinks in this category yet.</p>
        )}
      </section>

      <ItemCustomizerModal
        show={showModal}
        onHide={() => setShowModal(false)}
        item={activeItem}
        onAdd={handleAddFromModal}
      />
    </>
  );
}

export default MenuGrid;
