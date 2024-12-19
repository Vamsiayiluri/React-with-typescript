import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log(isLoggedIn);
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homePageHeading}>
        Welcome to the Movie Rating App
      </h1>
      <h1> {isLoggedIn} </h1>
      {!isLoggedIn && (
        <p className={styles.homePageText}>
          Login to search and rate your favorite movies.
        </p>
      )}
      {isLoggedIn && (
        <div>
          <p className={styles.homePageText}>
            Search and rate your favorite movies.
          </p>
          <Link to="/movies">
            <button className={styles.homePageButton}>Go to Movies</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;
