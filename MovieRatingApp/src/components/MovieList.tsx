import MovieCard from "./MovieCard";

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

type MovieListProps = {
  movies: Movie[];
  ratedMovies: { [key: string]: number };
  onRatingChange: (imdbID: string, rating: number) => void;
};

const MovieList = ({ movies, ratedMovies, onRatingChange }: MovieListProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          imdbID={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          rating={ratedMovies[movie.imdbID]}
          onRatingChange={onRatingChange}
        />
      ))}
    </div>
  );
};

export default MovieList;
