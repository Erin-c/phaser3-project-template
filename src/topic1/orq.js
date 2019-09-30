import { Scene } from 'phaser';

class Topic1ORQ extends Scene {
  constructor(){
    super('topic1-orq')
  }

  preload(){
    this.load.image('stage', '../../assets/backgrounds/stage.png');
    this.load.html('characters', '../../assets/html/characters.html');
    this.load.html('feedback', '../../assets/html/melody-feedback.html');
    this.load.html('continue', '../../assets/html/continue.html');
    this.load.css('styles', '../../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0);
    this.melody = this.add.dom(15, 15).createFromCache('feedback').setScale(0.3).setOrigin(0);
    this.initOQRContainers();
    this.dialog = this.add.dom(885, 810, 'div', null, 'The girls in the photo are wearing dresses!' ).setOrigin(0).setClassName('speech-bubble');
    this.characters = this.add.dom(1450, 900).createFromCache('characters').setScale(0.4).setOrigin(0);

    // this.feedback = this.add.dom(35, 45, 'div', null, 'See how the costume designer, Ruthie identifies and notes details? She simply notes what she sees. That’s an Observation.').setOrigin(0, .5).setClassName('melody-feedback');
    // // this.createContinueButton();
  }

  initOQRContainers(){
    const title = this.add.dom(35, 110, 'div', null, 'SOURCE').setClassName('headers').setOrigin(0);
    const imageContainer = this.add.graphics().fillStyle(0xffffff, 0.75).fillRoundedRect(25, 100, 850, 900, 40);

    const oContainer = this.add.graphics().fillStyle(0xffffff, 0.75).lineStyle(3, 0x4B4054, 1).fillRoundedRect(900, 100, 340, 700, 40).strokeRoundedRect(900, 100, 340, 700, 40);
    const o = this.add.graphics().fillStyle(0x013366, 0.5).fillRoundedRect(901.5, 101.5, 340, 50, { tl: 40, tr: 40, bl: 0, br: 0 });
    const observation = this.add.dom(1070, 150, 'div', 'background: #013366;', 'Observation').setClassName('oqr');

    const rContainer = this.add.graphics().fillStyle(0xffffff, 0.75).lineStyle(3, 0x4B4054, 1).fillRoundedRect(1240, 100, 340, 700, 40).strokeRoundedRect(1240, 100, 340, 700, 40);
    const r = this.add.graphics().fillStyle(0x03713F, 0.5).fillRoundedRect(1241.5, 101.5, 340, 50, { tl: 40, tr: 40, bl: 0, br: 0 });
    const reflection = this.add.dom(1410, 150, 'div', 'background: #03713F;', 'Reflection').setClassName('oqr');

    const qContainer = this.add.graphics().fillStyle(0xffffff, 0.75).lineStyle(3, 0x4B4054, 1).fillRoundedRect(1580, 100, 340, 700, 40).strokeRoundedRect(1580, 100, 340, 700, 40);
    const q = this.add.graphics().fillStyle(0x660F3A, 0.5).fillRoundedRect(1581.5, 101.5, 340, 50, { tl: 40, tr: 40, bl: 0, br: 0 });
    const question = this.add.dom(1750, 150, 'div', 'background: #660F3A;', 'Question').setClassName('oqr');
  }
  //
  // update(){
  //   this.updatePrompt(clickCount);
  // }
  //
  // updatePrompt(clickCount){
  //   if (clickCount == 0)
  //   {
  //     const content = "Here we are backstage, where our creative crew is already hard at work. It looks like they’ve found their first primary source, but there seems to be some confusion about what they should do with it."
  //     this.prompt.setText(content);
  //   }
  //   else if (clickCount == 1)
  //   {
  //     const content = "Can you help them Observe, Reflect, and Question? I’ll show you what I mean."
  //     this.prompt.setText(content);
  //   }
  //   else
  //   {
  //    this.scene.start('orq');
  //   }
  // }
  //
  // createContinueButton(){
  //   const continueButton =  this.add.dom(960, 900).createFromCache('continue')
  //     .addListener('click')
  //     .on('click', function (event) {
  //       ++clickCount;
  //     });
  //  }


}

export default Topic1ORQ
