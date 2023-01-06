console.log(6 + 5); //number
console.log(6 + "5"); //string

let a = 12 + "34";
console.log(a);
console.log(typeof a); //string

// Increment (qo'shish), decrement(ayirish)
/* .................. postfix................ */
let incr = 5;
let decr = 5;

console.log(incr++); //5
console.log(decr--); //5

console.log(incr); //6
console.log(decr); //4

/* ....................prefix................. */
let incr1 = 7;
let decr1 = 7;

console.log(++incr1); //8
console.log(--decr1); //6

/* ..............|| => or; && => and.............  */
let rQ = true;
let tQ = true;
let mQ = false;

console.log(rQ && tQ && mQ); //false
console.log(rQ || tQ || mQ); //true
