import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { fetchMovies } from "../store/movieSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/movies");
  };
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    dispatch(fetchMovies(""));

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("searchQuery");
    navigate("/");
  };

  return (
    <div className={styles.loginContainer}>
      {!isLoggedIn && (
        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
      )}
      {isLoggedIn && (
        <button className={styles.loginButton} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Login;
