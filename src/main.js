//Thomas Noell
//Modded Rocket Patrol
//6/28/2021
//Time: 10 Hours
//Point Breakdown:
//Display the time remaining (in seconds) on the screen (10)
//Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
//Implement mouse control for player movement and mouse click to fire (20)
//Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20) 
//Create 4 new explosion SFX and randomize which one plays on impact (10)
//Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;