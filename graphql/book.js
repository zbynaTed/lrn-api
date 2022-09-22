const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");

const BookAuthorType = require("./bookAuthor");
const BookSubjectType = require("./bookSubject");

const BookAuthor = require("../database/models/bookAuthor");
const BookSubject = require("../database/models/bookSubject");

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This represents a book written by an author. ",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLNonNull(GraphQLString) },
    subtitle: { type: GraphQLNonNull(GraphQLString) },
    year: { type: GraphQLNonNull(GraphQLInt) },
    authors: {
      type: GraphQLList(BookAuthorType),
      resolve: async (book) =>
        await BookAuthor.query()
          .select("bookAuthors.*", "authors.*")
          .join("authors", "bookAuthors.authorId", "authors.id")
          .where("bookId", book.id),
    },
    subjects: {
      type: GraphQLList(BookSubjectType),
      resolve: async (book) =>
        await BookSubject.query()
          .select("bookSubjects.*", "subjects.*")
          .join("subjects", "bookSubjects.subjectId", "subjects.id")
          .where("bookId", book.id),
    },
  }),
});

module.exports = BookType;
