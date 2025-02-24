import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Movies.css";

const Movies = ({ movies, setSelectedMovieId }) => {
  const [selectedGenre, setSelectedGenre] = useState("all");
  const navigate = useNavigate();

  const filteredMovies =
    selectedGenre === "all"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div>
      <button onClick={() => navigate("/")}>Go to Home</button>
      <button onClick={() => setSelectedGenre("all")}>All</button>
      <button onClick={() => setSelectedGenre("action")}>Action</button>
      <button onClick={() => setSelectedGenre("crime")}>Crime</button>
      <button onClick={() => setSelectedGenre("drama")}>Drama</button>
      <button onClick={() => setSelectedGenre("superhero")}>Superhero</button>
      <button onClick={() => setSelectedGenre("western")}>Western</button>
      <h1>Movies</h1>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id} className="line-after">
            <img src={movie.thumbnail} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <Link
              to={`/movies/${movie.id}`}
              onClick={() => setSelectedMovieId(movie.id)}
            >
              Details of the movie
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
