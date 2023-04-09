import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { getAnime, getAnimes, getFullAnime } from '../../api/api';
import CardFull from '../../components/card/CardFull';

import CardAnime from '../../components/cards/CardAnime';
import CardList from '../../components/cards/CardList';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';
import Search from '../../components/search/Search';

import { CardTypeAnime } from '../../types/types';

const MainPage = () => {
  const [cardsList, setCardsList] = useState<CardTypeAnime[]>([]);
  const [searchText, setSearchText] = useState<string>(localStorage.getItem('searchString') || '');
  const [isLoading, setIsLoading] = useState(true);
  const [currentId, setCurrentId] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    const fetching = async () => {
      let data;
      if (searchText) {
        data = await getAnime(searchText, controller);
      } else {
        data = await getAnimes(controller);
      }
      if (data) {
        setCardsList(data);
      }
      setIsLoading(false);
    };
    try {
      fetching();
    } catch (error) {
      console.error(error);
    }

    return () => {
      controller.abort();
    };
  }, [searchText]);

  const handleSubmit = (search: string) => {
    setSearchText(search);
    localStorage.setItem('searchString', search);
  };
  const handleClick = (id: number) => {
    setCurrentId(id);
  };
  const handleClose = () => {
    setCurrentId(null);
  };
  return (
    <>
      <Search searchText={searchText} onSubmit={handleSubmit} />
      {cardsList && (
        <CardList>
          {cardsList.map((card) => (
            <CardAnime key={card.mal_id} card={card} onClick={handleClick} />
          ))}
        </CardList>
      )}
      {!isLoading && !cardsList.length && <>no data to display</>}
      {isLoading && <Loader />}
      {currentId && (
        <Message onClick={handleClose}>
          <CardFull id={currentId} />
        </Message>
      )}
    </>
  );
};

export default MainPage;
