import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import "./Movies.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await axios.get(
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/"
        );
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    loadMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Ladezeichen anzeigen, wenn die Filme noch geladen werden
  }

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
            <Link to={`/movies/${movie.id}`}>Browse Movies Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
