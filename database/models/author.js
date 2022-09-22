const { Model } = require("objection");

class Author extends Model {
  static get tableName() {
    return "authors";
  }

  static get relationMappings() {
    const Book = require("./book");

    return {
      books: {
        relation: Model.ManyToManyRelation,
        modelClass: Book,
        join: {
          from: "books.authorId",
          to: "authors.id",
        },
      },
    };
  }
}

module.exports = Author;
