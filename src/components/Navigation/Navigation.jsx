import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navigation.scss';

export const Navigation = () => (
  <div className="navigation">
    <Container>
      <Navbar expand="lg" variant="dark" bg="transparent">
        <Container>
          <Navbar.Brand href="#" className="header__logo" />
          <div className="navigation__links">
            <Navbar.Brand href="#questions" className="navigation__link">
              Inventory
            </Navbar.Brand>
            <Navbar.Brand href="#questions" className="navigation__link">
              Financing
            </Navbar.Brand>
            <Navbar.Brand href="#email" className="navigation__link">
              Contacts
            </Navbar.Brand>
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
    </Container>
  </div>
);
