import { Scene } from 'phaser';

var nextScene = '';

class Topic4Scene extends Scene {
  constructor(){
    super('topic4-intro')
  }

  preload(){
    this.load.image('stage', '../../assets/backgrounds/stage.png');
    this.load.html('produce-it', '../../assets/html/produce-it.html');
    this.load.html('cancel', '../../assets/html/cancel.html');
    this.load.css('styles', '../../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    const title = this.add.dom(0, 0, 'div', null, 'Topic 4').setClassName('title');
    Phaser.Display.Align.In.Center(title, stage);
    this.createCancelButton();
    this.createProduceItButton();
  }

  update(){
    if (nextScene !== '')
    {
      this.scene.start(nextScene)
    }
  }

  createCancelButton(){
    const cancelButton =  this.add.dom(500, 810).createFromCache('cancel')
    .addListener('click')
    .on('click', function (event) {
      nextScene = 'topic-selection';
      this.removeListener('click');
    });
  }

  createProduceItButton(){
    const produceItButton =  this.add.dom(1420, 810).createFromCache('produce-it')
    .addListener('click')
    .on('click', function (event) {
      nextScene = 'topic2-intro-animation';
      this.removeListener('click');
    });
  }
}

export default Topic4Scene
