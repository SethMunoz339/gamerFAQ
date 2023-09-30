import { Link, useParams } from "react-router-dom";
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
            <h3>
              Game Site:
              <a href={game.URL} target="_blank">
                {game.URL}
              </a>
            </h3>
            <h3>Developed By: {game.developer}</h3>
            <h3>Genres: {game.genres}</h3>
            <h5>Release Date: {game.releaseDate}</h5>
            <button>
              <Link to={`/single-game/${game._id}`}>Ask/View Qs</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetGames;
