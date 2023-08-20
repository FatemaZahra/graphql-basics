export const typeDefs = `#graphql
  type Game {
     id: ID!
     title: String!
     platform: [String!]! 
     reviews: [Review!]
  }
  type Review {
      id: ID!
      rating: Int!
      content: String!
      game: Game!
      author: Author!
  }
  type Author {
      id: ID!
      name: String!
      verified: Boolean!
      reviews: [Review!]
  }
  type Query {
      reviews: [Review]
      review(id: ID!): Review
      games: [Game]
      game(id: ID!): Game
      authors: [Author]
      author(id: ID!): Author
  }
  type Mutation {
      addGame(game: AddGameInput!): Game
      deleteGame(id: ID!): [Game]
  }
  input AddGameInput {
      title: String!
      platform: [String!]!
  }
`;

// scalar types we can use: int, float, string, boolean, ID --objects/serialize strings
// !(exclamation mark)--> required field i.e. not allowed to be null
// the elements inside the array can be nullable if there is no exclamation mark inside the array.
// entrypoints using Query
