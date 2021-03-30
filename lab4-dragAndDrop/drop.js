

var config = {
    type: Phaser.AUTO,
    width: 2500,
    height: 2500,
    backgroundColor: '#e6e6fa',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background','assets/images.png');
    this.load.image('eye1','assets/eye1.jpg');
    this.load.image('eye2','assets/eye2.jpg');
    this.load.image('eye3','assets/eye3.jpg');
    this.load.image('mouse3','assets/mouse3.png');
    this.load.image('mouth2','assets/mouth2.jpg');
    this.load.image('mouth1','assets/mouth1.jpg');
    this.load.image('nose','assets/nose.jpeg');
    
}

function create ()
{
    var background = this.add.sprite(500, 400, 'background');
    var eye2 = this.add.sprite(1000, 100, 'eye2');
    var eye3 = this.add.sprite(1000, 250, 'eye3');
    var mouse3 = this.add.sprite(1000, 350, 'mouse3');
    var mouth2 = this.add.sprite(1000, 430, 'mouth2');
    var mouth1 = this.add.sprite(1000, 500, 'mouth1');
    var nose = this.add.sprite(1000, 530, 'nose');
  
   background.setScale(3);
    eye2.setScale(0.3);
    eye3.setScale(0.3);
    mouse3.setScale(0.3);
    mouth2.setScale(0.3);
    mouth1.setScale(0.3);
    nose.setScale(0.3);

    background.setInteractive();
    eye2.setInteractive();
    eye3.setInteractive();
    mouse3.setInteractive();
    mouth2.setInteractive();
    mouth1.setInteractive();
    nose.setInteractive();
    

    this.input.setDraggable(background);
    this.input.setDraggable(eye2);
    this.input.setDraggable(eye3);
    this.input.setDraggable(mouse3);
    this.input.setDraggable(mouth2);
    this.input.setDraggable(mouth1);
    this.input.setDraggable(nose);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}




/*

var gameState={
    preload:function(){
 
        this.load.image('HelloKitty', HelloKitty);
    },
    create:function(){

        this.HelloKitty=this.game.add.sprite(100,100,'HelloKitty');
      
    },
    update: function(){

    },
}
var game= new Phaser.Game(640,360,Phaser.AUTO);

game.state.add('gameState',gameState);
game.state.start('gameState');
*/

