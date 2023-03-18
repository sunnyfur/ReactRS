import React from 'react';
import './App.css';
import CardList from './pages/cardList/CardList';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage/AboutPage';
import NotFound from './pages/notFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CardList />
        </main>
      </div>
    );
  }
}

export default App;
