var canvas;
var backgroundImage;
var database, gameState;
var form, player, playerCount;
var allPlayers;
var game;
var track, car1_img, car2_img, car1, car2;
var cars = [];
var fuels, powerCoins, fuelImage, powerCoinImage;
var obstacle1Image, obstacle2Image, obstacles;
var lifeImage, blastImage;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  track =  loadImage("./assets/track.jpg");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
