// オブジェクト型の比較
// == 演算子は全く同じアドレスの場合だけtrueを返す。

var user  = {name: "Tom"};
var user2 = user;
var user3 = {name:"Tom"};

console.log(user == user2);  // true
console.log(user === user2); // true

console.log(user == user3);  // false
console.log(user === user3); // false
