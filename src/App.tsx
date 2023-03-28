import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage/AboutPage';
import NotFound from './pages/notFound/NotFound';
import MainPage from './pages/mainPage/MainPage';
import FormPage from './pages/formPage/FormPage';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
