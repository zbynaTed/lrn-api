const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = require("graphql");

const BookType = require("./book");

const BookAuthor = require("../database/models/bookAuthor");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This represents an author. ",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    firstName: { type: GraphQLNonNull(GraphQLString) },
    middleName: { type: GraphQLString },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    books: {
      type: GraphQLList(BookType),
      resolve: async (author) => {
        return await BookAuthor.query()
          .select("bookAuthors.*", "books.*")
          .join("books", "bookAuthors.bookId", "books.id")
          .where("authorId", author.id);
      },
    },
  }),
});

module.exports = AuthorType;
