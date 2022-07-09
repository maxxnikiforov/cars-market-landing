import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Email.scss';

export const Email = () => (
  <div className="email">
    <Container className="email__container" id="email">
      <div className="email__text">
        <h3 className="email__text-title">
          Haven&apos;t found a suitable vehicle?
        </h3>
        <p className="email__text-paragraph">
          Sign up for our newsletter and be the
          first to know when we publish new vehicle offers.
        </p>
      </div>
      <Form
        className="email__form"
        onSubmit={event => event.preventDefault()}
      >
        <Form.Group className="mb-3" variant="dark" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="email__input"
          />
        </Form.Group>
        <Button variant="light" type="submit" className="email__button">
          Subscribe now
        </Button>
      </Form>
    </Container>
  </div>
);
