import React from 'react';
import CardList from '../../components/cards/CardList';
import Search from '../../components/search/Search';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <Search />
        <CardList />
      </>
    );
  }
}

export default MainPage;
