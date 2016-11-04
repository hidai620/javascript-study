/**
 * Created by N1407A003 on 2016/11/02.
 */


console.log("関数宣言=============================");

function add(x, y) {
    return x + y;
}

var result = add(1, 2);
console.log(result);
// => 3



console.log("関数式(無名関数)=============================");
var add2 = function(x, y) {
    return x + y;
}

var result = add2(10, 20);
console.log(result);
// => 30


console.log("関数式(名前付き関数)=============================");
var add3 = function addFunction(x, y) {
    return x + y;
}

var result = add3(100, 200);
//var result = addFunction(100, 200); // 関数式で名前付き関数を宣言し実行してもこれはエラーになる
console.log(result);
// => 300


console.log("関数宣言巻き上げ=============================");
var result = add5(1000,2000);
console.log(result);
// => 3000

function add5(x, y) {
    return x + y;
}


console.log("関数式NGパターン=============================");
// 関数式は巻き上げが起きないので、関数の呼び出しの前に定義されていないものはエラーになる
var result = add6(10, 20);
console.log(result);


var add6 = function(x, y) {
    return x + y;
}

