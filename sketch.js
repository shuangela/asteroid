var spaceship;
var astroids;
var spaceshipImage, astroidsImage;
var GRAVITY = 0.3;

function setup() {
  createCanvas(800, 400);

  spaceshipImage = loadImage('spaceship.png');
  astroidsImage = loadImage('meteroid.png');

  spaceship = createSprite();
  spaceship.rotateToDirection = true;
  spaceship.velocity.x = 4;
  spaceship.setCollider('circle', 0, 0, 20);
  spaceship.maxSpeed = 10;
  spaceship.addImage('normal', spaceshipImage);

  astroids = new Group();


  for(var i = 0; i<8; i++) {
    var ang = random(360);
    var px = width/2 + 1000 * cos(radians(ang));
    var py = height/2+ 1000 * sin(radians(ang));
    createAstroid(3, px, py);
  }
}

function draw() {
  background("#003366");
  fill("#ffffff");
  textAlign(CENTER);
  text('Controls: Arrow Keys', width/2, 20);
}

function createAstroid(type, x, y) {
  var a = createSprite(x, y);
  var img = loadImage('meteroid.png');
  a.addImage(img);
  a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = 0.5;
  //a.debug = true;
  a.type = type;

  if(type == 2)
    a.scale = 0.6;
  if(type == 1)
    a.scale = 0.3;

  a.mass = 2+a.scale;
  a.setCollider('circle', 0, 0, 50);
  astroids.add(a);
  return a;
}
