import { useState } from 'react';
import { useGetAnimesQuery } from '../../api/api';
import CardFull from '../../components/card/CardFull';
import CardAnime from '../../components/cards/CardAnime';
import CardList from '../../components/cards/CardList';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';
import Search from '../../components/search/Search';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { animeActions } from '../../store/reducers/animeSlice';

const MainPage = () => {
  const { searchText } = useAppSelector((state) => state.anime);
  const { data: cardsList, isLoading, isError } = useGetAnimesQuery(searchText);
  const [currentId, setCurrentId] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const handleSubmit = (search: string) => {
    dispatch(animeActions.setSearch(search));
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
      {(isError || (!isLoading && !cardsList?.length)) && <>no data to display</>}
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
