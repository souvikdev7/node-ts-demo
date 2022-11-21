import { DocumentDefinition,FilterQuery,UpdateQuery,QueryOptions } from 'mongoose';
import EmpModel, {EmpDocument} from "../models/Employee";



let createData = (input: DocumentDefinition<EmpDocument>)=> {
    return EmpModel.create(input);
};


let findData = (query: FilterQuery<EmpDocument>, options:QueryOptions={lean:true})=> {
    return EmpModel.find(query,{},options);
};


let findAndUpdateData = (query: FilterQuery<EmpDocument>, update:UpdateQuery<EmpDocument>, options:QueryOptions)=> {
    return EmpModel.findOneAndUpdate(query,update,options);
};


let deleteData = (query: FilterQuery<EmpDocument>)=> {
    return EmpModel.deleteOne(query);
};


export {createData,findData,findAndUpdateData,deleteData}


