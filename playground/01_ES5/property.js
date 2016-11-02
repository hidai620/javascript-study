/**
 * Created by N1407A003 on 2016/11/02.
 */

var myArray = [1,2];

console.log(myArray);
console.log(myArray.constructor);
console.log(Array.prototype)

console.log(myArray.hasOwnProperty("join")); // false

console.log("join" in myArray); // true
