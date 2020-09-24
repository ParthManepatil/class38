var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1I,car2I,car3I,car4I,treckI,groundI;
function preload(){
  treckI=loadImage("images/track.jpg");
  car1I=loadImage("images/car1.png");
  car2I=loadImage("images/car2.png");
  car3I=loadImage("images/car3.png");
  car4I=loadImage("images/car4.png");
  groundI=loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}


