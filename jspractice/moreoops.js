let calling  = ()=>{
      console.log("From out of class",this.name);
} 
class Person {
    constructor(name,functionhandle) {
        this.name = name;
        this.sayName;
        this.fun=functionhandle;
    };

    sayName = () => {
        console.log(`This from from Person's function  ${this.name}`);
    }
}


// class Person{

//     constructor(fun){
//             this.fun=fun
//     }

// }
// class Call{
//    constructor(){
//         call()
//    }
// }