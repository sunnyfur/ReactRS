import { useState } from 'react';
import CardList from '../../components/cards/CardList';
import Search from '../../components/search/Search';
import cards from '../../mock/data.json';

const MainPage = () => {
  const [cardsList, seCardsList] = useState(cards);
  return (
    <>
      <Search />
      <CardList cards={cardsList} />
    </>
  );
};

export default MainPage;
