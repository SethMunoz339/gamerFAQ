import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      name
      email
      questions {
        _id
        questionText
        questionCreatedAt
      }
    }
  }
`;

export const QUERY_GAMES = gql`
query Games {
  games {
    URL
    _id
    developer
    genres
    name
    releaseDate
  }
}
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      questions {
        _id
        gameId
        questionText
        questionAuthor
        questionCreatedAt
      }
    }
  }
`;

export const QUERY_QUESTIONS = gql `
query questions($gameId: ID!) {
  questions(gameId: $gameId) {
    _id
    questionText
    questionAuthor
    questionCreatedAt
    gameId
    comments {
      commentText
      commentAuthor
      commentCreatedAt
    }
  }
}
`;