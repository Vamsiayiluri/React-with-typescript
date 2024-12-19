import { FaStar } from "react-icons/fa";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  rating?: number;
  onRatingChange: (imdbID: string, rating: number) => void;
};

const MovieCard = ({
  imdbID,
  title,
  year,
  poster,
  rating = 0,
  onRatingChange,
}: MovieCardProps) => {
  return (
    <div className={styles.movieCard}>
      <img src={poster} alt={title} className={styles.imageStyle} />
      <h3>{title}</h3>
      <p>{year}</p>

      <div>
        <label>Rating: </label>
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            color={i < rating ? "gold" : "gray"}
            onClick={() => onRatingChange(imdbID, Number(i + 1))}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
