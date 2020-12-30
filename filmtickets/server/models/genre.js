const mongoose=require('mongoose');
const Joi=require('joi');


const genreSchema= new mongoose.Schema({
    name:String
});
const Genre=mongoose.model('Genre',genreSchema);

function validateGenre(genre){
    //console.log(movie);
    const schema ={
        name:Joi.string().min(1).max(20)
        };
        return Joi.validate(genre,schema);

}

module.exports.Genre=Genre;
module.exports.genreSchema=genreSchema;
module.exports.validateGenre=validateGenre;