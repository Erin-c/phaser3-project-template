import Phaser from 'phaser'
import TitleScene from './title'
import IntroScene from './intro'
import GameScene from './game'
import RoundrRctanglePlugin from '../plugins/roundrectangle-plugin.js';

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
  scene: [TitleScene, IntroScene, GameScene],
  plugins: {
        global: [{
            key: 'rexRoundrRctangle',
            plugin: RoundrRctanglePlugin,
            start: true
        }]
    }
};

export { config }
