//関数式 関数を変数にセットしている
var User = function (id, name) {
    this.id = id;
    this.name = name;
};

var user = new User(1, 'Tom');

console.log(user);
console.log(user.name);

/*
 functionをnewをつけて使った時何が起きているか

 コメントアウトの行が自動的に追加されている

 function User(id, name) {
     // var this = new Object();
     this.id = id;
     this.name = name;
     // return this;
 }
*/



