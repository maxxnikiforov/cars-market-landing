import React from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import './Offers.scss';
import { cars } from '../../utils/cars';

export const Offers = () => (
  <div className="offers">
    <Container>
      <h2 className="offers__title">Current offers</h2>
    </Container>
    <Container className="offers__selectors">
      <Form.Select className="offers__select">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Select className="offers__select">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Select className="offers__select">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Select className="offers__select">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <div className="offers__total">{`${cars.length} cars`}</div>
    </Container>

    <div className="offers__show">
      <Container>
        <Row>
          {cars.map(car => (
            (
              <Col sm={6} lg={4} xl={3} style={{ gap: '10px' }}>
                <Card
                  key={car.id}
                  sclassName="offers__show-card"
                  style={{ width: '275px' }}
                >
                  <Card.Img variant="top" src={car.img} />
                  <Card.Body>
                    <span className="offers__show-year">{car.year}</span>
                    <span className="offers__show-title">
                      {` ${car.model}`}
                    </span>
                    <Card.Text className="offers__show-details">
                      {`${car.way} km | ${car.trans} | ${car.fuel}`}
                    </Card.Text>
                    <Card.Text className="offers__show-price">
                      {`$${car.price}`}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          ))}
        </Row>
      </Container>
    </div>
  </div>
);
