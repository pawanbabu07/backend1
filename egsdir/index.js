//npm init -y
//npm i express
//npm i ejs

//let path=require("path");
//app.set("views", path.join(__dirname,"/view"));//dircory name file run out side the directory
//app.use(express.static("public"));//static folder in express js like css js like that
//const express = require("express");

const app = express();
const port = 3000;
app.set("view engine","ejs");

app.listen(port, ()=>{
    console.log(`port ${port}`);
});
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.get("/rolldice",(req,res)=>{
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("dice.ejs",{num:dicevalue});//{dicevalue:dicevalue}/{dicevalue}
});
app.get("/ins/:username",(req,res)=>{
    let {username}=req.params;
    console.log(username);
    res.render("insta.ejs",{username});
});
app.get("/user/:username",(req,res)=>{
    let followers =["pawan","ritu","raj","babu"];
    let {username}=req.params;
    console.log(username);
    res.render("insta.ejs",{username,followers});
})