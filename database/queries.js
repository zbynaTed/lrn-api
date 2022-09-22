const Book = require("./models/book");
const Author = require("./models/author");
const BookAuthor = require("./models/bookAuthor");

async function fetchBooks() {
  try {
    return await Book.query().select();
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAuthors() {
  try {
    return await Author.query().select();
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchBook(id) {
  const book = await Book.query().findById(id);
  const authors = await BookAuthor.query()
    .select("bookAuthors.*", "authors.*")
    .join("authors", "bookAuthors.authorId", "authors.id")
    .where("bookId", id);
  book.authors = authors;
  return book;
}

const queries = { fetchBooks, fetchBook, fetchAuthors };

module.exports = queries;
