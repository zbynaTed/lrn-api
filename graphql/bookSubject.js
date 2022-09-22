const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const BookSubjectType = new GraphQLObjectType({
  name: "BookSubject",
  description: "This represents a Book - Subject pair.",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = BookSubjectType;
