import { Scene } from 'phaser';

var nextScene = '';

class TitleScene extends Scene {
  constructor(){
    super('title')
  }

  preload(){
    this.load.image('stage', '../assets/backgrounds/stage.png');
    this.load.html('start', '../assets/html/start.html');
    this.load.css('styles', '../assets/styles/main.css');
  }

  create(){
    nextScene = '';
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0);
    const title = this.add.dom(0, 0, 'div', null, 'Civics: An American Musical').setClassName('title');
    Phaser.Display.Align.In.Center(title, stage);
    this.createStartButton();
  }

  update(){
    if (nextScene !== '')
    {
      this.scene.start(nextScene)
    }
  }

  createStartButton(){
    const startButton =  this.add.dom(960, 880).createFromCache('start')
    .addListener('click')
    .on('click', function (event) {
      // nextScene = 'intro';
      nextScene = 'topic1-orq';
      this.removeListener('click');
    });
  }
}

export default TitleScene
