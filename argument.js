function kek(a, b, c)
{
   var  D = b*b-4*a*c;
 var kor1 = [-b+Math.sqrt(D)]/(2*a);
 var kor2 = [-b-Math.sqrt(D)]/(2*a);
  return kor1+ "," + kor2;
}
console.log(kek(1, -8, 12));