const express = require("express");
//to host our website we keep port number in env filess
const app = express();
const port  = process.env.PORT || 3000;
const path = require("path");
require("./db/conn");

const static_path_of_index = path.join(__dirname, "../public");

app.use( express.static(static_path_of_index));

app.get("/",(req,res)=>{
    res.send("home page")
})

app.listen(port ,()=>{
    console.log(`server is running at port no at ${port}`)
})