import Phaser from 'phaser'
import TitleScene from './title'
import IntroScene from './intro'
import TopicSelectionScene from './topic-selection'
import GameScene from './game'

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
  scene: [TitleScene, IntroScene,TopicSelectionScene, GameScene]
};

export { config }
