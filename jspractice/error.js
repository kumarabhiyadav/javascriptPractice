// const err = new Error("This is an Error");

    fail = () => {
        try {
            throw new Error("Something Went Wrong");
            console.log("This line will never can be executed");
        }
        catch(e){

            console.log(e.message) // SomeThing Went Wrong

        }
        finally{
            console.log("Finished");
        }
    }
    fail();

// failWithoutTry=() =>{
//     console.log("This program is will break")
//     console.log(h);
// }

// failWithoutTry();