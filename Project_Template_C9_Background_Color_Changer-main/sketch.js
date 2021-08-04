var btn_blue;
var btn_purple;
var btn_yellow;
var btn_pink;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  //creating blue button
  btn_blue= createButton("BLUE");
  btn_blue.position(100,50);
  btn_blue.mousePressed(blue_bg);
  draw()

  //creating purple button
  btn_purple= createButton("PURPLE");
  btn_purple.position(200,50);
  btn_purple.mousePressed(purple_bg);
  draw()

  //creating yellow button
  btn_yellow= createButton("YELLOW");
  btn_yellow.position(200,200);
  btn_yellow.mousePressed(yellow_bg);
  draw()

  //creating pink button
  btn_pink= createButton("PINK");
  btn_pink.position(100,200);
  btn_pink.mousePressed(pink_bg);
  draw()
}

 //creating blue background
 function blue_bg(){
  r = 0;
  g = 0;
  b = 255;
}

//creating purple background
function purple_bg(){
  r = 122;
  g = 0;
  b = 123;
}

//creating yellow background
function yellow_bg(){
  r = 255;
  g = 255;
  b = 0;
}

//creating pink background
function pink_bg(){
  r = 255
  g = 192
  b = 203
}

function draw() {
  background(r,g,b);

 
}

