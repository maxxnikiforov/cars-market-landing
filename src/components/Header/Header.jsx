import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
// import { Button } from 'bootstrap';

import './Header.scss';
// import { Container, Navbar } from 'react-bootstrap';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => (
  <div className="header">
    <Navigation />

    <Container className="hesder__container">
      <h1 className="header__title">The right way to get a car</h1>

      <Container>
        <Row>
          <Col xs={7} md={4}>
            <p className="header__text-paragraph">
              Monza Motorsports is a boutique-style dealership
              specializing in premium imports. We offer an advanced
              online vehicle purchasing experience with integrated
              financing and contactless home delivery.
            </p>
          </Col>
          <Col xs={7} md={4}>
            <p className="header__text-paragraph">
              All of our cars come with a 5 day/500 kilometres no-hassle
              exchange option. Since 2012 Monza Motorsports
              has been the benchmark for innovation in the automotive industry.
            </p>
          </Col>
        </Row>
      </Container>
      <Button variant="dark" className="header__button">
        Browse cars
      </Button>
    </Container>
  </div>
);
