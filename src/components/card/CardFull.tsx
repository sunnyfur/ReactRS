import Loader from '../loader/Loader';
import styles from './cardFull.module.scss';
import { useGetFullAnimeQuery } from '../../api/api';

interface Props {
  id: number;
}
const CardFull = ({ id }: Props) => {
  const { data: card, isError, isLoading } = useGetFullAnimeQuery(id);
  return (
    <>
      {isError && <>Data not found</>}
      {isLoading && (
        <div className={styles.card}>
          <Loader />
        </div>
      )}
      {card && (
        <div className={styles.card} data-test-id="cardFull">
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
      )}
    </>
  );
};

export default CardFull;
