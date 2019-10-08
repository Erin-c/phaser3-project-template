import { Scene } from 'phaser';

class TitleScene extends Scene {
  constructor(){
    super('title');
  }

  preload(){
    this.load.image('stage', '../assets/backgrounds/stage.png');
    this.load.html('start', '../assets/html/start.html');
    this.load.css('styles', '../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0);
    const title = this.add.dom(0, 0, 'div', null, '');
    title.setHTML('<h1 class="title" tabindex="1">Civics: An American Musical</h1>');
    Phaser.Display.Align.In.Center(title, stage);
    this.createStartButton();
  }

  createStartButton(){
    const startButton =  this.add.dom(960, 900).createFromCache('start')
    .addListener('click')
    .on('click', () => {
      this.scene.start('intro');
      // this.scene.start('topic1-backstage-confusion');
    });
  }
}

export default TitleScene
