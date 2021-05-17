// class Product{
//     title = "Default";
//     constructor(title){
//         this.title = title;
//     }


//     showTitle(){
//         console.log("jks");
//         console.log(this.title);
//     }
// }

// product1 = new Product("Keys");

// product2 = new Product("Chain");
// class Products extends Product{
//     super(showTitle);
// }
// class Car {
    

//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }

//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }

//   }
//   mycar = new Model("Ford", "Mustang");



//   class Home{
//       name="Abhinav";
//       constructor(msg){
//           this.msg=msg;
//       }
//     message(){
//         console.log("From Home"+this.msg)
//     }
//   }

//   class Homes extends Home{
//       kingsname ="Sam";
//        constructor (msg){
//           super(msg);
//        }
     
//        thismessageExample(){
//            console.log(this.kingsname);
//        }
   
        
//     }
// hm = new Homes("Hello") ;
// console.log(hm.name);

// console.log(hm.kingsname);
// hm.thismessageExample();
    
// class Parent {
//     constructor() {
//       this.name = "Parent Name";
//     }
//   }
  
//   class ChildWithConstructor extends Parent {
//     constructor() {
//       super();
//       this.name = "Child Name";
//     }
  
//     sayName() {
//       console.log(`The constructor call updated the property value set in the parent contructor: ${this.name}`)
//     }
//   }
  
//   class ChildWithoutConstructor extends Parent {
//     sayName() {
//       console.log(`No constructor call retains the property values set in the parent contructor: ${this.name}`)
//     }
//   }
  
//   const c = new ChildWithConstructor();
//   const nc = new ChildWithoutConstructor();
//   c.sayName();
//   nc.sayName();

class Parent{
    constructor(){
 this.name = "i am parent"   
};
}
class Child extends Parent{
    constructor(){
        super();
        this.name2="i an child";
        
    }
}

class ChildWithoutConstructor extends Parent{
    
}