import React from 'react';
import CardList from '../../components/cards/CardList';
import Search from '../../components/search/Search';
import cards from '../../mock/data.json';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <CardList cards={cards} />
      </>
    );
  }
}

export default MainPage;
