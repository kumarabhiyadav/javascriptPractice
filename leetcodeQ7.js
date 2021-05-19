var reverse = function (x) {
    x < 0 ? neg = '-' : neg = '';
    rev=parseInt(neg + x.toString().split('').reverse().join(''))
    return (Math.abs(rev) > 0x7FFFFFFF ? 0: rev)

};

console.log(reverse(-2147483648));
