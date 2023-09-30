const typeDefs = `
  type Profile {
    _id: ID
    name: String!
    email: String!
    password: String!
    questions: [Question]
  }

  type Game {
    _id: ID!
    name: String!
    developer: String
    releaseDate: Date
    genres: [String]
    URL: String
    questions: [Question]
  }
  
  scalar Date 



  type Auth {
    token: ID!
    profile: Profile
  }

  type Question {
    _id: ID
    questionText: String!
    questionAuthor: String!
    questionCreatedAt: Date
    gameId: ID
    comments: [Comment]
  }

  type Comment {
    commentText: String!
    commentAuthor: String!
  }

  type Query {
    games: [Game]!
    profile(profileId: ID!): Profile
    me: Profile
    game(gameId: ID!): Game
  }


  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGame(name: String!, developer: String, releaseDate: Date, genres: [String]): Game!
    removeProfile: Profile
    deleteGame(gameId: ID!): Game
    addQuestion(gameId: ID!, questionText: String!): Question!
    deleteQuestion(questionId: ID!): Question
    addComment(questionId: ID!, commentText: String!): Question!
    removeComment(questionId: ID!, commentId: ID!): Question
  }
`;

module.exports = typeDefs;