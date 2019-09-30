import { Scene } from 'phaser';

var nextScene = '';

class Topic1IntroAnimationScene extends Scene {
  constructor(){
    super('topic1-intro-animation')
  }

  preload(){
    this.load.image('stage', '../../assets/backgrounds/stage.png');
    this.load.html('continue', '../../assets/html/continue.html');
    this.load.css('styles', '../../assets/styles/main.css');
  }

  create(){
    nextScene = '';
    console.log('next scene is ' + nextScene)
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    const title = this.add.dom(0, 0, 'div', null, 'Great choice—that pitch is going to make a beautiful musical someday!').setClassName('text');
    Phaser.Display.Align.In.Center(title, stage);
    const subtitle = this.add.dom(960, 700, 'div', null, 'Placeholder for animation').setClassName('text');
    this.createContinueButton();
  }

  update(){
    if (nextScene !== '')
    {
      console.log('next scene is ' + nextScene)
      this.scene.start(nextScene, { topic: '1' })
    }
  }

  createContinueButton(){
    const continueButton =  this.add.dom(960, 900).createFromCache('continue')
      .addListener('click')
      .on('click', function (event) {
        nextScene = 'primary-sources';
        this.removeListener('click');
      });
   }
}

export default Topic1IntroAnimationScene
