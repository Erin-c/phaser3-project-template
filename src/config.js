import Phaser from 'phaser'

import TitleScene from './title'
import IntroScene from './intro'
import TopicSelectionScene from './topic-selection'
import PrimarySourcesScene from './primary-sources'
// Topic 1 Scenes
import Topic1Scene from './topic1/intro'
import Topic1IntroAnimationScene from './topic1/intro-animation'
import Topic1MakingTheMusicalScene from './topic1/making-the-musical'
import Topic1BackstageConfusionScene from './topic1/backstage-confusion'
import Topic1ORQ from './topic1/orq'
//Topic 2 Scenes
import Topic2Scene from './topic2/intro'
//Topic 3 Scenes
import Topic3Scene from './topic3/intro'
//Topic 4 Scenes
import Topic4Scene from './topic4/intro'
//Topic 5 Scenes
import Topic5Scene from './topic5/intro'

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  parent: 'divId',
  scale: {
  //   mode: Phaser.Scale.FIT,
    parent: 'divId',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
   },
  dom: {
    createContainer: true
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
        }
  },
  scene: [Topic1ORQ, TitleScene, IntroScene, TopicSelectionScene,
    Topic1Scene, Topic2Scene, Topic3Scene, Topic4Scene, Topic5Scene,
    Topic1IntroAnimationScene, PrimarySourcesScene, Topic1MakingTheMusicalScene,
    Topic1BackstageConfusionScene
    // , Topic1ORQ
  ]
};


export { config };
