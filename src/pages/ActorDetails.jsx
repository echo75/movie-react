import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ActorDetails = () => {
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
    <div>
      <h1>{actor.name}</h1>
      <h2>{actor.popularity}</h2>
      <div className="actor-details">
        <img src={actor.image} alt={actor.name} />
        character: {actor.character}
      </div>
      <Link to={`/movies/${movieId}`}>Back to Overview</Link>
    </div>
  );
};

export default ActorDetails;
