const m = require("mongoose");

m.connect("mongodb://localhost:27017/mernthapa-db",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })
    .then(()=>{  console.log("connected successfully")})
    .catch((e)=>{ console.log("error !!!" + e)})