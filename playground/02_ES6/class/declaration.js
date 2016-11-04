/**
 * Created by N1407A003 on 2016/11/04.
 */



// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    hello() {
       console.log(`Hello, ${this.getName()}`)
    }

    getName() {
        return this.name;
    }
}

//const tom = new User(1, "Tom");
//tom.hello();
//
//
//let num = 1;
//console.log(num++);
//
//const b = true ? "b" : "c";
//console.log(b);
//
//const bob = new User(2, "Bob");

