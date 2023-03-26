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

export type ErrorsCard = {
  name?: string;
  category?: string;
  cost?: string;
  img?: string;
  date?: string;
  curr?: string;
  agreem?: string;
};
