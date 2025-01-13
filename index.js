const express =require("express");
const app=express();
const port =8080;
const path =require("path");

app.use(express.urlencoded({ extended :true}));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

let posts =[
    {
        username:"appnacollege",
        content:"I love codding"
    },
    {
        username:"appnacollege",
        content:"I love codding"
    },
    {
        username:"appnacollege",
        content:"I love codding"
    },
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

//app.get("/post/new",(req,res)=>{

//});

app.listen(port,() =>{
    console.log("listing to port :8080");
});