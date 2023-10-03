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
