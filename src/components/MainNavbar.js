import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

function MainNavbar() {
  const { totals } = useCart();
  const { language, setLanguage, t } = useLanguage();

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="navbar-custom"
      sticky="top"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 10, 7, 0.95), rgba(40, 22, 16, 0.95), rgba(10, 5, 3, 0.95))',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(197, 139, 91, 0.3)',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-custom">
          <div className="d-flex align-items-center">
            <div className="brand-icon">
              <span role="img" aria-label="coffee">☕</span>
            </div>
            <span className="brand-text">CoffeeAgadir</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="navbar-toggler-custom" />
        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="align-items-lg-center">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">
              {t('home')}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu" className="nav-link-custom">
              {t('menu')}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">
              {t('about')}
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/order"
              className="nav-link-custom d-flex align-items-center gap-2"
            >
              <span>{t('order')}</span>
              {totals.totalItems > 0 && (
                <Badge bg="warning" text="dark" className="cart-badge">
                  {totals.totalItems}
                </Badge>
              )}
            </Nav.Link>
            <NavDropdown title={language.toUpperCase()} id="language-nav-dropdown" className="nav-dropdown-custom">
              <NavDropdown.Item onClick={() => setLanguage('fr')} className="dropdown-item-custom">
                🇫🇷 Français
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setLanguage('ar')} className="dropdown-item-custom">
                🇲🇦 العربية
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setLanguage('en')} className="dropdown-item-custom">
                🇺🇸 English
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
