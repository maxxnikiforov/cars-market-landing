import React, { useState } from 'react';
import classNames from 'classnames';
import {
  Container,
  Form,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import './Offers.scss';
import { cars } from '../../utils/cars';

export const Offers = () => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedModel, setSelectedModel] = useState('Model');
  const [selectedMaker, setSelectedMaker] = useState('Make');
  const [selectedMileage, setSelectedMileage] = useState('Mileage');

  let models = [];

  for (let i = 0; i < cars.length; i += 1) {
    const model = cars[i].model.split(' ')[1];

    if (!models.includes(model)) {
      models.push(model);
    }
  }

  if (selectedMaker !== 'Make') {
    const makerModels = [];

    for (let i = 0; i < cars.length; i += 1) {
      if (cars[i].model.split(' ')[0] === selectedMaker) {
        makerModels.push(cars[i].model.split(' ')[1]);
      }
    }

    // eslint-disable-next-line no-console
    console.log(makerModels);

    models = models.filter(model => makerModels.includes(model));
  }

  // eslint-disable-next-line no-console
  console.log(models);

  const factorys = [];

  for (let i = 0; i < cars.length; i += 1) {
    const make = cars[i].model.split(' ')[0];

    if (!factorys.includes(make)) {
      factorys.push(make);
    }
  }

  const years = [];

  for (let i = 0; i < cars.length; i += 1) {
    const year = +cars[i].year;

    if (!years.includes(year)) {
      years.push(year);
    }
  }

  let filteredCars = [];

  if (selectedYear !== 0) {
    filteredCars = cars.filter(car => car.year === selectedYear);
  } else {
    filteredCars = [...cars];
  }

  if (selectedMaker !== 'Make') {
    filteredCars
    = filteredCars.filter(car => car.model.split(' ')[0] === selectedMaker);
  }

  if (selectedModel !== 'Model') {
    filteredCars
    = filteredCars.filter(car => car.model.split(' ')[1] === selectedModel);
  }

  if (selectedMileage !== 'Mileage') {
    filteredCars
    = filteredCars.filter(car => car.way < selectedMileage);
  }

  return (
    <>
      <div className="offers">
        <Container>
          <h2 className="offers__title">Current offers</h2>
        </Container>
        <Container className="offers__selectors">
          <Form.Select
            className="offers__select"
            name="Year"
            placeholder="Year"
            value={selectedYear}
            onChange={event => setSelectedYear(+event.target.value)}
          >
            <option value={0}>Year</option>
            {years.sort().map(year => <option value={year}>{year}</option>)}
          </Form.Select>
          <Form.Select
            className="offers__select"
            name="Make"
            value={selectedMaker}
            onChange={(event) => {
              setSelectedMaker(event.target.value);
              setSelectedModel('Model');
            }}
          >
            <option value="Make">Make</option>
            {factorys.map(model => <option value={model}>{model}</option>)}
          </Form.Select>
          <Form.Select
            className="offers__select"
            name="Model"
            value={selectedModel}
            onChange={event => setSelectedModel(event.target.value)}
          >
            <option value="Model">Model</option>
            {models.map(model => <option value={model}>{model}</option>)}
          </Form.Select>
          <Form.Select
            className="offers__select"
            name="Mileage"
            value={selectedMileage}
            onChange={event => setSelectedMileage(event.target.value)}
          >
            <option>Mileage</option>
            <option value="100000">less 100.000</option>
            <option value="50000">less 50.000</option>
            <option value="30000">less 30.000</option>
          </Form.Select>
          <div className="offers__total">{`${cars.length} cars`}</div>
        </Container>
        <Container>
          <div className="offers__checkBox">
            <Form.Check
              className="offers__checkBox-item"
              label="Instantly available vehicles"
            />
            <Form.Check
              className="offers__checkBox-item"
              label="Publication date (ascending)"
            />
          </div>
        </Container>

        <div className="offers__show">
          <Container>
            <Row>
              {filteredCars.map(car => (
                (
                  <Col sm={6} lg={4} xl={3} style={{ gap: '10px' }}>
                    <Card
                      key={car.id}
                      className="offers__show-card"
                      style={{ width: '275px' }}
                    >
                      <div className="offers__show-imgbox">
                        <Card.Img
                          variant="top"
                          src={car.img}
                        />
                        {car.sold && (
                          <span className={classNames(
                            { 'offers__show-sold': car.sold },
                          )}
                          >
                            Sold
                          </span>
                        )}
                        {car.date < 5 && (
                          <span className={classNames(
                            { 'offers__show-new': +car.date < 5 },
                          )}
                          >
                            new
                          </span>
                        )}
                      </div>
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
    </>
  );
};
