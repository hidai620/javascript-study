/**
 * 第3引数に計算方法の関数を受け取る関数
 *
 * @param x
 * @param y
 * @param fn
 */
function calculate(x, y, fn) {
   return fn(x, y)
}

/**
 * x と yを加算して返す
 * @param x
 * @param y
 * @returns {*}
 */
function add(x,y) {
    return x + y;
}

/*
 * add の丸括弧がついていないところがポイント。関数  // calculate(1, 2, add())ではない
 */
var result = calculate(1, 2, add); // 3
console.log("result1:", result);

/*
 * あらかじめ宣言した関数ではなく、無名関数を渡す例。
 */
var result2 = calculate(1, 2, function(x, y) {
    return x + y;
});
console.log("result2:", result2);


/**
 * 関数を返す関数
 *
 * 関数の中でも関数を宣言できる。
 * 最後に関数を実行するのではなく、値として返している。
 */
function getCalculateMethod1() {
    function add (x, y) {
       return x + y;
    }
    return add; // 関数を返す
}
var calculateMethod1 = getCalculateMethod1();
console.log("calculateMethod1:", calculateMethod1(1,2)); // 変数に受け取った関数は丸括弧で実行できる

/**
 * 関数をreturn文の値として直接宣言する方法
 * 上と同じものの省略した書き方。
 */
function getCalculateMethod2() {
    return function add (x, y) {
        return x + y;
    }
}
var calculateMethod2 = getCalculateMethod2();
console.log("calculateMethod2:", calculateMethod2(1,2));
