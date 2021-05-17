// var arr = ["abc", "efg", "hij", "klm", "nop"];
// const fun = (e, val) => {
//   return e.indexOf(val) !== -1 ? true : false;
// };
// console.log(arr.filter((e) => fun(e, "h")));

// var childparent = [
//   {
//     child: "sam",
//     parent: "raju",
//   },
//   { child: "sunny", parent: "superman" },
//   {
//     child: "dog",
//     parent: "cat",
//   },
// ];

// fun = (e, val) => {
//   return e["parent"] === val ? true : false;
// };
// filtered = childparent.filter((e) => fun(e, "cat"));
// if (filtered) {
//   for (x of filtered) {
//     console.log(x["child"]);
//   }
// }

students = [
  {
    Abhinav: {
      subjects: [{ Maths: 40 }, { Science: 30 }, { Ds: 50 }],
    },
  },
  {
    Vishal: {
      subjects: [{ Maths: 10 }, { Science: 10" }, { Ds: "10" }],
    },
  },
  {
    Sunny: {
      subjects: [{ Maths: "0" }, { Science: "0" }, { Ds: "0" }],
    },
  },
];

fun = (e,value) => {
  for (const student of students) {
    for (const sub in student) {
      for (const mark of student[sub]["subjects"]) {
        console.log(mark);
        return(mark ===)
      }
    }
  }
};
filtedData = students.filter((e) => fun(e,0));
console.log(filtedData);
