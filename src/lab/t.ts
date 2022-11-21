/*class Tree{
    name:string;
    age:number;

    constructor(n:string,a:number) {
        this.name = n;
        this.age = a;
    }

    play()
    {
        console.log(` Name is ${this.name} & age is ${this.age}`);
    }
}*/

/*let ob1 = new Tree("sss",12);
let ob2 = new Tree("ggg",50);
//ob1.play();

let all:Tree[] = [];
all.push(ob1);
all.push(ob2);

console.log(all);*/

/*

interface Rschema {
    id: number;
    name: string;
    age: number;
}

let jj = (options:Rschema) => { 
    let a = options.id;
    let b = options.name;
    let c = options.age;
}

//jj({id:55,name:"eee",age:7});
//jj({id:55,name:"eee",age:7,"jj":8});
let vv = {id:55,name:"eee",age:7,"jj":8};
jj(vv);*/


/**
 * GENERICS  
 */

/*
let hh = <T>(v:T) => { 
    let id = 500;
    return {...v,id}
}
*/

/*
let rr = <T extends object>(v:T) => { 
    let id = 200;
    return {...v,id}
}

console.log(rr({"a":2,"g":7}));
*/

/*
let rr = <T extends {name:string;age:number}>(v:T) => { 
    let id = 200;
    return {...v,id}
}

console.log(rr({"name":"ravi","age":7}));
*/


enum Rtype  {SUCCESS,FAILURE,FORBIDDEN};

interface Plan<T> {   
    name: string;
    age: number;
    data:T;
    type:Rtype;
}




let cc : Plan<string> = {"name":"ravi","age":7,"data":"ddd","type":Rtype.SUCCESS};

let dd : Plan<number> = {"name":"ajay","age":4,"data":500,"type":Rtype.FAILURE};

let ee : Plan<boolean> = {"name":"rjesh","age":5,"data":false,"type":Rtype.FORBIDDEN};

//console.log(ee);

//Array
/*let c = [3,'hh',{d:8}];
c.push('rrr');
c[1] = {"d":10};*/

//Tuples  (index is significant and length is fixed)
/*let b:[number,string,object] = [3,'hh',{d:8}];
//b[1] = {"d":10};
b[2] = {"d":10};
console.log(b);*/



interface Info {
    name: string,
    mobile: number,
    age?:number,
   play(): string
}
/*
var obj:Info = {
    name: "eee",
    mobile:222,    
   play:() => { 
        return "wwww";
   }
}*/

//console.log(obj.play);