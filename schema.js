export const typeDefs = `#graphql
  type Game {
     id: ID!
     title: String!
     platform: [String!]! 
  }
  type Review {
      id: ID!
      rating: Int!
      content: String!
  }
  type Author {
      id: ID!
      name: String!
      verified: Boolean!
  }
  type Query {
      reviews: [Review]
      review(id: ID!): Review
      games: [Game]
      game(id: ID!): Game
      authors: [Author]
      author(id: ID!): Author
  }
`;

// scalar types we can use: int, float, string, boolean, ID --objects/serialize strings
// !(exclamation mark)--> required field i.e. not allowed to be null
// the elements inside the array can be nullable if there is no exclamation mark inside the array.
// entrypoints using Query
