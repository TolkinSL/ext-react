import React, { Suspense } from 'react';
import { Counter } from './components/Counter';
import './index.scss';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export default function App() {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <br />
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <br />
      <p>Hello React 17</p>
      <Counter />
    </div>
  );
}
