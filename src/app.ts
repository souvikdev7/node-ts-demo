import express,{Request,Response} from "express";
const app = express();
const PORT = 3002;

import {router} from "./routes/route";
import {getdbconnect} from "./config/db";

app.use('/',router);

getdbconnect();








/*
app.get('/',(req:Request,res:Response):void=> {
    res.send({"name":"souvik"});
});*/


app.listen(PORT,():void=>{   
    console.log(`Running on port ${PORT}`);
});


