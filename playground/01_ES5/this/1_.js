// 関数宣言
function User(id, name) {
    this.id = id;
    this.name = name;
}

User.prototype.hello = function() {
    console.log(1, this) // User {id: 1, name: "Tom"}

    function sayHello() {
        console.log(2, this); // undefined
        console.log("hello, " + this.getName()); // error
    }

    sayHello();
};

User.prototype.getName = function() {
    return this.name;
};

var tom = new User(1, "Tom");
tom.hello();
