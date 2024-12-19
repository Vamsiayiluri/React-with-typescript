import React from "react";
import styles from "./MovieSearch.module.css";
type MovieSearchProps = {
  searchQuery: string;
  onSearchQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const MovieSearch = ({
  searchQuery,
  onSearchQueryChange,
  onSearch,
}: MovieSearchProps) => {
  return (
    <div className={styles.searchStyle}>
      <input
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={onSearchQueryChange}
        className={styles.search}
      />
      <button className={styles.button} onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default MovieSearch;
