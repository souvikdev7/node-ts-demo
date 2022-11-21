import {connect} from "mongoose";

let dbUrl =  "mongodb://127.0.0.1:27017/mydb"; 
let getdbconnect =()=>{
    return connect(dbUrl)
    .then(()=>{
        console.log("Database connected successfully!");
    }).catch((e:any)=>{ 
        console.log(e)
    });    
}


export {getdbconnect}