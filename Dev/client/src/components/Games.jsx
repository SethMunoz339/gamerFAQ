import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

import { QUERY_GAMES } from "../utils/queries";

const GetGames = () => {
  const { loading, data } = useQuery(QUERY_GAMES);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <div className="card-header bg-dark text-light p-2 m-0">
        {data?.games.map((game, index) => (
          <div key={index}>
            <h1>{game.name}</h1>
            <h3>{game.URL}</h3>
            <h3>{game.developer}</h3>
            <h3>{game.genre}</h3>
            <h5>{game.releaseDate}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetGames;
