
# Usage
```
node xxxxxxx.js
```

# 概要
- 関数式、関数宣言に限らず、functionでクラスを模倣している。
- コンストラクタだということがわかるように、先頭の文字を大文字にする。

# newをつけて関数を使った時何が起きているか

コメントアウトの行が自動的に追加されている

```
 function User(id, name) {
     // var this = new Object();
     this.id = id;
     this.name = name;
     // return this;
 }
```

