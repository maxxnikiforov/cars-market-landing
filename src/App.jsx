import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Offers } from './components/Offers/Offers';

export const App = () => (
  <div className="page_container">
    <Header>
      <Navigation />
    </Header>
    <Offers />
  </div>
);
