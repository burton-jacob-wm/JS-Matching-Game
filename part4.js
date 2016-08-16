var LeftSide = document.getElementById("leftSide");
var RightSide = document.getElementById("rightSide");
var body = document.getElementsByTagName('body')[0];
var face_number = 5;
var face_size = 50;
var img_src = "http://www.clker.com/cliparts/7/d/9/B/f/R/smiley-face-md.png";

function generateFaces(){
    for (var i = 0; i < face_number; i++){

        var image = document.createElement("img");
        image.src = img_src;
        image.style.height = face_size + "px";
        image.style.top = Math.random() * 400 + "px";
        image.style.left = Math.random() * 400 + "px";
        LeftSide.appendChild(image);

    }
    var LeftSideImages = LeftSide.cloneNode(true);
    LeftSideImages.removeChild(LeftSideImages.childNodes[LeftSideImages.childNodes.length - 1]);
    RightSide.appendChild(LeftSideImages);


    LeftSide.lastChild.onclick = function nextLevel(event){
        event.stopPropagation();
        while(LeftSide.firstChild){
            LeftSide.removeChild(LeftSide.firstChild)
        }
        while(RightSide.firstChild){
            RightSide.removeChild(RightSide.firstChild)
        }
        face_number += 5;
        face_size -= 1;
        generateFaces();
    };
}
generateFaces();


body.onclick = function gameOver() {
    alert("You clicked the wrong one. \n\n Game Over!");

    body.onclick = null;
    LeftSide.lastChild.onclick = null;
};