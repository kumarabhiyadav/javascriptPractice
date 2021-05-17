var arr = [10,20,30,40,50,60,70];
console.log("Splice Example:\n");
console.log("Before Splice:",arr);
arr.splice(1,0,100)
console.log("After Splice at position 0 and Remove next 0 elements:",arr);
arr.splice(1,3,200)
console.log("After Splice at position 1 and Remove next 3 elements:",arr);
arr.splice(4,5,400)
console.log("After Splice at position 4 and Remove next 5 elements:",arr);
arr.splice(5,5,400)
console.log("After Splice at position 5 and Remove next 5 elements:",arr);
arr.splice(3,0,400)
console.log("After Splice at position 3 and Remove next 0 elements:",arr);
console.log("Slice Example \n");
var arr = [1,2,3,4,5,6,7];
console.log("Before Slice:",arr);
console.log("Remove from position 2 to 5",arr.slice(2,5));
console.log("Remove from position 3 to 5",arr.slice(3,5));
console.log("Remove from position 4 to 5",arr.slice(4,5));
console.log("Remove from position 1 to 5",arr.slice(1,5));
console.log("Remove from position 5 to 5",arr.slice(5,5));

console.log("Length Example \n");
var arr = [1,2,3,4,5,6,7];
console.log(arr.length+" The length of this array ",arr);
var arr = [1,2,3,4,5,6];
console.log(arr.length+" The length of this array ",arr);
var arr = [1,2,5,6];
console.log(arr.length+" The length of this array ",arr);
var arr = [1,2,6];
console.log(arr.length+" The length of this array ",arr);
var arr = [16];
console.log(arr.length+" The length of this array ",arr);

console.log("Concatenate \n");

var arr = [10, 20, 30];
var arr1 = [40, 50, 60];
console.log("Array 1 Before concatenate", arr);
console.log("Array 2 Before concatenate", arr1);
fullArray = arr.concat(arr1);
console.log("Array after Concatenate", fullArray);
var arr = [10, 20, 30,100];
var arr1 = [40, 50, 60];
console.log("Array 1 Before concatenate", arr);
console.log("Array 2 Before concatenate", arr1);
fullArray = arr.concat(arr1);
console.log("Array after Concatenate", fullArray);

console.log("CopyWithin \n");
var arr = [10, 20, 30,40,50,60];
console.log("Array Before",arr);
console.log(arr.copyWithin(1,0))
console.log(arr.copyWithin(5,0))
console.log(arr.copyWithin(5,0))
console.log(arr.copyWithin(9,0))
console.log(arr.copyWithin(1,0))

console.log("Entries \n")
var arr = ['a', 'b', 'c'];
iterator1 = arr.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);


console.log("Every \n")
console.log("Every Checks Each elements of array are statisfies the condtition of given function  \n")

var isBelowThreshold = (currentValue) => currentValue < 40;
var array1 = [1, 30, 39, 29, 10, 13];
console.log(`Array ${array1} checks with every element is less than 40`);
console.log(array1.every(isBelowThreshold));


var isBelowThreshold = (currentValue) => currentValue < 60;
var array1 = [1, 30, 39, 29, 10, 13];
console.log(`Array ${array1} checks with every element is less than 60`);
console.log(array1.every(isBelowThreshold));

var isBelowThreshold = (currentValue) => currentValue < 20;
var array1 = [1, 30, 39, 29, 10, 13];
console.log(`Array ${array1} checks with every element is less than 20`);
console.log(array1.every(isBelowThreshold));


var isBelowThreshold = (currentValue) => currentValue < 10;
var array1 = [1, 30, 39, 29, 10, 13];
console.log(`Array ${array1} checks with every element is less than 10`);
console.log(array1.every(isBelowThreshold));

var isBelowThreshold = (currentValue) => currentValue < 100;
var array1 = [1, 30, 39, 29, 10, 13];
console.log(`Array ${array1} checks with every element is less than 100`);
console.log(array1.every(isBelowThreshold));



console.log("Fill Example\n");

