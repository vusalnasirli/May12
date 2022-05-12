// 0,1,1,2,3,5,8...

let  number = +prompt("Enter some number");
let num1 =0;
let num2 =1;

function Fibonacci(n)
{
if (n==1) {
    return n;
}
else if (n==2){
    return n-1;
}
for (let i = 1; i< n; i++) {
    let sum = num2;
    num2 = sum + num1;
    num1 = sum;
}
return num2;
}

console.log(Fibonacci(number));