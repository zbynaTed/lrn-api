const config = require("config");

const logger = require("./logger");

const port = process.env.PORT || config.get("port");

module.exports = function (app) {
  app.listen(port, () => logger.info(`Server is running on port ${port}`));
};
