import { useEffect, useState } from 'react';
import { getFullAnime } from '../../api/api';
import { CardTypeAnimeFull } from '../../types/types';
import Loader from '../loader/Loader';
import styles from './cardFull.module.scss';

interface Props {
  id: number;
}
const CardFull = ({ id }: Props) => {
  const [card, setCard] = useState<CardTypeAnimeFull | null>();
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetching = async () => {
      try {
        const getCard = await getFullAnime(id);
        setCard(getCard);
      } catch {
        setError(true);
      }
    };
    fetching();
  }, [id]);
  if (error) return <>Data not found</>;
  if (card) {
    return (
      <div className={styles.card}>
        <img className={styles.img} alt={card.title} src={card.images.webp.large_image_url} />
        <div>
          <h2>{card.title} </h2>
          <p className={styles.score}>
            <strong>Score: </strong>
            {card.score}
          </p>
          <p>
            <strong>Rating: </strong>
            {card.rating}
          </p>
          <p>
            <strong>Studios: </strong>
            {card.studios.map((studio) => studio.name).join(' ')}
          </p>

          <p>
            <strong>Genres: </strong>
            {card.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p>
            <strong>Duration: </strong>
            {card.duration}
          </p>
          <p>
            <strong>Popularity: </strong>
            {card.popularity}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.card}>
      <Loader />
    </div>
  );
};

export default CardFull;
