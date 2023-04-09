export type CardType = {
  id: number;
  category: string;
  author?: string;
  cost: string;
  costUSD: string;
  name: string;
  likesCount?: number;
  img: string;
  date?: string;
};
export type CardTypeAnime = {
  mal_id: number;
  title: string;
  title_english: string;
  score: number;
  images: img;
};
export type CardTypeAnimeFull = {
  mal_id: number;
  title: string;
  title_english: string;
  score: number;
  rating: string;
  studios: details[];
  genres: details[];
  images: img;
  duration: string;
  popularity: number;
  status: string;
};

type img = {
  jpg: { image_url: string };
  webp: { image_url: string; large_image_url: string };
};

type details = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
export enum Currency {
  usdt = 'USDT',
  eth = 'ETH',
}
