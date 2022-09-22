const { Model } = require("objection");

class Book extends Model {
  static get tableName() {
    return "books";
  }

  static get relationMappings() {
    const Author = require("./author");

    return {
      authors: {
        relation: Model.ManyToManyRelation,
        modelClass: Author,
        join: {
          from: "authors.id",
          to: "books.authorId",
        },
      },
    };
  }
}

module.exports = Book;
