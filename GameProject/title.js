class TitleScene extends Phaser.Scene {

  
        constructor(){
           super({key:'titleScene'});
        }
        preload() {
             this.load.image('backgroundTitle', 'images/backgroundTitle.jpg');
            
        };
   
        create() {
             var bg = this.add.sprite(0,0,'backgroundTitle');
             bg.setOrigin(0,0);
   
             var text = this.add.text(100,100, 'Welcome To My Game!\n This is Enhui Jiang\n In this game, player need to eat all the candies and avoid all the fires.');
             text.setInteractive({ useHandCursor: true });
            text.on('pointerdown', () => this.clickButton());
       };  
       clickButton() {
               this.scene.switch('gameScene');
       }
   
                

}

export default TitleScene;