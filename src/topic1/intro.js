import { Scene } from 'phaser';

class Topic1Scene extends Scene {
  constructor(){
    super('topic1-intro')
  }

  preload(){
    this.load.image('stage', '../../assets/backgrounds/stage.png');
    this.load.html('produce-it', '../../assets/html/produce-it.html');
    this.load.html('cancel', '../../assets/html/cancel.html');
    this.load.css('styles', '../../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    const title = this.add.dom(0, 0, 'div', null, 'Topic 1').setClassName('title');
    Phaser.Display.Align.In.Center(title, stage);
    this.createCancelButton();
    this.createProduceItButton();
  }

  createCancelButton(){
    const cancelButton =  this.add.dom(500, 810).createFromCache('cancel')
    .addListener('click')
    .on('click', () => {
      this.scene.start('topic-selection');
    });
  }

  createProduceItButton(){
    const produceItButton =  this.add.dom(1420, 810).createFromCache('produce-it')
    .addListener('click')
    .on('click', () => {
      this.scene.start('topic1-intro-animation');
    });
  }
}

export default Topic1Scene
