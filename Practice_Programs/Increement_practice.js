let a = 5; 
let b = a++ + ++a;
let c = a++ + ++a + ++a + ++a + a++;

console.log(b);
console.log(a);
console.log(c);

//Line | a \ Exp
//A + B 5 + 7 =12
// A+B+C+D+E - 12 +13+14+15