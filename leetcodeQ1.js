// leetCode Solution Problem1
// nums = [-1,-2,-3,-4,-5];
// nums=[3,2,95,4,-3];
// nums = [3, 3]
// nums =[2,7,11,15];
// target = 92;
var twoSum = function (nums, target) {
    res = [];
    for (i = 0; i < nums.length; i++) {
        temp =  target-nums[i];
        if (nums.indexOf(temp) !== -1 && nums.indexOf(temp) !== i ) {
            if (res.indexOf(Math.abs(i)) !== -1) continue;
            res.push(i,nums.indexOf((temp)))
        }
        if (res.length == 2) return res;
    }
}


