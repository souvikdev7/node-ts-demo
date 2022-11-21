import express,{Request,Response} from "express";
import {usrdetails,empdetails} from "../controllers/user";

const router = express.Router();

router.get('/home1',usrdetails);
router.get('/home2',empdetails);

export {router}
