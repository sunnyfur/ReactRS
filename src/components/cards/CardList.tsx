import React from 'react';
import Card from './Card';
import cards from '../../mock/data.json';
import styles from './cardList.module.scss';

class CardList extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

export default CardList;
