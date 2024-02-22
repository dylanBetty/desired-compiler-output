const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();

const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
  }
  type Query {
    person(id: ID!): Person
  }
  type Mutation {
    updatePerson(id: ID!, name: String!): Person
  }
`;

let personData = {
  1: { id: "1", name: "Dylan" },
  2: { id: "2", name: "Ewout" },
};

const resolvers = {
  Query: {
    person: (_, { id }) => personData[id],
  },
  Mutation: {
    updatePerson: (_, { id, name }) => {
      personData[id] = { ...personData[id], name };
      return personData[id];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer().then(() => {
  app.listen(
    4000,
    console.log(`Server running on http://localhost:4000${server.graphqlPath}`)
  );
});
