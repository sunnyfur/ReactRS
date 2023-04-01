import { useEffect, useState } from 'react';
import CardList from '../../components/cards/CardList';
import Search from '../../components/search/Search';
import cards from '../../mock/data.json';
import { CardType } from '../../types/types';

const MainPage = () => {
  const [cardsList, setCardsList] = useState<CardType[]>([]);
  useEffect(() => setCardsList(cards), []);
  return (
    <>
      <Search />
      <CardList cards={cardsList} />
    </>
  );
};

export default MainPage;
