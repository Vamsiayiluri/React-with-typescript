import { useEffect, useState } from "react";
import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/movieSlice";
import { RootState, AppDispatch } from "../store/store";
import styles from "./MovieRating.module.css";
import React from "react";

const MovieRating = () => {
  const dispatch: AppDispatch = useDispatch();
  const { movies } = useSelector((state: RootState) => state.movies);
  const [ratedMovies, setRatedMovies] = useState<{ [key: string]: number }>({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedRatings = localStorage.getItem("ratedMovies");
    const searchedQuery = localStorage.getItem("searchQuery");
    if (searchedQuery) {
      setSearchQuery(searchedQuery);
      dispatch(fetchMovies(searchedQuery));
    }
    if (storedRatings) {
      setRatedMovies(JSON.parse(storedRatings));
    }
  }, []);

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    localStorage.setItem("searchQuery", e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery) {
      dispatch(fetchMovies(searchQuery));
    }
  };

  const handleRatingChange = (imdbID: string, rating: number) => {
    const updatedRatings = { ...ratedMovies, [imdbID]: rating };
    setRatedMovies(updatedRatings);

    localStorage.setItem("ratedMovies", JSON.stringify(updatedRatings));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.Heading}>Movie Rating App</h1>
      <div className={styles.searchContainer}>
        <MovieSearch
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
          onSearch={handleSearch}
        />
      </div>
      <div>
        <MovieList
          movies={movies}
          ratedMovies={ratedMovies}
          onRatingChange={handleRatingChange}
        />
      </div>
    </div>
  );
};

export default MovieRating;
