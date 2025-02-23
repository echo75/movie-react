import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = ({ setSelectedMovieId }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function loadMovie() {
      try {
        const response = await axios.get(
          `https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/${movieId}`
        );
        setMovie(response.data);
        setSelectedMovieId(movieId); // Setze den ausgewählten Film
      } catch (error) {
        console.log(error);
      }
    }
    loadMovie();
  }, [movieId, setSelectedMovieId]);

  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
    return;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movieId}</p>
      <img src={movie.thumbnail} alt={movie.title} />
      <p>{movie.genre}</p>
      Actors:
      <ul>
        {movie.cast.map((cast) => (
          <li key={cast.id}>
            <Link to={`/actor/${cast.id}`}>{cast.character}</Link>
          </li>
        ))}
      </ul>
      <Link to={`/movies`}>Back to Overview</Link>
    </div>
  );
};

export default MovieDetails;
