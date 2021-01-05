const router = require("express").Router();

//importing controllers
const users = require("./user/users");
const movie = require("./movies/movies");
const genre = require("./genre/genres");

//Enabling controllers
router.use("/users", users);
router.use("/movies", movie);
router.use("/genres", genre);

module.exports = router;
