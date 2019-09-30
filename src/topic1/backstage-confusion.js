import { Scene } from 'phaser';

var clickCount = 0;

class Topic1BackstageConfusionScene extends Scene {
  constructor(){
    super('topic1-backstage-confusion')
  }

  preload(){
    this.load.image('stage', '../../assets/backgrounds/stage.png');
    this.load.html('characters', '../../assets/html/characters.html');
    this.load.html('continue', '../../assets/html/continue.html');
    this.load.css('styles', '../../assets/styles/main.css');
  }

  create(){
    clickCount = 0;
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0);
    const title = this.add.dom(960, 40, 'div', null, 'Backstage Confusion').setClassName('title').setOrigin(0.5, 0);
    this.prompt = this.add.dom(960, 200, 'div', null, '').setClassName('text').setOrigin(.5, 0);
    // this.dialog = this.add.dom(1350, 650, 'div', null, 'Hello' ).setOrigin(0).setClassName('speech-bubble').setVisible(false);
    this.characters = this.add.dom(1350, 830).createFromCache('characters').setScale(0.5).setOrigin(0);
    this.createContinueButton();
  }

  update(){
    this.updatePrompt(clickCount);
  }

  updatePrompt(clickCount){
    if (clickCount == 0)
    {
      const content = "Here we are backstage, where our creative crew is already hard at work. It looks like they’ve found their first primary source, but there seems to be some confusion about what they should do with it."
      this.prompt.setText(content);
    }
    else if (clickCount == 1)
    {
      const content = "Can you help them Observe, Reflect, and Question? I’ll show you what I mean."
      this.prompt.setText(content);
    }
    else
    {
     this.scene.start('topic1-orq');
    }
  }

  createContinueButton(){
    const continueButton =  this.add.dom(960, 900).createFromCache('continue')
      .addListener('click')
      .on('click', function (event) {
        ++clickCount;
      });
   }


}

export default Topic1BackstageConfusionScene
