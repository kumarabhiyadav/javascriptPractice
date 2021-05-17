// const promise = new Promise((resolv, rejec) => {
//     let a = 1 + 1

//     if (a === 2) {
//         resolv((status) => {

//             console.log("This function is:", status);
//         });

//     }
//     else {
//         rejec((er) => {
//             console.log(er);
//         })
//     }

// })
// promise.then(result => {
//     result("Passed");
// }).catch((e) => {
//     // console.log(e);
//     e("abhinav");
// });




// Promise.all(
//     async function(){
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const result_1 = await response.json();
//         return console.log(result_1);
//     }
// )
// const promise1 = new Promise((reslove, reject) => {
//     setTimeout(reslove, 1000, "Hello This is first promise");
// });

// const promise2 = new Promise((reslove, reject) => {
//     let a = 1 + 3

//     if (a === 2) {
//         resolv((status) => {

//             console.log("This function is:", status);
//         });

//     }
//     else {
//         rejec((er) => {
//             console.log(er);
//         })
//     }});

// const promise3 = new Promise((reslove, reject) => {
//     setTimeout(reslove, 1000, "Hello This is Third promise");
// });

// const promise4 = new Promise((reslove, reject) => {
//     setTimeout(reslove, 1000, "Hello This is forth promise");
// });

// Promise.all([promise1,promise2,promise3,promise4]).then((value)=>{
//  console.log(value);

// }).catch((e)=>{
//   console.log("This promise have Error");
// })


// setTimeout(function(){
//     console.log("Hello"),
//     10000
// })
// console.log("End");


const promise = new Promise((reslove, reject) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/users').then((value) => {
            value.json()
            reslove(value);
        })
    } catch {
        reject("Having Some Problem")
    }

});
promise.then((value) => {


}
).catch((e) => {
    console.log(e);
})