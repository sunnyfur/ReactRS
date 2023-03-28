import React from 'react';
import Card from './Card';
import styles from './cardList.module.scss';
import { CardType } from '../../types/types';

interface Props {
  cards: CardType[];
}

const CardList = ({ cards }: Props) => {
  return (
    <div className={styles.wrapper}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
