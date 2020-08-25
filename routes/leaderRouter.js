const express=require('express')
const bodyParser = require('body-parser');
const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next)=>{
   res.statusCode=200;
   res.setHeader('content-type','text/plain');
   next();
})
.get((req,res,next)=>{
   res.end('Will send all the leaders to you!');
})
.post((req,res,next)=>{
res.end('Will add leader with detail '+req.body.name+' with details '+req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
res.end('Put operation not supported on /leaders');
})
.delete((req,res,next)=>{
res.end('Deleting all leaders!');
});

leaderRouter.route('/:leaderid')
.all((req,res,next)=>{
   res.statusCode=200;
   res.setHeader('content-type','text/plain');
   next();
})
.get((req,res,next)=>{
   res.end('Will send the details of leader  of leader  id : '+ req.params.leaderid);
})
.post((req,res,next)=>{
   res.statusCode=403;
   res.end('Post operation not supported on /leaders/:leaderid');
 })
.put((req,res,next)=>{
  res.end('Will update leader with detail '+req.body.name+' with details '+req.body.description);
})
.delete((req,res,next)=>{
res.end('Deleting leader of leader id '+req.params.leaderid);
});

module.exports=leaderRouter;
