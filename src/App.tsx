import React from 'react';
import './App.scss';
import { Contact } from './components/Contact/Contact';
import { Projects } from './components/Projects/Projects';

export const App: React.FC = () => {
  return (
    <main className="main">
      <header className="header">
        <h3 className="header__title">Welcome, my dear friend</h3>
        <div className="header__info">
          <p className="header__info--name">Andrii</p>
          <div className="header__info--circle" />
        </div>
      </header>

      <Contact />

      <Projects />
    </main>
  );
};
