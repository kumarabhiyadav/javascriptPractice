obj ={
    name: "Abhinav",
    msg:"Hello",
    
    
    get namepro(){
        return this.name;
    },
    hello:()=>{
        console.log("Hello");
    },
    set setName(val){
       this.name = val;
    }
   }


class Company {
    constructor(brand) {
       this.Compname = brand;
    }
    get getname() {
       return this.Compname;
    }
    set setname(x) {
        if (x.length < 4) {
            alert("Name is too short.");
            return;
          }
       this.Compname = x;
    }
 }

 const c = new Company("Shyam")

 console.log(c.Compname) // Shyam
 c.setname ="Raju" // Change Compname to raju using setter
 console.log(c.getname);

// const obj={
//     msg : "This is Hello Message",
//     get  msgBody (){
//         return  this.msg;
//               }
//                    }
 
//  obj.msgBody; // This is Hello Message
 
//  obj.msgBody() // Invalid Code
