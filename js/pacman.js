var posX = 0;
var posY = 0;
const pacArray = ['./images/PacMan1.png', './images/PacMan2.png'];
var gameArea = document.getElementById("GameArea");
var bounds = 0;
var focus = 0;
var direction = 0;
var startInterval = 0;
var keycap = document.querySelector('body');

//Use u
keycap.onkeydown = keyboard;

function keyboard(e){
  if(e.code === "ArrowRight"){
    run(1)
  }
  if(e.code === "ArrowLeft"){
    run(2)
  }
  if(e.code === "ArrowUp"){
    run(3)
  }
  if(e.code === "ArrowDown"){
    run(4)
  }
}

//Function for move
function run(arrow) {

  if(arrow !== undefined){
    direction = arrow;
  }
  let img = document.getElementById("PacMan");
  let imgWidth = img.width
  let imgHeight = img.height
  focus = (focus + 1) % 2;
  img.src = pacArray[focus];
  var timeout;
  if(startInterval === 0){
    timeout = setInterval(run, 200);
    startInterval = 1;
  }
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
  bounds = checkPageBounds(bounds, imgWidth, imgHeight);
  if (direction !== 0 && bounds === 1 || bounds === 2) {
    if(bounds===1){
      if(posX < 0){
        posX += 10;
      }else{
        posX -= 10;
      }
      img.style.left = posX + "px";
    }else if(bounds === 2){
      if(posY < 0){
        posY += 10;
      }else{
        posY -= 10;
      }
      img.style.top = posY + "px";
    }
    direction = 0;
    bounds = 0;
  }

}


function checkPageBounds(bounds, imgWidth, imgHeight) {
  let widthGameArea = gameArea.clientWidth;
  let widthArea = widthGameArea - imgWidth;
  let heightGameArea = gameArea.clientHeight;
  let heightArea = heightGameArea - imgHeight;

  if(posX > widthArea || posX < 0){
    bounds = 1;
  }

  if(posY > heightArea || posY < 0){
    bounds = 2;
  }
  console.log(posX+" "+posY);
  console.log(widthArea);

  return bounds;
}

