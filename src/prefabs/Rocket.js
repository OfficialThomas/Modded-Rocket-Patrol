//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxRocket = scene.sound.add('sfx_rocket'); //add rocket sfx
    }

    update() {
        //left/right movement
        if(!this.isFiring) {
            //found mouse movement input on this page
            //https://stackoverflow.com/questions/28104605/how-to-find-the-mouse-position-x-y-using-phaser    
            if(game.input.mousePointer.x <= borderUISize + this.width){
                this.x = borderUISize + this.width;
            } else if(game.input.mousePointer.x >= game.config.width - borderUISize - this.width){
                this.x = game.config.width - borderUISize - this.width;
            } else {
                this.x = game.input.mousePointer.x;  
            }
        }
        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();      //play sfx
        }
        //if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.moveSpeed;
        }
        //reset on miss
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    //reset rocket to "ground"
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}