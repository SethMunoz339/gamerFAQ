import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

import { QUERY_GAMES } from "../utils/queries";

const GetGames = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { gameId } = useParams();

  const { loading, data } = useQuery(QUERY_GAMES, {
    // pass URL parameter
    variables: { gameId: gameId },
  });

  const game = data?.game || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {game.map((game, index) => (
          <div key={index}>
            <h1>{game.name}</h1>
            <h2>{game.developer}</h2>
            <h3>{game.genre}</h3>
            <h5>{game.releaseDate}</h5>
            <h5>{game.URL}</h5>
          </div>
        ))}{" "}
      </h3>
    </div>
  );
};

export default GetGames;
