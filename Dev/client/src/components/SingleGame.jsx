import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_GAMES, QUERY_QUESTIONS } from "../utils/queries";
import CommentList from "./CommentList";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";
const SingleGame = () => {
  const { gameId } = useParams();

  // Use the useQuery hook to fetch data for the specific game
  const { loading, data } = useQuery(QUERY_GAMES);
  const {loading: questionLoading, data: questionData, error: questionError} = useQuery(QUERY_QUESTIONS, {
    variables: {gameId: gameId}
  })
  console.log(questionData);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Find the specific game in the data array using gameId
  const game = data.games.find((game) => game._id === gameId);
  console.log(game)
  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h1>{game.name}</h1>
      <h3>
        Game Site:{" "}
        <a href={game.URL} target="_blank" rel="noopener noreferrer">
          {game.URL}
        </a>
      </h3>
      <h3>Developed By: {game.developer}</h3>
      <h3>Genres: {game.genres}</h3>
      <h5>Release Date: {new Date(game.releaseDate).toLocaleDateString()}</h5>
      <QuestionForm gameId={gameId} />
      {questionData?.questions.length ? <QuestionList questions = {questionData.questions} title = {game.name} /> : <p> no questions yet </p> }
    </div>
  );
};

export default SingleGame;
