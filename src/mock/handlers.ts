import { rest } from 'msw';
import animes from './animes.json';
import animeSearch from './animeSearch.json';
import animeFull from './animeFull.json';

export const handlers = [
  rest.get('https://api.jikan.moe/v4/top/anime', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(animes));
  }),
  rest.get('https://api.jikan.moe/v4/anime?letter=Bleach', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(animeSearch));
  }),
  rest.get('https://api.jikan.moe/v4/anime/51535/full', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(animeFull));
  }),
];
