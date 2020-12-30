const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("config");
const express = require("express");
const app = express();

//importing controllers
const users = require("./controllers/user/users");
//

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR : JWT Secret key not found");
  logger.error("FATAL ERROR : JWT Secret key not found");
  process.exit(1);
}

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

//Initializing routes
app.use("/users", users);
//

app.use(function (err, req, res, next) {
  logger.error(err.message);
  res.status(500).json({
    message: err.message,
  });

  next();
});

module.exports = app;
