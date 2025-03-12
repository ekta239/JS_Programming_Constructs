var sum =0
for (var i=0; i<5; i++) {
    var n=Math.floor(Math.random() * 90+10);
    console.log(n)
    sum+=n
}
console.log("sum = "+sum) 
console.log("average = " + sum/5)