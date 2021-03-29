

var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 1000,
    backgroundColor: '#e6e6fa',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('image','assets/Unknown.jpn');
}

function create ()
{
    var image = this.add.sprite(200, 200, 'image');

    image.setInteractive();

    this.input.setDraggable(image);

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

