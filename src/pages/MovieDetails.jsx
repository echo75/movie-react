import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function loadMovie() {
      try {
        const response = await axios.get(
          `https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/${movieId}`
        );
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadMovie();
  }, []);

  console.log(movie);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movieId}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>
        {movie.tagline}
        <br />
      </p>
      Actors:
      <ul>
        {movie.cast.map((cast) => (
          <li key={cast.id}>
            <Link to={`/actor/${movieId}/${cast.id}`}>{cast.character}</Link>
          </li>
        ))}
      </ul>
      <Link to={`/movies`}>Back to Overview</Link>
    </div>
  );
};

export default MovieDetails;
