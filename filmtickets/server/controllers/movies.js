/**
 * @author:Himanshu Bhadri
 * @CreatedOn:2020/12/20
 * @Reponsiblity :To add,update,delete the movies in online movie system
 * 
 */

const express=require('express');
const router=express.Router();
const{Movie,validateMovies}=require('../models/movie');

//route to get all the movies
router.get('/',async(req,res)=>{
   const movie=await Movie.find();
   res.send(movie);
});


//route to get the particular movie
router.get('/:id',async(req,res)=>{
    const movie=await Movie.find({movieName:req.params.id});
    if(movie==null) return res.status(404).send("Invalid Movie");
    res.send(movie);
 });


//route to update a particular movie
 router.put('/:id',async(req,res)=>{
    const result=validateMovies(req.body);
    if(result.error)  return res.status(400).send(result.error.details[0].message);
    var movie=await Movie.find({movieName:req.params.id});
    if(movie.length==0) return res.status(404).send("Invalid Movie");
    var movieupdate=await Movie.findOneAndUpdate(
                {movieName:req.params.id},
                {
                movieName:req.body.movieName,
                releaseDate:req.body.releaseDate,
                duration:req.body.duration,
                new:true           
                });
    res.send(movieupdate);   
 });

//Add a movie
router.post('/',async(req,res)=>{
    const result=validateMovies(req.body);
    if(result.error)  return res.status(400).send(result.error.details[0].message);
    var movie= new Movie({
        movieName:req.body.movieName,
        releaseDate:req.body.releaseDate,
        duration:req.body.duration    
    });
    movie=await movie.save();
    res.send(movie);
});

//delete a movie
router.delete('/:id',async(req,res)=>{ 
        var movie=await Movie.find({movieName:req.params.id});
        if(movie.length==0) return res.status(404).send("Invalid Movie");
        const moviedelete=await Movie.findOneAndDelete( {movieName:req.params.id});
        res.send(moviedelete);  
});


module.exports=router;