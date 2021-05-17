console.log("Array Help \n");
console.log("Push Example \n");
// Push Example
const basearr = [];
var arr = [];
arr.push(3); //push element
console.log(arr); // 3
console.log(basearr); // []s
basearr.push(10, 30, 40);
arr.push(basearr, [1, 2]); // [3,[10,20,30],[1,2]] //push array in arrays
console.log(basearr);
console.log(arr); // [3,[10,20,30],[1,2]]

delete arr;

console.log("Pop Example \n");
var arr = [100, 20, 30];
console.log(`Before Pop: `, arr);
arr.pop();
console.log(`After Pop: `, arr);

// concatenate  of Array

console.log("Concatenate \n");

const arr2 = [10, 20, 30];
console.log("Array 1 Before concatenate", arr2);
const arr3 = [40, 50, 60];
console.log("Array 2 Before concatenate", arr3);

arr4 = arr2.concat(arr3);
console.log("Array after Concatenate", arr4);

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

console.log("Example of indexOf\n");

console.log(
  "Example of indexOf implimented on " + arrOfFind + " with value of " + found
);
index = arrOfFind.indexOf(found);
console.log("And its find on " + index);

console.log("Example of Include \n");
console.log(
  "Example of Include implimented on " + arrOfFind + " with value of " + found
);

var exist = arrOfFind.includes(found);

console.log("includes return ture when element is exist in array", exist);

console.log("Found The length of array\n");

console.log(".length used on array", arrOfFind);

console.log("The length of array is", arrOfFind.length);

console.log("Example of sort on array \n");

unsortedarray = [100, 652, 27, 1, 82, 0];

console.log("The array before sorting ", unsortedarray);

console.log("The array after sorting", unsortedarray.sort());

console.log("foreach on array \n");

unsortedarray.forEach((element) => {
  console.log(element);
  // console.log(typeof element);
});

console.log(
  "Use of .toString() on array Note .toString() Exist for almost every propery in js\n"
);

console.log(unsortedarray.toString());

console.log("Remove first Elemen using shift \n");

console.log("Before removing element from front", unsortedarray);
unsortedarray.shift();

console.log("After removing element from front", unsortedarray);

console.log("\nReverse on array\n");

console.log("Before reverse ", unsortedarray);

console.log("Before reverse ", unsortedarray.reverse());

// console.log(".at on array");

// console.log("Get the element from  this array",unsortedarray,"of 3rd postion",unsortedarray.at(3));
console.log("\nUse of Map to Array\n");

unsortedarray.map((e) => {
  console.log(e);
  // console.log(typeof(e));

});


console.log("\nUsing Slice\n");

console.log("Before Slcied",unsortedarray);
console.log("this is sliced from 2 to 3 array",unsortedarray.slice(2,4));


arrayforcopy=[10,20];
console.log("\nCopyWithIn");

console.log("Array before copyWithin",arrayforcopy);

console.log("Array Before copyWithin",arrayforcopy.copyWithin(0,1));

arrayforcopyarray=[10,20,30];
console.log("\nCopy Array\n");

console.log("Orignal Array:",arrayforcopyarray);

copiedArray=[...arrayforcopyarray];

console.log("Copied Array:",copiedArray);

console.log("Proof\n");

console.log('Changed Value of orginal Array',arrayforcopyarray);

arrayforcopyarray[0]=100;

console.log("Changed value of [0] with 100",arrayforcopyarray);

console.log("Copied Array",copiedArray);

console.log("\n Proof of is Array is Array or not\n");

console.log(Array.isArray(copiedArray));

console.log("\Create new from form any data type");

console.log("Creating array from abhinav");
strtoarray=Array.from("Abhinav")
console.log(strtoarray);

console.log("\Using filter on",copiedArray);

console.log(copiedArray.filter(e=>e<=20));

console.log("\n Example of fill\n")
console.log(copiedArray.fill(0,1,2));

console.log("Using flat  for attach value from sub array to array");
subarray=[10,20,30,[100,200,300],];

console.log("Before flat call",subarray);

console.log(subarray.flat());

console.log("Use of Join");

console.log(subarray.join());

console.log("Get Keys of array");

const iterator = subarray.keys();

for (const key of iterator) {
  console.log(key);
}

console.log("\nReduce item\n");


const reducer=(x,y)=>x+y

console.log(subarray.reduce(reducer));

console.log("Unsift Example");

console.log("Before Unsift",subarray);

subarray.unshift(300);
// console.log("After unsifted",subarray.unshift(300));

console.log("After Unsift",subarray);


const array = [1, 2, 3, 4, 5];


console.log("Using Array.every()");

const isBelowThreshold = (currentValue) => currentValue < 10;

const array10 = [1, 30, 39, 29, 10, 13];

console.log(array10.every(isBelowThreshold));

console.log("Using Array.Splice()");


const months = ['Jan', 'March', 'April', 'June'];

months.splice(2,4,'Feb');

console.log(months);

console.log("Using findIndex");
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));



console.log("Use entries");

var b = array1.entries();

console.log(b.next().value);


console.log("Use reduceright");
 
const array5 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array5);
// expected output: Array [4, 5, 2, 3, 0, 1]



