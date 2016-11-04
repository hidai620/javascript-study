// 関数宣言
function User(id, name) {
    this.id = id;
    this.name = name;
    this.hello = function() {
        // console.log("hello, " + this.getName());
    }
    this.getName = function() {
        return this.name;
    }
}


var start = new Date();
for (var i = 0; i < 1000000; i++) {
    var user = new User(1, 'Tom');
    user.hello();
}
var end = new Date();

console.log((end - start)/1000);