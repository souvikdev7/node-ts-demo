import express from "express";

const router = express.Router();

// For mongodb

//import {usrdetails,findempdetails,createempdetails,updateempdetails,deleteempdetails,getotherdata} from "../controllers/user";
//router.get('/home1',usrdetails);
//router.get('/home2',findempdetails);



//For mysql

import {getDetails,createData,updateData,deleteData,custom} from "../controllers/students";

//router.get('/test1',getDetails);
//router.get('/test1',createData);
//router.get('/test1',updateData);
//router.get('/test1',deleteData);
router.get('/test1',custom);



export {router}
