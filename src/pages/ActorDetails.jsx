import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ActorDetails = ({ movie }) => {
  const { actorId } = useParams();
  const [actor, setActor] = useState();

  useEffect(() => {
    async function loadActor() {
      try {
        const response = await axios.get(
          `https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/actors/${actorId}`
        );
        setActor(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadActor();
  }, [actorId]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{actor.name}</h1>
      <h3>Popularity Points: {actor.popularity}</h3>
      <div className="actor-details">
        <img src={actor.image} alt={actor.name} />
        <br />
        character: {actor.character}
      </div>
      <Link to={`/movies/${movie.id}`}>Back to the movie "{movie.title}"</Link>
    </div>
  );
};

export default ActorDetails;
