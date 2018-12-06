function F(a){
{if (a == 0)
return 1;}
return a * F(a-1);
}
console.log(F(5));




// нашел в интернете вот такую функцию, но не совсем понимаю как она работает в частности "? и :"
function factorial(x) {
   return x == 0 ? 1 : x * factorial( x - 1);
}
console.log(factorial(5));