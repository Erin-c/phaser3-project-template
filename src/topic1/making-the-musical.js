import { Scene } from 'phaser';

var nextScene = '';
var melody;

class Topic1MakingTheMusicalScene extends Scene {
  constructor(){
    super('topic1-making-the-musical')
  }

  preload(){
    this.load.image('stage', '../../assets/backgrounds/stage.png');
    this.load.css('styles', '../../assets/styles/main.css');
  }

  create(){
    nextScene = '';
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    const title = this.add.dom(960, 40, 'div', null, 'Making the Musical').setClassName('title').setOrigin(0.5, 0);
    this.createMelody();
  }

  update(){
    if (nextScene !== '')
    {
      this.scene.start(nextScene)
    }
  }

  createMelody(){
    melody = this.add.dom(960, 500, 'div', 'width:100%; text-align: center;', '').setHTML('<input type="image" src="../../assets/characters/melody.png" alt="Melody">').setOrigin(0.5, 0).setScale(0.75)
    .addListener('click')
    .on('click', function (event) {
      nextScene = 'topic1-backstage-confusion';
      this.removeListener('click');
    });
  }

}

export default Topic1MakingTheMusicalScene
