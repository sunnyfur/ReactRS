import React from 'react';
import './App.scss';
import CardList from './components/cards/CardList';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage/AboutPage';
import NotFound from './pages/notFound/NotFound';
import MainPage from './pages/mainPage/MainPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
