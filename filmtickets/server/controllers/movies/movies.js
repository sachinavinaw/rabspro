/**
 * @author:Himanshu Bhadri
 * @CreatedOn:2020/12/29
 * @Reponsiblity :To add,update,delete the movies in online movie system
 *
 */

const express = require("express");
const router = express.Router();
const { Movie, validateMovies } = require("../../models/movie");
const { Genre } = require("../../models/genre");
const{upload}=require('../../utils/imgStorage');
var fs = require('fs');
var path = require('path');

//route to get all the movies
router.get("/", async (req, res, next) => {
  try {
    const movie=await Movie.find();
    res.send(movie);
    //res.render('app',{items:movie});
  } catch (ex) {
    next(ex);
  }
});

//route to get the particular movie
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.find({ movieName: req.params.id });
    if (movie.length == null) return res.status(404).send("Invalid Movie");
    res.send(movie);
  } catch (ex) {
    next(ex);
  }
});

//route to update a particular movie
router.put("/:id", async (req, res, next) => {
  try {
    const result = validateMovies(req.body);
    if (result.error)
      return res.status(400).send(result.error.details[0].message);
    var movie = await Movie.find({ movieName: req.params.id });
    if (movie.length == 0) return res.status(404).send("Invalid Movie");
    const genre = await Genre.find({ genreName: req.body.genreName });
    if (genre.length == 0) return res.status(404).send("Invalid Genre");
    var movieupdate = await Movie.findOneAndUpdate(
      { movieName: req.params.id },
      {
        movieName: req.body.movieName,
        releaseDate: req.body.releaseDate,
        duration: req.body.duration,
         ratings: req.body.ratings,
        genreName: req.body.genreName,
        img: {
          data: fs.readFileSync(path.join(AppBasePath , 'movieImages' , req.file.filename)),
          contentType: 'image/png'
      }
      }
    );
    res.send(movieupdate);
  } catch (ex) {
    next(ex);
  }
});

//Add a movie
router.post('/', upload.single('image'), async(req, res, next) => {
  try{
    const result=validateMovies(req.body);
    if(result.error)  return res.status(400).send(result.error.details[0].message);
    const genre=await Genre.find({genreName:req.body.genreName});
    if(genre.length==0) return res.status(404).send("Invalid Genre");
    if(req.body.latest){
      //Add entry into latest movie table
    }
    var movie= new Movie({
      movieName: req.body.movieName,
      releaseDate: req.body.releaseDate,
      duration:req.body.duration,
      ratings: req.body.ratings,
      genreName:req.body.genreName,
      img: {
          data: fs.readFileSync(path.join(AppBasePath , 'movieImages' , req.file.filename)),
          contentType: 'image/png'
      }
    });
    movie=await movie.save();
    res.send(movie);
   //
    //
}catch (ex) {
    next(ex);
  }
});

//delete a movie
router.delete("/:id", async (req, res, next) => {
  try {
    var movie = await Movie.find({ movieName: req.params.id });
    if (movie.length == 0) return res.status(404).send("Invalid Movie");
    const moviedelete = await Movie.findOneAndDelete({
      movieName: req.params.id,
    });
    res.send(moviedelete);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
