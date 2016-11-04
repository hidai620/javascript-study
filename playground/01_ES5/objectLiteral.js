/**
 * 戻り値にObjectのインスタンスを返す例
 * 全て同じ結果。
 * 推奨する書き方は2 or 3の書き方。
 * 書き方を固定するかどうかはプロジェクトに任せる。
 */

/**
 *
 * @returns {Object}
 */
function returnObject1() {
    var object = new Object();
    object.id   = 1;
    object.name = "Tom";

    return object;
}
console.log("returnObject1():", returnObject1());


/**
 * ブラケット記法に書き換えたもの。（オブジェクトのインスタンス化はブラケット記法が推奨されている)
 *
 * @returns {{id: number, name: string}}
 */
function returnObject2() {
    var object = {
        id  : 1,
        name: "Tom"
    };
    return object;
}
console.log("returnObject2():", returnObject2());

/**
 * 戻り値の変数宣言をなくしたもの。
 * @returns {{id: number, name: string}}
 */
function returnObject3() {
    return {
        id  : 1,
        name: "Tom"
    }
}
console.log("returnObject3():", returnObject3());
