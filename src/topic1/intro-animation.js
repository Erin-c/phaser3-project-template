import { Scene } from 'phaser';

class Topic1IntroAnimationScene extends Scene {
  constructor(){
    super('topic1-intro-animation');
  }

  preload(){
    this.load.image('stage', '../../assets/backgrounds/stage.png');
    this.load.html('continue', '../../assets/html/continue.html');
    this.load.css('styles', '../../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0);
    const title = this.add.dom(0, 0, 'div', null, 'Great choice—that pitch is going to make a beautiful musical someday!').setClassName('text');
    Phaser.Display.Align.In.Center(title, stage);
    const subtitle = this.add.dom(960, 700, 'div', null, 'Placeholder for animation').setClassName('text');
    this.createContinueButton();
  }

  createContinueButton(){
    const continueButton =  this.add.dom(960, 900).createFromCache('continue')
      .addListener('click')
      .on('click', () => {
        this.scene.start('primary-sources', { topic: '1' });
      });
   }
}

export default Topic1IntroAnimationScene
