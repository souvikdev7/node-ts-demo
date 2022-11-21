function compute() {   
    return function (target: any,propertyKey: string, descriptor: PropertyDescriptor) {       
        Car.msg = "@Made in india";        
    };
}
   
class Car {

    static msg?:string;     

    @compute()
    play(h : string) {
        console.log(`Name : ${h}. ${Car.msg}`);
    }
}

let ob = new Car();
ob.play("Mahindra Thar");