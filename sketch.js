let bigBox;
let text_posX
let text_posY
const text_padding = 10

function setup() {
  createCanvas(windowWidth, windowHeight);

  bigBox = createElement("textarea");
  bigBox.size(width, 100);
  bigBox.position(0,0)
  
  text_posX = text_padding
  text_posY = bigBox.height + text_padding
//  console. log(bigBox. width)
}


function draw() {
  background(220);
  textSize(32);
  
  
textLeading(20); 
text(bigBox.value(), text_posX, text_posY, width - (text_padding*2), 400);

}
