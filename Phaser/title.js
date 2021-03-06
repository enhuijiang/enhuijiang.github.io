class GameScene extends Phaser.Scene {

	constructor() {
		super({key : 'gameScene'});
	}

	init() {
		
	};

	preload() {
		this.load.image('sky', 'images/background.jpg');
        this.load.image('platform', 'images/platform.jpg');
        this.load.image('candy', 'images/candy.jpg');
        this.load.image('fire', 'images/fire.jpg');
        this.load.spritesheet('man','images/MAN.jpg',
        { frameWidth: 40, frameHeight: 87 }
        );
        this.load.audio("ding", ["ding.mp3"]);
        this.load.audio("lose", ["losing.mp3"]); 
	}

	create() {
        var platforms;
        var ding;
        var lose;
            
           
        this.ding = this.sound.add("ding");
        this.lose = this.sound.add("lose");

        var musicConfig={
            mute:false,
            volume:1,
            rate:1,
            detune:0,
            seek:0,
            loop:false,
            delay:0      
        }
        this.ding.play(musicConfig);
        this.lose.play(musicConfig);
         
         this.add.image(400, 300, 'sky');
   
         platforms = this.physics.add.staticGroup();
 
         platforms.create(400, 568, 'platform').setScale(2).refreshBody();
 
         platforms.create(600, 400, 'platform');
         platforms.create(60, 250, 'platform');
         platforms.create(750, 250, 'platform');


         player = this.physics.add.sprite(100, 450, 'man');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'man', frame: 4 } ],
            frameRate: 20
        });
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('man', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('man', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.physics.add.collider(player, platforms);
        player.body.setGravityY(60);

        candies = this.physics.add.group({
            key: 'candy',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        

        candies.children.iterate(function (child) {

            child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.4));
       
        });
        this.physics.add.collider(candies, platforms);
        this.physics.add.overlap(player, candies, collectStar, null, this);
        
        
          
            
        var score = 0;
        var scoreText;
        
        scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px',fill: '#FFFFFF'});
        
        fires = this.physics.add.group();

        this.physics.add.collider(fires, platforms);

        this.physics.add.collider(player, fires, hitBomb, null, this);
        
        function hitBomb (player, fire){
            
            this.lose.play();
            this.lose.muted = false;
            this.physics.pause();

            player.setTint(0xff0000);

            player.anims.play('turn');

            this.gameOver = true;
       }

        function collectStar (player, candy){
            candy.disableBody(true, true);

            score += 10;
            scoreText.setText('Score: ' + score);
            
            this.ding.play();
            this.ding.muted = false;
            
            if (candies.countActive(true) === 0){
                candies.children.iterate(function (child) {
			child.enableBody(true, child.x, 0, true, true);
                });

                var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

                var fire = fires.create(x, 16, 'fire');
                fire.setBounce(1);
                fire.setCollideWorldBounds(true);
                fire.setVelocity(Phaser.Math.Between(-200, 200), 20);
             }
            
        } 
        this.isPlayerAlive=true;
        this.cameras.main.resetFX();

	}

	update() {
        if(!this.isPlayerAlive){
            return;
        }
         if (this.gameOver){
             this.scene.stop();
             this.scene.restart();
           
          }
         cursors = this.input.keyboard.createCursorKeys();
         if (cursors.left.isDown)
         {
             player.setVelocityX(-160);
             player.anims.play('left', true);
         }
         else if (cursors.right.isDown)
         {
             player.setVelocityX(160);
 
             player.anims.play('right', true);
         }
         else
         {
             player.setVelocityX(0);
 
             player.anims.play('turn');
         }
 
         if (cursors.up.isDown && player.body.touching.down)
         {
             player.setVelocityY(-330);
         }

	}


	end() {
		
	}

}

export default GameScene;
