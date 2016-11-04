// 関数宣言
function User(id, name) {
    this.id = id;
    this.name = name;
}

User.prototype.hello = function() {
    console.log(1, this); // User {id: 1, name: "Tom"}

    var self = this;

    function sayHello() {
        console.log(2, self); // undefined
        console.log("hello, " + self.getName()); // error
    }

    sayHello();
};

User.prototype.getName = function() {
    return this.name;
};

var tom = new User(1, "Tom");
tom.hello();
