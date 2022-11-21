import {Model,Schema,model,Document} from "mongoose";


export interface EmpDocument extends Document {
  name: string;
  designation: string  
}


interface Employee {
  name: string;
  designation: string  
}

interface emodel extends Model<Employee> {
  myfunc1(): number;
  myfunc2(): string;

}

const empSchema = new Schema<Employee,emodel>({
  name: { type: String, required:true,max:255,min:2},
  designation: { type: String,required:true,max:255,min:2} 
});
  
empSchema.static("myfunc1",()=>{ return 150; });
empSchema.static("myfunc2",()=>{ return "hello"; })
 
const EmpModel = model<Employee,emodel>("Employee", empSchema,'Employees');
export default EmpModel;



