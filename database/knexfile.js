const config = require("config");
const { knexSnakeCaseMappers } = require("objection");

const password = config.get("postgresPassword");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "learn",
      user: "postgres",
      password,
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    ...knexSnakeCaseMappers(),
  },
};
