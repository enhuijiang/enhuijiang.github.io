       
  import {TitleScene} from 'title.js';
  import {GameScene} from 'game.js';


	    
    var gameScene = new GameScene();
    var titleScene = new TitleScene();
	    
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
            }
        },
        audio: {
        disableWebAudio: true
        },
      
    };

      var game = new Phaser.Game(config);

      game.scene.add('TitleScene', titleScene);
      game.scene.add('GameScene', gameScene);
        
      game.scene.start('TitleScene');