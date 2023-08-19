import { ApolloServer } from "@apollo/server"; // set up server, configure it and tell Apollo how to handle different types of data and respond to querries.
import { startStandaloneServer } from "@apollo/server/standalone"; // just to start the server.

// db
import db from "./_db.js";
// types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_parent, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_parent, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_parent, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
  },
};
// server setup
const server = new ApolloServer({
  typeDefs, // definitions of the different types of data we want to expose on our graphs {what the graph looks like in terms of data type that we have and the entry point} -->map
  resolvers, // resolvers -- handle request/queries for that data based on schema and type
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server ready at port", 4000);
