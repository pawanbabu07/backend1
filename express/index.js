//start
//node index.js
//nodemon index.js


const express= require("express");
const app = express();
//console.dir(app);
let port = 3000;
app.listen(port,()=>{
    console.log(`app is listion ${port}`)
});


//requst sand

// //request sand in js language
// app.use((req, res)=>{
//     res.send({
//         name: "pawan",
//         age: "29",
//         sex: "male",
//     });
// })

// //requst snad in html
// app.use((req, res)=>{
//     let cord="<h1>Information</h1><ul><li>Name: Pawan</li><li>Age:25</li><li>Sex: male</li></ul>";
//     res.send(cord);
// })

//**routing**
 
app.get("/",(req,res)=>{
    res.send("you conracred root path");
});

app.get("/apple",(req,res)=>{
    res.send("you conracred apple path");
});

app.get("/orange",(req,res)=>{
    res.send("you conracred orange path");
});

// app.get("*",(req,res)=>{
//     res.send("this path does not exist");
// });

//post
app.post("/",(req,res)=>{
    res.send("you post to path");
});

//pass parameter 
app.get("/:username/:id",(req,res)=>{
    let {username, id}=req.params;    
    res.send(username+" "+id);
});


//quarry

app.get("/search",(req, res)=>{
    console.log(req.query);
    let {q}=req.query;
    res.send(`<h1><i> ${q}</i></h1>`);
});