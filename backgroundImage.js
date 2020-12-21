// トップページでスライドショーする画像はこのうちの五枚。何枚でも追加可能
var images = [];

for (var i = 1; i <= 18; i++) {
    images.push("images/im" + i + ".jpg");
}
// var images = [
//     "images/im1.jpg",
//     "images/im2.jpg",
//     "images/im3.jpg",
//     "images/im4.jpg",
//     "images/im5.jpg"
// ]

for (var i = images.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [images[i], images[rand]] = [images[rand], images[i]];
}

for (let i = 0; i < 5; i++) {
    document.getElementById("im" + i).style.backgroundImage = "url(" + images[i] + ")"
}
