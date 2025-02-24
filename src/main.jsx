import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import ActorDetails from "./pages/ActorDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function Main() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
            <Movies movies={movies} setSelectedMovie={setSelectedMovie} />
          }
        />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails setSelectedMovie={setSelectedMovie} />}
        />
        <Route
          path="/actor/:actorId"
          element={<ActorDetails movie={selectedMovie} />}
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
