// function Person(){
//   this.name ="person functions";
//   this.test ="Check to Person prototype"
//   this.txt = "Hello";
//   this.greet=function(){
//       console.log("This is txt message",txt);
//   }

// };
// const person2 = new Person();

// console.dir(Person);

// Person.prototype =  {
//     printName(){
//         console.log(this.test);
//     }
// };

// Person.describe =function (){
//     console.log("This is describe function");
// }

// Person.prototype.sayMyName=function(){
//     console.log(this.name);
// }
//   p = new Person();
//   console.log(p);
//   p2 =new p.__proto__.__proto__.co()

// console.dir(p2);


// Person.getPrototypeOf()

//OOPS Doubt check 
// class  P{
//     constructor(){
//         this.className="P";
//         this.greet=function(){
//             console.log("Hello From Class P");

//         }
//     }
// }

// const db = {

//     'name': 'superman'

// }

// console.log(db.__proto__);
// console.log(Object.getPrototypeOf(db));

// Object.setPrototypeOf(db, {
//     ...Object.getPrototypeOf(db), // having pervious properties of db.__proto__ 
//     printname: function () {
//         console.log(`${this.name}`);

//     }
// }
// )
// db.printname();
// const student =  Object.create({

//     printprogress:function(){              // This property is in  student.__proto__
//        console.log("this is student");
//     },

// });

// console.log(student.printprogress()); 

// student.age=100;

// Object.defineProperty(student,"name",{    // This is also can be use for assign properties to object
//     value:"Raju"
// }

// )


// function Person(){
//     this.name="Ajay";
//     this.greet=function(){
//         console.log(`Person's name is ${this.name}`);
//     };
// }

// Person.prototype.sayName=function(){
//  console.log(`Hello I am Prototype Functions`,`${this.name}`);
// };
// const p = new Person();

// function Person(){
//     this.name="Person";
//     this.age=10;
// }

// const pr = new Person();
// const p= new pr.__proto__.constructor;

function Car() { this.name = "alto"; this.printcarname = function () { console.log(`this is the car name ${this.name}`) } }