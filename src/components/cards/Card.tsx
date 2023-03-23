import React from 'react';
import { CardType } from '../../types/types';
import styles from './card.module.scss';

interface Props {
  card: CardType;
}
class Card extends React.Component<Props> {
  render() {
    return (
      <div className={styles.card}>
        <img className={styles.img} alt={this.props.card.name} src={this.props.card.img} />
        <p className={styles.category}>{this.props.card.category} </p>
        <p className={styles.name}>{this.props.card.name} </p>
        <p className={styles.author}>{this.props.card.author} </p>
        <p className={styles.cost}>
          {this.props.card.cost}ETH (
          <span className={styles.costUSD}>USDT:{this.props.card.costUSD}</span>)
        </p>

        <button type="button" className={styles.but}>
          Live now{' '}
        </button>
      </div>
    );
  }
}

export default Card;