var arr = [10,20,30,40,50];

console.log("Before use fill",arr);
console.log("Fill from 2 to 4 with 1",arr.fill(1, 2, 4))
var arr = [10,20,30,40,50];
console.log("Fill from 1 to 4 with 1",arr.fill(1, 1, 4))
var arr = [10,20,30,40,50];
console.log("Fill from 0 to 4 with 1",arr.fill(1, 0, 4))
var arr = [10,20,30,40,50];
console.log("Fill from 1 to 3 with 1",arr.fill(1, 1, 3))
var arr = [10,20,30,40,50]; 
console.log("Fill from 0 to 3 with 1",arr.fill(1, 0, 3))


console.log("\nFilter\n")

var arr = ["main","void","microphones","laptops","sugar","HelloTherehowareyou"];
var filtered = arr.filter(arr=>arr.length<5);
console.log("Words having less than 5 char",filtered);
var filtered = arr.filter(arr=>arr.length<10);
console.log("Words having less than 10 char",filtered);
var filtered = arr.filter(arr=>arr.length<15);
console.log("Words having less than 15 char",filtered);
var filtered = arr.filter(arr=>arr.length<20);
console.log("Words having less than 15 char",filtered);

console.log("Array Find Example\n");

const arrOfFind = [10, 20, 30, 40, 50];
console.log("Array on which function used", arrOfFind);
var found = arrOfFind.find(function (value) {
  return value == 30;
});
console.log("Value founded by Array.find()", found);
console.log(
  "Find return first element which satisfies the condition i.e why only " +
    found +
    " printed"
);

var found = arrOfFind.find(function (value) {
    return value == 30;
  });
  console.log("Value founded by Array.find()", found);
  var found = arrOfFind.find(function (value) {
    return value == 40;
  });
  console.log("Value founded by Array.find()", found);
  var found = arrOfFind.find(function (value) {
    return value == 50;
  });
  console.log("Value founded by Array.find()", found);
  var found = arrOfFind.find(function (value) {
    return value == 20;
  });
  console.log("Value founded by Array.find()", found);


console.log("Using findIndex\nfind index return first element which satisfies");
var array1 = [5, 12, 8, 130, 44];
console.log("Used Array:",array1)
var isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

var array1 = [5, 12, 8, 130, 44];
var isLargeNumber = (element) => element > 4;
console.log(array1.findIndex(isLargeNumber));

var array1 = [5, 12, 8, 130, 44];
var isLargeNumber = (element) => element >10;
console.log(array1.findIndex(isLargeNumber));

var array1 = [5, 12, 8, 130, 44];
var isLargeNumber = (element) => element == 44;
console.log(array1.findIndex(isLargeNumber));

console.log("Using flat  for attach value from sub array to array");
subarray=[10,20,30,[100,[200,300]],];
console.log("Before flat call",subarray);
console.log(subarray.flat());

subarray=[10,20,30,[100,200,300],];
console.log("Before flat call",subarray);
console.log(subarray.flat());

subarray=[[10,20,30],[100,200,300],];
console.log("Before flat call",subarray);
console.log(subarray.flat());



subarray=[10,[20,30],[100,200,300],];
console.log("Before flat call",subarray);
console.log(subarray.flat());


console.log("Flat Map runs 2 functions on array first map then flat\nWithout flatMap")
arr = [
    [10,30],
    [10,10],
    [20,2]
]

var output=arr.map((e)=>{
return e;
})
console.log(output);

console.log("Flat Map runs 2 functions on array first map then flat\nWith flatMap")
arr = [
    [10,30],
    [10,10],
    [20,2]
]

var output=arr.flatMap((e)=>{
return e;
})
console.log(output);


console.log("\nUse of forEach()\n");
var arr =['a','b','c','d','e'];
console.log("forEach performs on",arr);

arr.forEach((e)=>{
    console.log(e);
})

console.log("\nUse of forEach()\n");
var arr =['milk','banana','orange','apple','mango'];
console.log("forEach performs on",arr);

