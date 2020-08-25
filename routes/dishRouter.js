const express=require('express')
const mongoose = require('mongoose');
const Dishes = require('../models/dishes');
const bodyParser = require('body-parser');
const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.get((req,res,next)=>{
   Dishes.find({})
   .then((dishes)=>{
       console.log(dishes)
       res.statusCode=200;
       res.setHeader('Content-Type', 'application/json');
       res.json(dishes);

   } , (err)=>next(err))
   .catch(err => next(err));

})
.post((req,res,next)=>{
   Dishes.create(req.body)
  .then((dish) => {
  console.log('Dish Created ', dish);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(dish);
}, (err) => next(err))
.catch((err) => next(err));
})
.put((req,res,next)=>{
  res.statusCode=403;
res.end('Put operation not supported on /dishes');
})
.delete((req,res,next)=>{
  Dishes.remove({})
  .then( (resp)=> {
      res.statusCode=200;
      res.setHeader('content-Type','application/json');
      res.json(resp);
  }  , err => next(err))
  .catch(err=>next(err));
});




dishRouter.route('/:dishid')
.get((req,res,next)=>{
    Dishes.findById(req.params.dishid)
    .then( (dish)=>{
      res.statusCode=200;
      res.setHeader('content-Type','application/json');
      res.json(dish);
    } , err=> next(err))
    .catch(err=> next(err));
})
.post((req,res,next)=>{
   res.statusCode=403;
   res.end('Post operation not supported on /dishes/:dishid');
 })
 .put((req, res, next) => {
     Dishes.findByIdAndUpdate(req.params.dishid, {
         $set: req.body
     }, { new: true })
     .then((dish) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(dish);
     }, (err) => next(err))
     .catch((err) => next(err));
 })
 .delete((req, res, next) => {
   console.log(req.params.dishid)
     Dishes.findByIdAndRemove(req.params.dishid)
     .then((resp) => {
         res.statusCode = 200;
         res.setHeader('Content-Type', 'application/json');
         res.json(resp);
     }, (err) => next(err))
     .catch((err) => next(err));
 });

module.exports=dishRouter;
