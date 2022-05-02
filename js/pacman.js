var posX = 0;
var posY = 0;
const pacArray = ['./images/PacMan1.png', './images/PacMan2.png'];
var gameArea = document.getElementById("GameArea");
var bounds = 0;
var focus = 0;
var direction = 0;


//Function for move to right
function run(arrow) {

  if(arrow !== undefined){
    direction = arrow;
  }
  let img = document.getElementById("PacMan");
  let imgWidth = img.width
  let imgHeight = img.height
  focus = (focus + 1) % 2;
  bounds = checkPageBounds(bounds, imgWidth, imgHeight);
  img.src = pacArray[focus];
  let timeout = setTimeout(run, 500);

  if(direction === 1){
    posX += 10;
    img.style.left = posX + "px";
    img.style.transform="scaleX(1)";
  }
  if(direction === 2){
    posX -= 10;
    img.style.left = posX + "px";
    img.style.transform="scaleX(-1)";
  }
  if(direction === 3){
    posY -= 10;
    img.style.top = posY + "px";
    img.style.transform="rotate(270deg)";
  }
  if(direction === 4){
    posY += 10;
    img.style.top = posY + "px";
    img.style.transform="rotate(90deg)";
  }
  if (bounds === 1) {
    posX = posX;
    posY = posY;
    img.style.left = posX + "px";
    img.style.top = posY + "px";
    clearTimeout(timeout);
    bounds = 0;
  }

}


function checkPageBounds(bounds, imgWidth, imgHeight) {
  let widthGameArea = gameArea.clientWidth;
  let widthArea = widthGameArea - imgWidth -10;
  let heightgamearea = gameArea.clientHeight;
  let heightArea = widthGameArea - imgHeight -10;

  if(posX >= widthArea || posX < 0){
    bounds = 1;
  }

  if(posY >= widthArea || posY < 0){
    bounds = 1;
  }
  console.log(posX+" "+posY);
  console.log(widthArea);

  return bounds;
}

