const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    questions: [Question]
  }

  type Game {
    _id: ID
    name: String
    developer: String
    release: Date
    genres: [String]
    questions: [Question]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    games: [Game]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    removeProfile: Profile
  }
`;

module.exports = typeDefs;