import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./store/store";
const MovieRating = lazy(() => import("./pages/MovieRating"));

function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Login />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route
                path="/movies"
                element={
                  <ProtectedRoute>
                    <MovieRating />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </Suspense>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
