/**
 * Created by N1407A003 on 2016/11/04.
 */
function countDownWrapper(num) {
    function countDownFrom(num) {
        if (num%100 == 0) {
            console.log(num);
        }
        num--;
        if (num < 0) { return false};
        countDownFrom(num);
    }
    return countDownFrom(num);
}

// babel(6.6.5)での変換時にも末尾再帰の最適化はされない。
countDownWrapper(1000000); //RangeError: Maximum call stack size exceeded
console.log("done");

