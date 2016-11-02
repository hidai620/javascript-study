var hello = "hello"; // プリミティブ型
console.log(hello); // hello

hello.hello = function () { return ;}; //プリミティブ型なので拡張されない(エラーにもならない)
console.log(hello); // hello

var world = new String("world"); // オブジェクト
console.log(world); // [String: 'world']

world.world = function () { return;}; // オブジェクトなので拡張される
console.log(world); //{ [String: 'world'] world: [Function] }
