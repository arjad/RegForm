const express = require("express");
//to host our website we keep port number in env filess
const app = express();
const port  = process.env.PORT || 3000;
const path = require("path");
var hbs = require('express-handlebars');

const register = require("./models/registers");
const async = require("hbs/lib/async");

require("./db/conn");

const static_path_of_index = path.join(__dirname, "../public");

app.use( express.static(static_path_of_index));
app.set("view engine",hbs);


app.get("/",(req,res)=>{
    res.send("home page");
})

app.get("/register",(req,res)=>{
    res.render("index.hbs");
})
app.post("/register",async(req,res)=>{
    try{
        console.log(req.body.firstname);
        req.body.send(req.body.firstname);
    }
    catch(e)
    {
        // res.status(400).send(e);
    }

})

app.listen(port ,()=>{
    console.log(`server is running at port no at ${port}`)
})