import React from 'react';
import App from './App';
// import './index.css';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { PreloadedState } from 'redux';
import { RootState, store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}

console.log({ preloadedState: window.__PRELOADED_STATE__ });
const storeCurr = store(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;
hydrate(
  <Provider store={storeCurr}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
