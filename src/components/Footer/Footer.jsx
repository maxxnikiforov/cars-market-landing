import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.scss';

export const Footer = () => (
  <div className="footer">
    <div className="footer__container">
      <Navbar expand="lg" variant="dark" bg="transparent">
        <Container className="footer__links">
          <Navbar.Brand href="#" className="footer__logo" />
          <div className="navigation__links">
            <Navbar.Brand href="#" className="navigation__link">
              Inventory
            </Navbar.Brand>
            <Navbar.Brand href="#" className="navigation__link">
              Financing
            </Navbar.Brand>
            <Navbar.Brand href="#email" className="navigation__link">
              Contacts
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Brand
              href="https://www.facebook.com/ACMonza"
              target="_blank"
              className="navigation__link-fb"
            />
            <Navbar.Brand
              href="https://www.instagram.com/monzamotorsports/"
              target="_blank"
              className="navigation__link-insta"
            />
          </div>
        </Container>
      </Navbar>
    </div>
  </div>
);
