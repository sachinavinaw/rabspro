/**
 * @author:Himanshu Bhadri
 * @CreatedOn:2020/12/31
 * @Reponsiblity :To add,update,delete the genres in online movie system
 * 
 */

const express=require('express');
const router=express.Router();
const{Genre,validateGenre}=require('../models/genre');

//route to get all the genres
router.get('/',async(req,res,next)=>{
    try{
      const genre=await Genre.find();
      res.send(genre);
    }
    catch(ex){
        next(ex);
    }
});


//route to get the particular genre
router.get('/:id',async(req,res)=>{
    try{
    const genre=await Genre.find({genreName:req.params.id});
    if(genre.length==0) return res.status(404).send("Invalid Genre");
    res.send(genre);
    }
    catch(ex){
        next(ex);
    }
 });


//route to update a particular genre
 router.put('/:id',async(req,res,next)=>{
    try{
      const result=validateGenre(req.body);
      if(result.error)  return res.status(400).send(result.error.details[0].message);
      var genre=await Genre.find({genreName:req.params.id});
      if(genre.length==0) return res.status(404).send("Invalid Genre");
      var genreupdate=await Genre.findOneAndUpdate(
                {genreName:req.params.id},
                {
                genreName:req.body.genreName,
                new:true           
                });
      res.send(genreupdate);  
    }
    catch(ex){
      next(ex);
    }

 });

//Add a genre
router.post('/',async(req,res,next)=>{
    try{
    const result=validateGenre(req.body);
    if(result.error)  return res.status(400).send(result.error.details[0].message);
    var genre= new Genre({
        genreName:req.body.genreName
    });
    genre=await genre.save();
    res.send(genre);
}
   catch(ex){
     next(ex);
   }
});

//delete a genre
router.delete('/:id',async(req,res,next)=>{ 
  try{
        var genre=await Genre.find({genreName:req.params.id});
        if(genre.length==0) return res.status(404).send("Invalid Genre");
        const genredelete=await Genre.findOneAndDelete( {genreName:req.params.id});
        res.send(genredelete);  
   
   }
  catch(ex){
    next(ex);
   }
});

module.exports=router;