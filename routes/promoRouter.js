const express=require('express')
const bodyParser = require('body-parser');
const promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next)=>{
   res.statusCode=200;
   res.setHeader('content-type','text/plain');
   next();
})
.get((req,res,next)=>{
   res.end('Will send all the promotions to you!');
})
.post((req,res,next)=>{
res.end('Will add promotion with detail '+req.body.name+' with details '+req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
res.end('Put operation not supported on /dishes!');
})
.delete((req,res,next)=>{
res.end('Deleting all promotions!');
});

promoRouter.route('/:promoid')
.all((req,res,next)=>{
   res.statusCode=200;
   res.setHeader('content-type','text/plain');
   next();
})
.get((req,res,next)=>{
   res.end('Will send the details of promotion  of promo  id : '+ req.params.promoid);
})
.post((req,res,next)=>{
   res.statusCode=403;
   res.end('Post operation not supported on /promotions/:promoid');
 })
.put((req,res,next)=>{
  res.end('Will update promotion with detail '+req.body.name+' with details '+req.body.description);
})
.delete((req,res,next)=>{
res.end('Deleting promotion of promo id '+req.params.promoid);
});

module.exports=promoRouter;
