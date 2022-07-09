import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Offers } from './components/Offers/Offers';
import { Email } from './components/Email/Email';
import { Questions } from './components/Questions/Questions';
import { Footer } from './components/Footer/Footer';

export const App = () => (
  <div className="page_container">
    <Header>
      <Navigation />
    </Header>
    <Offers />
    <Email />
    <Questions />
    <Footer />
  </div>
);
