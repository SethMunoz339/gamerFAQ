import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($questionId: ID!, $commentText: String!) {
    addComment(questionId: $questionId, commentText: $commentText) {
      _id
      questionText
      questionAuthor
      questionCreatedAt
      comments {
        _id
        commentText
        commentCreatedAt
      }
    }
  }
`;

export const ADD_QUESTION = gql`
  mutation addQuestion($gameId: ID!, $questionText: String!) {
    addQuestion(gameId: $gameId, questionText: $questionText) {
      _id
      questionText
      questionAuthor
      questionCreatedAt
      gameId
      comments {
        commentText
        commentAuthor
      }
    }
  }
`;

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($questionId: ID!) {
    deleteQuestion(questionId: $questionId) {
      _id
      questionText
      questionAuthor
      questionCreatedAt
      gameId
      comments {
        _id
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($questionId: ID!, $commentId: ID!) {
    removeComment(questionId: $questionId, commentId: $commentId) {
      _id
      questionText
      questionAuthor
      questionCreatedAt
      gameId
      comments {
        _id
        commentText
        commentAuthor
      }
    }
  }
`;
