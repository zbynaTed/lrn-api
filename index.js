const express = require("express");

const app = express();
app.use(express.json());

require("./startup//db")();
require("./startup/cors")(app);
require("./startup/graphql")(app);
require("./startup/server")(app);
