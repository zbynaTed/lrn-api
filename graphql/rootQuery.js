const { GraphQLObjectType, GraphQLList, GraphQLInt } = require("graphql");

const queries = require("../database/queries");

const BookType = require("./book");
const AuthorType = require("./author");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    book: {
      type: BookType,
      description: "A book.",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => queries.fetchBook(args.id),
    },
    books: {
      type: new GraphQLList(BookType),
      description: "List of all books.",
      resolve: () => queries.fetchBooks(),
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "List of all authors.",
      resolve: () => queries.fetchAuthors(),
    },
  }),
});

module.exports = RootQueryType;