arr.forEach((e)=>{
    console.log(e);
})
console.log("\nUse of forEach()\n");
var arr =['a','b','d','m','f'];
console.log("forEach performs on",arr);

arr.forEach((e)=>{
    console.log(e);
})
console.log("\nUse of forEach()\n");
var arr =[10,23,40,4,59];
console.log("forEach performs on",arr);

arr.forEach((e)=>{
    console.log(e);
})

console.log("\Create new from form any data type");
var name = "Mike";
console.log("Creating array from",name);
var arr=Array.from(name);
console.log(arr);

var num1 = 10;
var num2 = 20;
var num3 = 30;
console.log("Creating array from",num1,num2,num3);
var arr=Array.from([num1,num2,num3]);
console.log(arr);

var name = "flutter";
console.log("Creating array from",name);
var arr=Array.from(name);
console.log(arr);

console.log("\nIncludes\n");
var num=2
var arr =[4,5,6,7,8,9];
var exists = arr.includes(num);
console.log(`Use include on ${arr} with value ${num} and result is: ${exists}`);

var num=4
var exists = arr.includes(num);
console.log(`Use include on ${arr} with value ${num} and result is: ${exists}`);

var num=6

var exists = arr.includes(num);
console.log(`Use include on ${arr} with value ${num} and result is: ${exists}`);

var num=0
var exists = arr.includes(num);
console.log(`Use include on ${arr} with value ${num} and result is: ${exists}`);

var num=9
var exists = arr.includes(num);
console.log(`Use include on ${arr} with value ${num} and result is: ${exists}`);


console.log("\nisArray\n");

console.log("checking for thiss array",arr);
console.log(Array.isArray(arr));

var arr=['a','b','c'];
console.log("checking for thiss array",arr);
console.log(Array.isArray(arr))


var arr =['abc','sam','king']
console.log("checking for thiss array",arr);
console.log(Array.isArray(arr))


console.log('\nJoin\n');
console.log("Performed on",arr)
console.log(arr.join());

var arr=['a','b','c'];
console.log("Performed on",arr)
console.log(arr.join());

var arr =[1,3,5,6,7]
console.log("Performed on",arr)
console.log(arr.join());

console.log("Use .keys this returns key of array")
var arr =[1,2,3,5];

var itreator = arr.keys();

for(const key of itreator){
    console.log(key);
}

console.log("lastIndexof \n");


arr = [1,2,3,4,1,6];
console.log("indexOf search from start and lastindexOf search from last element");
console.log("Array which on implimented",arr);
console.log(arr.lastIndexOf(1));
console.log("We can also use second arg arr,lastofIndex(5,fromIndex)");
console.log("fromIndex is set a postion of your start element for search");
console.log(arr.lastIndexOf(1,2));
arr = [1,2,3,4,1,6,1,8,7];
console.log("Impliment on ",arr);
console.log("This will search from last and start srearch from postion 5",arr.lastIndexOf(1,5));
console.log("This will search from last and start srearch from postion 7",arr.lastIndexOf(1,7));
console.log("This will search from last and start srearch from postion 2",arr.lastIndexOf(1,2));

console.log("Map on array");
console.log("Map on ",arr);
result=arr.map(e=>e*2);
console.log("result of using map",result);

