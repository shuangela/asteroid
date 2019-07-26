var spaceship;
var astroid;
var spaceshipImage, astroidsImage;

var SCORE = 0;
var gameOver;
var UP = 1;
var DOWN = 1;


function setup() {
  createCanvas(1200, 600);




  spaceshipImage = loadImage('https://i.imgur.com/hNCQhFo.png');
//astroidsImage = loadImage('https://i.imgur.com/cEZZLFv.png');

   spaceship = createSprite(width/2, height/2, 40, 40);
//   astroid = createSprite(width/2, height/2, 40, 40);
  // spaceship.rotateToDirection = true;
  // spaceship.velocity.x = 4;
  // spaceship.setCollider('circle', 0, 0, 20);
  // spaceship.maxSpeed = 10;
  spaceship.addImage(spaceshipImage);
  //astroid.addImage(astroidsImage);
  //
   astroids = new Group();

  //
   gameOver = true;
  updateSprites(false);
  //
  //camera.position.y = height/2;

  // for(var i = 0; i<8; i++) {
  //   var ang = random(360);
  //   var px = width/2 + 1000 * cos(radians(ang));
  //   var py = height/2+ 1000 * sin(radians(ang));
  //   createAstroid(3, px, py);
  //   createAstroid(1, px, py);
  //   createAstroid(2, px, py);
  //}
}

function draw() {
  background("#003366");
  fill("#ffffff");
  textAlign(CENTER);
  text('Controls: Up and Down Arrow Keys', width/3, 20);
  text('Asteroids Hit: ' + SCORE, width/10, 20 );


  if(gameOver) {
    newGame();
  }

  if(!gameOver) {
    if(keyDown(38)) {
      spaceship.velocity.y += UP;
      
    
    } else if(keyDown(40)) {
      spaceship.velocity.y -= DOWN;
    
    } else {
      spaceship.velocity.y = 0;
    
    
    } if (spaceship.overlap(astroids, disappear())) {
      score();
    }
  }


  // get rid of passed asteroids

  for(var i = 0; i<astroids.length; i++) {
    if(astroids[i].position.x < spaceship.position.x-width/2){
      astroids[i].remove();

    }
  }

//   if(!) {
//       var astroidH = random(50, 300);
//       var astroid1 = createSprite(spaceship.position.x + width, astroidH/2+1+100, 80, astroidH);
//       astroid1.addImage(astroidsImage);
//       astroids.add(astroid1);
//   }


     camera.position.x = spaceship.position.x + width/4;


    
    for(var i = 0; i<5; i++) {
      createAstroid();
      drawSprite(astroid);
    }
  
 drawSprite(spaceship);

}


function createAstroid() {
  var astroidH = random(0, 600)
  var astroidX = random(0, 1200)
  astroid = createSprite(astroidX, astroidH, 150, 150);
  var img = loadImage('https://i.imgur.com/cEZZLFv.png');
  astroid.addImage(img);
  astroids.add(astroid);
  return astroid;
  //drawSprite(a);
  //a.setSpeed(2.5-(type/2), random(360));
  //a.rotationSpeed = 0.5;
  //a.debug = true;
  // a.type = type;
  //
  // if(type == 2)
  //   a.scale = 0.6;
  // if(type == 1)
  //   a.scale = 0.3;
  //
  // a.mass = 2+a.scale;
  // a.setCollider('circle', 0, 0, 50);
  // astroids.add(a);
  // return a;



}

function score() {
  SCORE = SCORE + 1;
}

function newGame() {
  astroids.removeSprites();
  gameOver = false;
  updateSprites(true);
  spaceship.position.x = width/2;
  spaceship.position.y = height/2;
  
  
//   astroid.position.x = width/4;
  
//   astroid.position.y = height/4;
  

}

function disappear() {
  for(var i = 0; i<astroids.length; i++) {
        if(astroids[i] = astroid){
          astroids[i].remove();
        }
  }
}

