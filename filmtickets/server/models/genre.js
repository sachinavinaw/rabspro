const mongoose=require('mongoose');
const Joi=require('joi');


const genreSchema= new mongoose.Schema({
    genreName:{
        type:String,
        unique:true,
        required:true
    }
});
const Genre=mongoose.model('Genre',genreSchema);

function validateGenre(genre){
    //console.log(movie);
    const schema ={
        genreName:Joi.string().min(1).max(20).required()
        };
        return Joi.validate(genre,schema);

}

module.exports.Genre=Genre;
module.exports.genreSchema=genreSchema;
module.exports.validateGenre=validateGenre;