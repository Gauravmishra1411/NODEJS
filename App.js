const expree=require("express");
const app=expree();
// .................2
 app.use('/user',(req,res,next)=>{
  console.log("1st route handler..........")
  next();

res.send("first route")
},

(req,res)=>{
  res.send("second router handler");
  console.log("2nd route handler............")
}
)
app.listen(8000,()=>{
  console.log("Server connecetion successfull.............")
})