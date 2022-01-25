const express = require("express");
//to host our website we keep port number in env filess
const app = express();
const port  = process.env.PORT || 3000;
const path = require("path");
var hbs = require('express-handlebars');

const register = require("./models/registers");
const async = require("hbs/lib/async");
const Register = require("./models/registers");
const { lazyrouter } = require("express/lib/application");

require("./db/conn");

const static_path_of_index = path.join(__dirname, "../public");
app.use(express.json());//to handle json data
app.use(express.urlencoded({extended:false}));

app.use( express.static(static_path_of_index));
app.set("view engine",hbs);


app.get("/",(req,res)=>{
    res.render("index.hbs");
})
app.get("/register",(req,res)=>{
    res.render("reg.hbs");
})
app.post("/register",async(req,res)=>{
    try{
        
        const pass = req.body.pass;
        const cpass = req.body.cpass;

        if(pass === cpass)
        {
            console.log("passwords matched");

            const regemp = new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                pass:req.body.pass,
                cpass:req.body.cpass,
                // gender:req.body.gender,
                // hobbies:req.body.hobbies,
                // sourceofincome:req.body.sourceofincome,
                // income:req.body.income,
                // picurl:req.body.picurl,
                // age:req.body.age,
                // bio:req.body.bio        
            })
            
            console.log("reg employ", regemp);

            const reg = await regemp.save();
            console.log("reg", reg );

            //adding in db
            var MongoClient = require('mongodb').MongoClient;
            var url = "mongodb://localhost:27017/";

            MongoClient.connect(url, function(err, db) 
            {
              if (err) throw err;
              var dbo = db.db("mernthapa-db");
    
              dbo.collection("mernthapa-col").insertOne(reg, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
              });
            });

            res.render("index.hbs");
        }
        else{
            res.send("passwords are not matching");
        }
    }
    catch(e)
    {
        console.log("catch block error", e);
        res.status(400).send(e);
    }
})

app.listen(port ,()=>{
    console.log(`server is running at port no at ${port}`)
})