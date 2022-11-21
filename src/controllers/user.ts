import express,{Request,Response} from "express";

import EmpModel from "../models/Employee";

import {createData,findData,findAndUpdateData,deleteData} from "../services/empservice";

let usrdetails = (req:Request,res:Response):void=> {
    res.json({"name":"souvik","spec":"deveoper","sum":sumData2({x:10,y:50})});
};



let empdetails = async (req:Request,res:Response)=> {
    //let mydata = await EmpModel.find();

    //create
    //let mydata = await createData({"name": "Sourav","designation":"player"});
    //update
    //let mydata = await findAndUpdateData({name: "Sourav"},{designation:"corporate"},{new:true});
    // find
    //let mydata = await findData({_id: "637332772748ba60b31d70a2"});
    //let mydata = await findData({name: /har/});
    //delete
    //let mydata = await deleteData({_id: "637332772748ba60b31d70a2"});

    //res.json({"data":mydata});

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
export {usrdetails,empdetails}