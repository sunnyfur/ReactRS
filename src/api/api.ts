import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { CardTypeAnime, CardTypeAnimeFull, ResponseAnime } from '../types/types';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }),

  endpoints: (builder) => ({
    getAnimes: builder.query<CardTypeAnime[], string>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        if (_arg) {
          const result = await fetchWithBQ(`anime?letter=${_arg}`);
          const data = result.data as ResponseAnime;

          return { data: data.data as CardTypeAnime[] };
        } else {
          const result = await fetchWithBQ(`top/anime`);
          const data = result.data as ResponseAnime;
          return { data: data.data as CardTypeAnime[] };
        }
      },
    }),
    getFullAnime: builder.query<CardTypeAnimeFull, number>({
      query: (id) => `anime/${id}/full`,
      transformResponse: (response: { data: CardTypeAnimeFull }) => response.data,
    }),
  }),
});

export const { useGetAnimesQuery, useGetFullAnimeQuery } = animeApi;
