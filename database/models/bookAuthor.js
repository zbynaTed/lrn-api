const { Model } = require("objection");

class BookAuthor extends Model {
  static get tableName() {
    return "bookAuthors";
  }
}

module.exports = BookAuthor;
