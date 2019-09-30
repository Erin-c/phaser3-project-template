import { Scene } from 'phaser';

var clickCount = 0;

class IntroScene extends Scene {
  constructor(){
    super('intro')
  }

  preload(){
    this.load.image('stage', '../assets/backgrounds/stage.png');
    this.load.html('continue', '../assets/html/continue.html');
    this.load.css('styles', '../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    this.dialog = this.add.dom(960, 25, 'div', null, '').setClassName('text').setOrigin(.5, 0);
    this.melody = this.add.dom(960, 500, 'div', 'width:100%; text-align: center;', '').setHTML('<img src="../assets/characters/melody.png" alt="Melody">').setOrigin(0.5, 0).setScale(0.75).setVisible(false);
    this.createContinueButton();
  }

  update(){
    console.log(clickCount);
    this.updateDialog(clickCount);
  }

  createContinueButton(){
    const continueButton =  this.add.dom(960, 900).createFromCache('continue')
      .addListener('click')
      .on('click', function (event) {
        ++clickCount;
      });
  }

  updateDialog(clickCount){
    if (clickCount == 0)
    {
      this.dialog.setText("As the producer of the biggest hit musical in history, your talent is in high demand. EVERYONE wants you to take on their project—you’ve got the golden touch. A few pitches have caught your eye, but their creators need your expertise to make it a smash hit.");
    }
    else if (clickCount == 1)
    {
      this.dialog.setText("With your mentorship, these musicals could take the world by storm and become part of history. Are you up for the challenge of making THE GREAT AMERICAN CIVICS MUSICAL?");
    }
    else if (clickCount == 2)
    {
      this.melody.setVisible(true);
      this.dialog.setText("Hi! I’m Melody, your production assistant.The creators of these musicals know how to make an entertaining show, but historical accuracy is KEY to winning over the critics. That's where we come in! We'll help make this musical Broadway-bound by analyzing primary sources and working with the writers and creatives to make sure every aspect of the show is authentic, historically accurate, and of course, a ton of fun to watch!");
    }
    else
    {
      this.scene.start('topic-selection')
    }
  }
}

export default IntroScene
