import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import StartPage from './components/StartPage/StartPage';
import Themes from './components/Themes/Themes';
import Game from './components/Game/Game';
import About from './components/AboutPage/About';
import Rules from './components/Rules/Rules';

import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
