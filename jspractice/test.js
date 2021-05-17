// console.log("Flat Map runs 2 functions on array first map then flat  ")
// arr = [
//     [10,30],
//     [10,10],
//     [20,2]
// ]

// let output=arr.map((e)=>{
// return e;
// })
// console.log(output);

// var arr=[10,20,30,[20,30,[10,30,[1,3]]]];
// console.log(arr.flat());
// console.log(arr.flat(2));

// console.log("Use .keys")
// var arr =[1,2,3,5];

// var itreator = arr.keys();

// for(const key of itreator){
//     console.log(key);
// }

// for (const i=0;i<=5;i++){
//     console.log(i);
// }



arr = ['1','2','3','4','1','6','1','8','7'];


// console.log(arr.lastIndexOf(1,5));
// console.log(arr.lastIndexOf(1,7));
// console.log(arr.lastIndexOf(1,2));

// re=arr.map((e)=>{
//     console.log(e);
// })
// console.log(re);

// var reducer = (prevvalue , currentValue) => prevvalue+currentValue;
// console.log("After using reducer:",arr.reduceRight(reducer));

unsortedarray = [10,2,3,3]

console.log("The array before sorting ",unsortedarray);

console.log("The array after sorting",unsortedarray.sort((a,b)=>a-b));
