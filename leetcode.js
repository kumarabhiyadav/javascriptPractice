// leetCode Solution Problem1
// arr = [2,7,11,15];
// target = 9;
// var twoSum = function (nums, target) {
//     flag = true;
//     res = [];
//     for (i = 0; i < nums.length; i++) {
//         temp =  nums[i]-target;
//         if (nums.indexOf(Math.abs(temp)) !== -1 && temp !== nums[i]) {
//             if (flag) {
//                 flag = false;
//                 res.push(i)
//                 continue
//             }
//             else {
//                 res.push(nums.indexOf(Math.abs(temp)))
//                 return res;
//             }



//         }
//     }
// }


// console.log(twoSum(arr, target));