import { useEffect, useState } from 'react';
import { getAnime, getAnimes } from '../../api/api';
import CardList from '../../components/cards/CardList';
import Loader from '../../components/loader/Loader';
import Search from '../../components/search/Search';
import cards from '../../mock/data.json';
import { CardType } from '../../types/types';

const MainPage = () => {
  const [cardsList, setCardsList] = useState<CardType[]>([]);
  const [searchText, setSearchText] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchString = localStorage.getItem('searchString');
    if (searchString) {
      setSearchText(searchString);
      console.log(getAnime(searchString));
    } else {
      console.log(getAnimes());
    }
  }, []);

  const handleSubmit = (search: string) => {
    setSearchText(search);
    localStorage.setItem('searchString', search);
    if (search) {
      setSearchText(search);
      console.log(getAnime(search));
    } else {
      console.log(getAnimes());
    }
  };
  return (
    <>
      <Search searchText={searchText} onSubmit={handleSubmit} />
      {cards && <CardList cards={cardsList} />}
      {!cards && <>no data to display</>}
      {isLoading && <Loader />}
    </>
  );
};

export default MainPage;
