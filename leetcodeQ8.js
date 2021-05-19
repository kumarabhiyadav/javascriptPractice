var myAtoi = function (s) {
  res = s.trim().split(" ");
  for (n of res) {
    if (isNaN(parseInt(n))) return 0;
    else
      return Math.abs(n) > 0x7fffffff
        ? n < 0
          ? -0x7fffffff - 1
          : 0x7fffffff
        : isNaN(parseInt(n))
        ? 0x7fffffff
        : parseInt(n) < 0
        ? Math.abs(parseInt(n)) < 0x7fffffff
          ? parseInt(n)
          : Math.abs(parseInt(n)) < 0x7fffffff
          ? parseInt(n)<0x7fffffff?
          -0x7fffffff:0x7fffffff-1
        : Math.abs(parseInt(n)) < 0x7fffffff
        ? parseInt(n)
        : -0x7fffffff-1:parseInt(n)
  }
  return 0;
};

console.log(myAtoi("      -11919730356x"));
