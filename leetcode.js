// leetCode Solution Problem1
arr = [4, 5, 8, 6];
target = 9;
function getres(arr,t) {
    res = [];
    for (i = 0; i < arr.length; i++) {
        temp = t - arr[i];
        if (arr.indexOf(temp) !== -1) {
            res.push(arr[i], arr[arr.indexOf(temp)])
            return res;
        }
    }
}
console.log(getres(arr,target))