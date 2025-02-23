import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Korrigiere den Import
import axios from "axios";
import "./index.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home"; // Stelle sicher, dass dieser Pfad korrekt ist
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import ActorDetails from "./pages/ActorDetails";

function Main() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await axios.get(
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/"
        );
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadMovies();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <Movies movies={movies} setSelectedMovieId={setSelectedMovieId} />
          }
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails setSelectedMovieId={setSelectedMovieId} />}
        />
        <Route
          path="/actor/:actorId"
          element={<ActorDetails movieId={selectedMovieId} />}
        />
      </Routes>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </StrictMode>
);
