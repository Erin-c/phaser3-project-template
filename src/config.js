import Phaser from 'phaser'
import GameScene from './game'
import TitleScene from './title'

const config = {
  type: Phaser.AUTO,
  parent: 'Civics: An American Musical',
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
        }
  },
  scene: GameScene
};

export { config }
