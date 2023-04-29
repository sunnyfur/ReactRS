import { ReactNode } from 'react';
import { RootState } from '../../store/store';
import { PreloadedState } from 'redux';

type Props = {
  style?: string;
  preloadedState: PreloadedState<RootState>;
  children: ReactNode;
};

const Html = ({ style, preloadedState, children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/leaf_icon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
        {style && <link rel="stylesheet" href={style} />}
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<b>Enable JavaScript to run this app.</b>`,
          }}
        />
        <div id="root">{children}</div>

        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}`,
          }}
        />
      </body>
    </html>
  );
};
export default Html;
