import React from 'react';
import { CardType } from '../../types/types';
import styles from './card.module.scss';

interface Props {
  card: CardType;
}
const Card = ({ card }: Props) => {
  return (
    <div className={styles.card}>
      <p>{card.date}</p>
      <img className={styles.img} alt={card.name} src={card.img} />
      <p className={styles.category}>{card.category} </p>
      <p className={styles.name}>{card.name} </p>
      <p className={styles.author}>{card.author} </p>
      <p className={styles.cost}>
        {card.cost}ETH (<span className={styles.costUSD}>USDT:{card.costUSD}</span>)
      </p>

      <button type="button" className={styles.but}>
        Live now
      </button>
    </div>
  );
};

export default Card;
