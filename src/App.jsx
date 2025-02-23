import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

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

  console.log(movies);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.thumbnail} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
