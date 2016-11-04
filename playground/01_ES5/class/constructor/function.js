// 関数宣言
function User(id, name) {
    this.id = id;
    this.name = name;
}

var user = new User(1, 'Tom');

console.log(user);
console.log(user.name);
