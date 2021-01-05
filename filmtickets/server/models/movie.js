const mongoose=require('mongoose');
const Joi = require('joi');
const{genreSchema,validateGenre}=require('./genre');

//const{genreSchema} = require( path.resolve( __dirname, "./genre.js" ) );


const Movie=mongoose.model('Movie',new mongoose.Schema({
    movieName:{
        type:String,
        unique:true,
        required:true
    },
    releaseDate:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    ratings:{
        type:Number
    },
    genreName:{
        type:String,
        required:true
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
}));



function validateMovies(movie){
    const schema={
        movieName:Joi.string().min(1).max(50).required(),
        releaseDate:Joi.required(),
        duration:Joi.required(),
        genreName: Joi.required(),
        ratings:Joi.required()
        };
        return Joi.validate(movie,schema);
}





module.exports.Movie=Movie;
module.exports.validateMovies=validateMovies;