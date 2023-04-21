import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store()}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
