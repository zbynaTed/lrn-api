const { GraphQLSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const RootQueryType = require("../graphql/rootQuery");

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = function (app) {
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
};
