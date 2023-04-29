import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Html from './components/html/Html';

const storeCurr = store({});

export const render = async (
  url: string | Partial<Location>,
  style: string,
  options: RenderToPipeableStreamOptions
) => {
  const preloadedState = storeCurr.getState();
  return renderToPipeableStream(
    <Html style={style} preloadedState={preloadedState}>
      <Provider store={storeCurr}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    options
  );
};
