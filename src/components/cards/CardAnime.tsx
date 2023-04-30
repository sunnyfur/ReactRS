import { CardTypeAnime } from '../../types/types';
import { getColor } from '../../utils/utils';
import styles from './cardAnime.module.scss';

interface Props {
  card: CardTypeAnime;
  onClick: (id: number) => void;
}
const CardAnime = ({ card, onClick }: Props) => {
  const handleClick = () => {
    onClick(card.mal_id);
  };
  return (
    <div className={styles.card} onClick={handleClick} data-test-id="card">
      <img className={styles.img} alt={card.title_english} src={card.images.webp.image_url} />
      <p className={styles.score} style={{ backgroundColor: getColor(card.score) }}>
        {card.score}
      </p>
      <p className={styles.name}>{card.title_english || card.title} </p>
    </div>
  );
};

export default CardAnime;
