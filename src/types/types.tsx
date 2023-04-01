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

export enum Currency {
  usdt = 'USDT',
  eth = 'ETH',
}
