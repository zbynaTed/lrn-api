const { Model } = require("objection");

class BookSubject extends Model {
  static get tableName() {
    return "bookSubjects";
  }
}

module.exports = BookSubject;
