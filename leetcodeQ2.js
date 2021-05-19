l1 = [2,4,3];
l2 = [5,6,4];
const reducer = (acc,cru)=>acc+cru;
l1=l1.map(String);
console.log(l1.reverse().reduce(reducer));
l2=l2.map(String);
console.log((l2.reverse().reduce(reducer)));
res=parseInt(l1.reverse().reduce(reducer))+parseInt(l2.reverse().reduce(reducer));
res=res.toString().split('').reverse().join("")
