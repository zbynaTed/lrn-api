const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const BookAuthorType = new GraphQLObjectType({
  name: "BookAuthor",
  description: "This represents a Book - Author pair.",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    authorId: { type: GraphQLNonNull(GraphQLInt) },
    bookId: { type: GraphQLNonNull(GraphQLInt) },
    firstName: { type: GraphQLNonNull(GraphQLString) },
    middleName: { type: GraphQLString },
    lastName: { type: GraphQLNonNull(GraphQLString) },
  }),
});

module.exports = BookAuthorType;
