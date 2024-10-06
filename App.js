const expree=require("express");
const app=expree();

  app.use("/" , (req,res)=>{
    res.send("This is my first Server");
  // console.log("This is my first Server");
})

app.use("/test" , (req,res)=>{
  res.send("This is my test router Server");
  // console.log("This is my first Server");
})
app.listen(9000,()=>{
  console.log("Server connecetion successfull.............")
})