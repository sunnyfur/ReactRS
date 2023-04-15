import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4/top/anime' }),
  endpoints: (builder) => ({
    getSearchAnime: builder.query({
      query: (searchText) => `anime?letter=${searchText}`,
    }),
    getTopAnimes: builder.query({
      query: () => 'top/anime',
    }),
  }),
});

export const { useGetSearchAnimeQuery, useGetTopAnimesQuery } = animeApi;

export const getAnimes = async (controller: AbortController) => {
  try {
    const data = await fetch('https://api.jikan.moe/v4/top/anime', { signal: controller.signal })
      .then((res) => res.json())
      .then((res) => res.data);
    return data;
  } catch (err) {
    if ((<Error>err).name != 'AbortError') throw err;
  }
};
export const getAnime = async (searchText: string, controller: AbortController) => {
  try {
    const data = await fetch(`https://api.jikan.moe/v4/anime?letter=${searchText}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => res.data);
    return data;
  } catch (err) {
    if ((<Error>err).name != 'AbortError') throw err;
  }
};

export const getFullAnime = async (id: number) => {
  try {
    const data = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((res) => res.json())
      .then((res) => res.data);
    return data;
  } catch (err) {
    if ((<Error>err).name != 'AbortError') throw err;
  }
};
