import { useEffect, useState } from 'react';
import CardList from '../../components/cards/CardList';
import Loader from '../../components/loader/Loader';
import Search from '../../components/search/Search';
import cards from '../../mock/data.json';
import { CardType } from '../../types/types';

const MainPage = () => {
  const [cardsList, setCardsList] = useState<CardType[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchString = localStorage.getItem('searchString');
    if (searchString) {
      setSearchText(searchString);
    }
  }, []);
  useEffect(() => {
    if (searchText) {
      fetch(`https://api.jikan.moe/v4/anime?letter=${searchText}`)
        .then((res) => res.json())
        .then((res) => console.log(res.data));
    } else
      fetch('https://api.jikan.moe/v4/top/anime')
        .then((res) => res.json())
        .then((res) => console.log(res.data));
  }, [searchText]);

  const handleSubmit = (search: string) => {
    setSearchText(search);
    localStorage.setItem('searchString', search);
  };
  return (
    <>
      <Search searchText={searchText} onSubmit={handleSubmit} />
      {cards && <CardList cards={cardsList} />}
      {isLoading && <Loader />}
    </>
  );
};

export default MainPage;
