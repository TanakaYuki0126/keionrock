// トップページでスライドショーする画像はこのうちの五枚。何枚でも追加可能
var images = [
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/92024438_657288468388017_5155286435510616064_o.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=wuyUF3BPwZoAX_bB6eF&_nc_ht=scontent-nrt1-1.xx&oh=5f41a2e421d4da0b4b832d4bed911b2a&oe=5F832B33",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/90821662_657287498388114_7013775658446749696_o.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=vQu85bNJzucAX8fxqdk&_nc_ht=scontent-nrt1-1.xx&oh=41ad717d887b7df178d31813d1215fe3&oe=5F822D87",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/91900261_657288288388035_1807279202584494080_o.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=yhcGPHyJouIAX9AknfD&_nc_oc=AQm11fzqstLfGzSQCmBLXGtJNy3QzJIMe70zXpBRf0Pz1WKZwtWfwZTfMVd45zU4fDs&_nc_ht=scontent-nrt1-1.xx&oh=55b2bd2f3bfa6b77f4cf1254e0353413&oe=5F81CEFD",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/91328186_657287355054795_8515383619122888704_o.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=SgBlt46en6AAX9Pv82n&_nc_ht=scontent-nrt1-1.xx&oh=7469ce31d2f97dab3e6c87ccdb9b5b37&oe=5F80781B",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/91121353_657288435054687_7065806017551925248_o.jpg?_nc_cat=104&_nc_sid=0debeb&_nc_ohc=g1aBAPPpwlUAX9Sea2n&_nc_ht=scontent-nrt1-1.xx&oh=3adb0234d4986c1e5bff7e28e085855a&oe=5F82DFE2",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/91008929_655839018532962_8579866677557067776_o.jpg?_nc_cat=100&_nc_sid=0debeb&_nc_ohc=_AAO8BeXEbAAX-a4TG0&_nc_ht=scontent-nrt1-1.xx&oh=9fe1587bd84a48c4f6bb362d027b34e3&oe=5F81BC24",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/118790837_765611740889022_9011149671184502811_o.jpg?_nc_cat=102&_nc_sid=0debeb&_nc_ohc=pVweHHc6qlkAX8gKIL_&_nc_ht=scontent-nrt1-1.xx&oh=d4a379fcef949190cd005e657806fbc0&oe=5F8338B3",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/118928039_765611830889013_6216176325845499391_o.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=RzpuKbybpckAX-ICkVw&_nc_oc=AQnC4Ln2pcIbCDh4lReKJ2SzFNp25-95KYrNXvm_Ddv48L6fHjfXjfmUCQd8-tLKz58&_nc_ht=scontent-nrt1-1.xx&oh=ea24df3bd0a7a47fd47c278db60b8a72&oe=5F831174",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/118714045_765656190884577_4315327842399548278_o.jpg?_nc_cat=101&_nc_sid=0debeb&_nc_ohc=YJlhyp785OAAX962yMA&_nc_ht=scontent-nrt1-1.xx&oh=1492484a58d380be5260a19d0eed9909&oe=5F82DD53",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/118805360_765656144217915_2183259507438450466_o.jpg?_nc_cat=105&_nc_sid=0debeb&_nc_ohc=HO1_VbA-Ff0AX8iu8Zb&_nc_ht=scontent-nrt1-1.xx&oh=cfceecbc224f9fe222f73f378e143c6c&oe=5F81CB1F",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/118818739_766229884160541_1131271052729871561_o.jpg?_nc_cat=109&_nc_sid=0debeb&_nc_ohc=VHz4-bubb5EAX9myGcl&_nc_ht=scontent-nrt1-1.xx&oh=568cbcab41661f9dd7a0304d98a513f7&oe=5F832E21",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/91315234_655832085200322_7195068744861745152_o.jpg?_nc_cat=110&_nc_sid=0debeb&_nc_ohc=sF6FIu2ntkMAX_xLm_C&_nc_ht=scontent-nrt1-1.xx&oh=27034cf2dbcd70b63d30de3d7bc35df0&oe=5F82D3D5",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/82664006_604971686953029_408663509694414848_o.jpg?_nc_cat=107&_nc_sid=0debeb&_nc_ohc=SCkZhJPqpDIAX-eiCXd&_nc_ht=scontent-nrt1-1.xx&oh=da7541d867e78defe600793a76454891&oe=5F854D27",
    "https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/83161005_604975043619360_3831135592813428736_o.jpg?_nc_cat=103&_nc_sid=0debeb&_nc_ohc=L5rMk0WezXEAX-hASHP&_nc_ht=scontent-nrt1-1.xx&oh=d614aead5e32a225b86a172b299d57e8&oe=5F81CBFC"
]

for (var i = images.length - 1; i > 0; i--) {
    var rand = Math.floor(Math.random() * (i + 1));
    [images[i], images[rand]] = [images[rand], images[i]];
}

for (let i = 0; i < 5; i++) {
    document.getElementById("im" + i).style.backgroundImage = "url(" + images[i] + ")"
}