console.log("POP")
console.log("Implimenting on array:",arr);
arr.pop()
console.log("After pop from array:",arr);
arr.pop()
arr.pop()
console.log("After pop 2 times:",arr);
arr.pop()
arr.pop()
arr.pop()
console.log("After pop 3 times:",arr);
arr.pop()
arr.pop()
console.log("After pop 2 times:",arr);
console.log("PUSH");
console.log("Implimenting on array:",arr);
arr.push(12);
console.log("After push 12 in array:",arr);
arr.push(10,14,18,22,23,35,98);
console.log("After push 8 elements in array:",arr);
console.log("Reduce");
console.log("Implimenting on array:",arr);
var reducer = (prevvalue , currentValue) => prevvalue+currentValue;
console.log("After using reducer:",arr.reduce(reducer));
var reducer = (prevvalue , currentValue) => prevvalue+currentValue;
console.log("After using reducer and pass 10 as second  arugument and it will be append in start of array:",arr.reduce(reducer,10));
console.log("reduceRight");
arr = ['1','2','3','4','1','6','1','8','7'];
console.log("Returns reduce's functions value in reverse order");
console.log("Implimenting on",arr);
var reducer = (prevvalue , currentValue) => prevvalue+currentValue;
console.log("After using reduceRight:",arr.reduceRight(reducer,100));
arr = [1,2,3,4,1,6];
console.log("Implimenting on",arr);
console.log("It doesn't show any thing different we implement with array of numbers");
console.log(arr.reduceRight(reducer));``
console.log("Passing second argument 10 that's why we get 17+10:",arr.reduceRight(reducer,10));
console.log(".reverse");
console.log("implementing on ",arr);
console.log("Reversed",arr.reverse())
arr = ['1','2','3','4','1','6','1','8','7'];
console.log("implementing on ",arr);
console.log("Reversed",arr.reverse())
arr=['Sam','mike','rohan','sid']
console.log("implementing on ",arr);
console.log("Reversed",arr.reverse())
console.log("Shift");
console.log("Shift remove the first element from array actually it returns the first element from array");
console.log("implementing on ",arr);
arr.shift();
console.log("after using arr.shift()",arr);
arr.shift();
console.log("after using arr.shift()",arr);
a=arr.shift();
console.log("after using arr.shift()",arr);
console.log("shifted  return the removed elememt");
console.log(`The return value of arr.shift() is ${a}` );
console.log("Value of arr is now",arr);
console.log("\nUnshift:\n");
console.log("\nUnshift append element at start of array");
arr=['Sam','mike','rohan','sid']
console.log("implementing on ",arr);
arr.unshift("Raju");
console.log("after using arr.unshift()",arr);
arr.unshift("Shyam");
console.log("after using arr.unshift()",arr);
a=arr.unshift("Ajay");
console.log("after using arr.unshift()",arr);
console.log("unshifted  return the removed elememt");
console.log(`The return value of arr.unshift() is ${a}` );
console.log("Value of arr is now",arr);
console.log("Some:");
console.log("Some return true if one of element pass the functions condition");
arr =[1,2,3,4,5,6];
var somefun=(e=>e%2===0);
console.log("implementing on ",arr);
console.log("checking for array contains even no");
console.log(arr.some(somefun));
console.log("implementing on ",arr);
console.log("checking for array contains '0'");
var somefun=(e=>e===0);
console.log(arr.some(somefun));

console.log("Sort");
unsortedarray = [100, 652, 27, 1, 82, 0];
console.log("The array before sorting ", unsortedarray);
console.log("The array after sorting", unsortedarray.sort((a,b)=>a-b));

unsortedNameArray=['sun','moon','earth']
console.log("The array before sorting ", unsortedNameArray);
console.log("The array after sorting", unsortedNameArray.sort());

console.log("\ntolocalString");
d = new Date();
console.log("Usings tolocalString on d",d);
console.log(d.toLocaleString());
arr=[d,1];
console.log("Appending to array",arr);
console.log("Using toLocaleString on array",arr.toLocaleString(undefined))

console.log("\n.values");

console.log("this will gets the values of arrays in itreates");

var array1 = ['a', 'b', 'c'];
console.log("using.values() on",array1);

var iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}


var array1 = ['abhi', 'sid', 'soodi'];
console.log("using.values() on",array1);

var iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

arr=["sam", "is","good","boy"];
console.log(arr.toString());


console.log("impliment of split, join, toString");
console.log(arr.toString().split(',').join(' '));


console.log("Creating Array Using Array.of()");
var a = Array.of("Abhinav","Raju");
var numarray = Array.of(1,20,30,40);
var emptyarray= Array(7)
console.log("Build array ",a);

console.log("Build Array",numarray);
console.log("Build Array",emptyarray);
console.log("finished");