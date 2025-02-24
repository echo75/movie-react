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
    <div className="container">
      <h1>Movies</h1>
      <div className="genre">
        <button onClick={() => navigate("/")}>Go to Home</button>
        <button onClick={() => setSelectedGenre("all")}>All</button>
        <button onClick={() => setSelectedGenre("action")}>Action</button>
        <button onClick={() => setSelectedGenre("crime")}>Crime</button>
        <button onClick={() => setSelectedGenre("drama")}>Drama</button>
        <button onClick={() => setSelectedGenre("superhero")}>Superhero</button>
        <button onClick={() => setSelectedGenre("western")}>Western</button>
      </div>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id} className="line-after">
            <img src={movie.thumbnail} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p className="capitalize">{movie.genre}</p>
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
