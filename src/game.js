import { Scene } from 'phaser'

class GameScene extends Scene {
  constructor(){
    super('game')
    this.score = 0;
    this.gameOver = false;
  }

  // ================== PRELOAD ==================
  preload(){
    this.load.image('stage', '../assets/stage.png');
    this.load.image('sky', '../assets/sky.png');
    this.load.image('ground', '../assets/platform.png');
    this.load.image('star', '../assets/star.png');
    this.load.image('bomb', '../assets/bomb.png');
    this.load.spritesheet('dude', '../assets/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  // ================== CREATE ==================
  create(){
    const sky = this.add.image(0,0, 'sky').setOrigin(0,0);
    this.createPlatforms();
    this.createPlayer();
    this.createCursor();
    this.createStars();
    this.createBombs();

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    this.gameOverText = this.add.text(400, 300, 'Game Over', { fontSize: '64px', fill: '#000' }).setOrigin(.5);
    this.gameOverText.visible = false;
  }

  // ================== createPlatforms ==================
  createPlatforms(){
    //  The platforms group contains the ground and the 2 ledges we can jump on
    this.platforms = this.physics.add.staticGroup();
    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    //  Now let's create some ledges
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
  }

  // ================== createPlayers ==================
  createPlayer(){
    this.player = this.physics.add.sprite(100, 450, 'dude');
    //  Player physics properties. Give the little guy a slight bounce.
    this.player.setBounce(0.2);

    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, this.platforms);
    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
  }

  // ================== createCursor ==================
  createCursor(){
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  // ================== createStars ==================
  createStars(){
    this.stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });
    this.stars.children.iterate((child) => {
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
  }

  // ================== collectStar ==================
  collectStar (player, star){
    star.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText('Score: ' + this.score)
    if (this.stars.countActive(true) === 0)
    {
      //  A new batch of stars to collect
      this.stars.children.iterate((child) => {
          child.enableBody(true, child.x, 0, true, true);
      });
      const x = (this.player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
      const bomb = this.bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

    }
  }

  // ================== createBombs ==================
  createBombs(){
  this.bombs = this.physics.add.group();
  this.physics.add.collider(this.bombs, this.platforms);
  this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
  }

hitBomb (player, bomb)
  {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    this.gameOver = true;
    // show game over text
    this.gameOverText.visible = true;
  }

  // ================== update ==================
  update ()
  {
      if (this.cursors.left.isDown)
      {
          this.player.setVelocityX(-160);
          this.player.anims.play('left', true);
      }
      else if (this.cursors.right.isDown)
      {
          this.player.setVelocityX(160);
          this.player.anims.play('right', true);
      }
      else
      {
          this.player.setVelocityX(0);
          this.player.anims.play('turn');
      }
      if (this.cursors.up.isDown && this.player.body.touching.down)
      {
          this.player.setVelocityY(-330);
      }
  }
}

export default GameScene
