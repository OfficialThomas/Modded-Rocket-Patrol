//Scoutship prefab
class Scoutship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue, timeValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.seconds = timeValue;
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed * 1.75;
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    //position reset
    reset() {
        this.x = game.config.width;
    }
}