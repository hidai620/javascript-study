/**
 * 関数の書き方の例
 */

/**
 * 関数式を丸括弧で囲んだだけの場合
 */
var myFunction = (
    function () {
        var a = 1;
        var b = 1;
        return a + b;
    }
);
console.log(myFunction); // 関数を丸括弧でくくっても関数が帰る

/**
 * 内部関数を即時実行した場合、関数の値が返る
 */
var myNum = (
    function () {
        var a = 1;
        var b = 1;
        return a + b;
    }
)();
console.log("myNum:",myNum);

/**
 * 上の例と同じで丸括弧を省略した例
 */
var myNum2 = function() {
    var a = 1;
    var b = 1;
    return a + b;
}();
console.log("myNum2:",myNum2);

/**
 * if文の波カッコは処理のブロックを表現する。
 * しかし、イコールの直後から囲む波カッコは処理のブロックではなく、
 * Objectインスタンスのリテラル表現になるため、この中は式を書くのではなく、
 * Objectの宣言しか書くことはできない。
 * 下記の例はエラー。
 */
//var myNum = {
//    function() {
//        var a = 1;
//        var b = 1;
//        return a + b;
//    }
//}

/**
 * オブジェクトリテラルで囲む場合、オブジェクトのメソッドにする必要がある。
 * @type {{myFunction: myObject.myFunction}}
 */
var myObject = {
    myFunction: function() {
        var a = 1;
        var b = 1;
        return a + b;
    }
};
console.log("myObject.myFunction():",myObject.myFunction());


/*
 * 即時実行
 */

/**
 * 最もよく使われる即時実行
 *
 * 無名関数内に変数のスコープを制限するために使う。
 */
(function () {
    return console.log("hello");
})();

/*
 * 即時実行のパターン
 */

/**
 * Bool値への変換パターン
 * 関数hello2の戻り値は、"hello"ではなく、関数内の戻り値を真偽評価し、反転したものになる。
 */
var hello2 = !function hello2() {
    return "hello2";
}();
console.log(hello2);