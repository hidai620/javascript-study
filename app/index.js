require('./app.tag');

// riot.mount('*');
riot.mount('app')
riot.route.start(true)



//for (var x in window.document) {
//   console.log(x);
//}


var myArray = [1,2];

var user = new Object();

console.log(user.isPrototypeOf(Array));
console.log(myArray.isPrototypeOf(Array));
console.log(user.valueOf());
