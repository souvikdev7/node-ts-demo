import express,{Request,Response} from "express";

import EmpModel from "../models/Employee";

import {createData,findData,findAndUpdateData,deleteData} from "../services/empservice";

let usrdetails = (req:Request,res:Response):void=> {
    res.json({"name":"souvik","spec":"deveoper","sum":sumData2({x:10,y:50})});
};

//find

let findempdetails = async (req:Request,res:Response)=> {
    //let mydata = await EmpModel.find();
    //let mydata = await findData({_id: "637332772748ba60b31d70a2"});
    let mydata   = await findData({name: /har/});
    res.json({"data":mydata});
};

//create

let createempdetails = async (req:Request,res:Response)=> {    
    let mydata = await createData({"name": "Sourav","designation":"player"});    
    res.json({"data":mydata});
};

//update

let updateempdetails = async (req:Request,res:Response)=> {    
    let mydata = await findAndUpdateData({name: "Sourav"},{designation:"corporate"},{new:true});
    res.json({"data":mydata});
};

 //delete

let deleteempdetails = async (req:Request,res:Response)=> {   
    let mydata = await deleteData({_id: "637332772748ba60b31d70a2"});
    res.json({"data":mydata});
};

let getotherdata = async (req:Request,res:Response)=> {
    //res.json({"data":EmpModel.myfunc1()});
    res.json({"data":EmpModel.myfunc2()});
};



let sumData = (a:number,b:number)=>{
    return a+ b;
}

interface paramCheck {
    x: number;
    y:number;
};

type funCheck = (x:paramCheck) => number;

let sumData2 : funCheck = (ob:paramCheck)=>{
    return ob.x+ ob.y;
}
export {usrdetails,findempdetails,createempdetails,updateempdetails,deleteempdetails,getotherdata}