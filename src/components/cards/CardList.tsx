import React from 'react';
import Card from './Card';
import styles from './cardList.module.scss';
import { CardType } from '../../types/types';

interface Props {
  cards: CardType[];
}

class CardList extends React.Component<Props> {
  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    );
  }
}

export default CardList;
