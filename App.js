const expree=require("express");
const app=expree();
// .................2

  app.get("/" , (req,res)=>{
    res.send("This is my first Server");
  console.log("This is my first Server of console");
});
app.get("/hello" , (req,res)=>{
  res.send("This is my hello router Server..........");
  console.log("This is my first Server of hello route");
});
app.get("/test" , (req,res)=>{
  res.send("This is my hello router Server..........");
  console.log("This is my first Server of hello route");
}) 
  
// .........................1

app.get("/user",(req,res)=>{
  res.send(
    {first:"gaurav",
      last:"mishra"
    } )
});
app.post("/user",(req,res)=>{
  res.send("data save on database..")
})
app.delete("/user",(req,res)=>{
  res.send("data delete on database..")
})
// ..................3
app.use('/ab?c',(req,res)=>{
  res.send("opptional channing")
})
// ...............4      rexex
app.use(/.*fly$/,(req,res)=>{
res.send("priffix any thing start but suffix will fly")
console.log(req.query);
})
// ...............5
app.use("/user",(req,res)=>{
  res.send({
    name:"RITU",age:22
  })
  console.log(req.query)
})
// ...............6
app.get("user/:userid/:username/",(req,res)=>{
  res.send({
    name:"RITU",age:22
  })
  console.log(req.params);
})
// ............7
app.use('/user',(req,res)=>{
  
})
app.listen(8000,()=>{
  console.log("Server connecetion successfull.............")
})