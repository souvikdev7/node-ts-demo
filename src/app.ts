import express,{Request,Response} from "express";
const app = express();
const PORT = 3003;

import {router} from "./routes/route";

// For mongodb
//import {getdbconnect} from "./config/db";



app.use('/',router);

// For mongodb
//getdbconnect();








/*
app.get('/',(req:Request,res:Response):void=> {
    res.send({"name":"souvik"});
});*/


app.use(function(req, res) {
    res.status(404).send("Not Found");
});

app.listen(PORT,():void=>{   
    console.log(`Running on port ${PORT}`);
});


