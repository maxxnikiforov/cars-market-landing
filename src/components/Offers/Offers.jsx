import React, { useState } from 'react';
import classNames from 'classnames';
import {
  Container,
  Form,
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import './Offers.scss';
import { cars } from '../../utils/cars';

export const Offers = () => {
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedModel, setSelectedModel] = useState('Model');
  const [selectedMaker, setSelectedMaker] = useState('Make');
  const [selectedMileage, setSelectedMileage] = useState('Mileage');
  const [available, setAvailable] = useState(false);
  const [sortByDate, setSortByDate] = useState(false);

  function reset() {
    setSelectedModel('Model');
    setSelectedYear(0);
    setSelectedMileage('Mileage');
    setSelectedMaker('Make');
    setAvailable(false);
    setSortByDate(false);
  }

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

    models = models.filter(model => makerModels.includes(model));
  }

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

  if (sortByDate) {
    filteredCars = cars.sort((c1, c2) => c1.date - c2.date);
  } else {
    filteredCars = cars.sort((c1, c2) => c2.date - c1.date);
  }

  if (available) {
    filteredCars = cars.filter(car => !car.sold);
  } else {
    filteredCars = [...cars];
  }

  if (selectedYear !== 0) {
    filteredCars = filteredCars.filter(car => car.year === selectedYear);
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
          <Button
            variant="light"
            className="offers__total"
            onClick={reset}
          >
            {`${cars.length} cars`}
          </Button>
        </Container>
        <Container>
          <div className="offers__checkBox">
            <label htmlFor="check1">
              <Form.Check
                id="check1"
                checked={available}
                onChange={() => setAvailable(!available)}
                className="offers__checkBox-item"
                label="Instantly available vehicles"
              />
            </label>
            <label htmlFor="check2">
              <Form.Check
                id="check2"
                checked={sortByDate}
                onChange={() => setSortByDate(!sortByDate)}
                className="offers__checkBox-item"
                label="Publication date (ascending)"
              />
            </label>
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
