import { Link } from "react-router";
import "./Movies.css";

const Movies = ({ movies, setSelectedMovieId }) => {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="line-after">
            <img src={movie.thumbnail} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <Link
              to={`/movies/${movie.id}`}
              onClick={() => setSelectedMovieId(movie.id)}
            >
              Browse Movies Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
