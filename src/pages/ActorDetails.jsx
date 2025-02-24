import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ActorDetails = ({ movie }) => {
  const { actorId, movieId } = useParams();
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

  console.log(actor);

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
        Character in the movie: {actor.character}
      </div>
      <Link to={`/movies/${movieId}`}>Back to Overview</Link>
    </div>
  );
};

export default ActorDetails;
