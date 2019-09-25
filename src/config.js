import Phaser from 'phaser'
import TitleScene from './title'
import IntroScene from './intro'
import TopicSelectionScene from './topic-selection'
// Topic 1 Scenes
import Topic1Scene from './topic1/intro'
import Topic1IntroAnimationScene from './topic1/intro-animation'
//Topic 2 Scenes
import Topic2Scene from './topic2/intro'
//Topic 3 Scenes
import Topic3Scene from './topic3/intro'
//Topic 4 Scenes
import Topic4Scene from './topic4/intro'
//Topic 5 Scenes
import Topic5Scene from './topic5/intro'
import PrimarySourcesScene from './primary-sources'
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
  scene: [TitleScene, IntroScene, TopicSelectionScene,
    Topic1Scene, Topic2Scene, Topic3Scene, Topic4Scene, Topic5Scene,
    Topic1IntroAnimationScene, PrimarySourcesScene, GameScene]
};

export { config }
