// Objects Within Objects 
let midname = "abhinav";
// let first;
// let first;
const obj = {
    names: {
        midname,
        'firs t': 'sam',
        'last': 'abc'
    },
    age: [{abhinav: 19},{vikasraj: 24},{shivanand: 23}]
};
// Chaning  Example 
// console.log(obj.names.first);
// console.log(obj.names['firs t']);
console.log(obj.age.forEach((e)=>{
    // console.log(e[])

    for(let key in e){
        console.log(e[key]);
    }

}));


// Copying objects 2 ways to do that

// const obj2 = obj       // This will copy object but wuth refer.


// 1.spread operater


const objcopy = { ...obj };

console.log(objcopy)

obj.age = 100;

console.log(objcopy);


// 2.Way of make copy of object  using Object.assign

const objcopyassign = Object.assign({}, obj);

console.log(objcopy)

obj.age = 100;

console.log(objcopy);

//Delete property of objects

// delete obj.age;

// console.log(obj);

// Modify Value of Object


// This will not work becalue ew delete obj.age

obj.age = 500;

console.log(obj.age)

// If property in object is not assign then it return undefine Not null

console.log(obj.userType) // undefined
obj.userType = "admin"  //This will create a mnew property to object and also assign value to it

console.log(obj.userType);  // this have property call userType  = admin



// we can use spaces in property name using Square Bractes

const person = {
    "first name": "raju",
    "last name": "chutki"
}

console.log(person['first name']);


const nums = {           // if object property are numbers then it will sorted auto.
    3: "raja",
    2: "rani",
    1: "joker"
}

console.log(nums)     // 1:"joker",2:"rani",3:"raja"


const fun = {
    fun1: function () {             // We can define function in object because they are bascially a objects
        console.log("This is fun"); // normal way
    },

    shorthandfun() {
        console.log("this is short hand function");

    }




}
fun.fun1()
fun.shorthandfun();


//Setter is bascially a short function use for using set value for property

const human ={
humanname:"",
set name(val){                        
    this.humanname = val;
},
get name(){
    return this.humanname;

}
}
human.name="kabir";
console.log(human.humanname);
console.log(human.name);
//Getter is bascially a short function  use for get value form propery

// NOTE: this keyword refers to parent 

// For Example

const hero ={
    name:"Bheem",
    getname(){
        return this.name;
    }
}

console.log(hero.getname());


