import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = ({ setSelectedMovie }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function loadMovie() {
      try {
        const response = await axios.get(
          `https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/${movieId}`
        );
        setMovie(response.data);
        setSelectedMovie(response.data); // Setze den ausgewählten Film
      } catch (error) {
        console.log(error);
      }
    }
    loadMovie();
  }, [movieId, setSelectedMovie]);

  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <p>{movie.tagline}</p>
      <img src={movie.image} alt={movie.title} />
      <p>
        Category: <span className="capitalize">{movie.genre}</span>
      </p>
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
