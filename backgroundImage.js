// トップページでスライドショーする画像はこのうちの五枚。何枚でも追加可能
var images = [];

//imagesフォルダ内の画像枚数を設定
var numberOfImages = 18;

for (var i = 1; i <= numberOfImages; i++) {
    images.push("images/im" + i + ".jpg");
}

for (var i = images.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [images[i], images[rand]] = [images[rand], images[i]];
}

for (let i = 0; i < 5; i++) {
    document.getElementById("im" + i).style.backgroundImage = "url(" + images[i] + ")"
}
