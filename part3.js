var LeftSide = document.getElementById("leftSide");
var RightSide = document.getElementById("rightSide");
var body = document.getElementsByTagName('body')[0];
var face_number = 5;
var img_src = "http://www.clker.com/cliparts/7/d/9/B/f/R/smiley-face-md.png";

function generateFaces(){
    for (var i = 0; i < face_number; i++){

        var image = document.createElement("img");
        image.src = img_src;
        image.style.height = "50px";
        image.style.top = Math.random() * 400 + "px";
        image.style.left = Math.random() * 400 + "px";
        LeftSide.appendChild(image);

    }
    var LeftSideImages = LeftSide.cloneNode(true)[-1];

    LeftSideImages.appendChild(RightSide);
}
generateFaces();