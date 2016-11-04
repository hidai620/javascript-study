require('./app.tag');

// riot.mount('*');
riot.mount('app')
riot.route.start(true);



//var myArray = [1,2];
//var user = new Object();
//console.log(user.isPrototypeOf(Array));
//console.log(myArray.isPrototypeOf(Array));

function heavyLogic() {
    var array = [];
    var max = 10000000;
    for (var i = 0 ; i < max; i++) {
        array.push(i)
        // if (max%100 == 0) console.log(array.length)
    }
    console.log(array.length)
    console.log(array[max -1])
}

// setTimeout(heavyLogic, 0);


// メソッド定義のパフォーマンス比較
// require("../playground/01_ES5/class/methodDeclaration/1_.js"); // 0.335
// require("../playground/01_ES5/class/methodDeclaration/2_.js"); // 0.003

// プロパティアクセス()
// ほぼ変わらない
// require("../playground/01_ES5/class/propertyAccess/1_.js"); // 0.251
// require("../playground/01_ES5/class/propertyAccess/2_.js"); // 0.254

// ES6 class
// require("../playground/02_ES6/class/declaration.js"); //


// this
// require("../playground/01_ES5/this/1_.js"); //
// require("../playground/01_ES5/this/2_.js"); //
require("../playground/01_ES5/this/3_.js"); //

