import { Scene } from 'phaser';

class IntroScene extends Scene {
  constructor(){
    super('intro')
    this.style1 = { fontSize: '64px',
           fontFamily: 'Arial',
           color: '#010032',
           align: 'center',
           backgroundColor: '#FEFF99',
           wordWrap: { width: 1440, useAdvancedWrap: true },
           padding: {
            x: 20,
            y: 20
          }
        };
      this.style2 = { fontSize: '64px',
             fontFamily: 'Arial',
             color: '#ffffff',
             align: 'center',
             backgroundColor: '#003366',
             wordWrap: { width: 1700, useAdvancedWrap: true },
             padding: {
              x: 20,
              y: 20
            }
         };
    this.clickCount = 0;
  }
  preload(){
    this.load.image('stage', '../assets/stage.png');
  }
  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    this.introDialog = this.add.text(960,100, '', this.style1).setOrigin(0.5, 0);
    this.createContinueButton();
    this.updateIntroDialog(this.clickCount);
    }


  updateIntroDialog(clickCount){
    if (clickCount == 0)
    {
      this.introDialog.setText("As the producer of the biggest hit musical in history, your talent is in high demand. EVERYONE wants you to take on their project—you’ve got the golden touch. A few pitches have caught your eye, but their creators need your expertise to make it a smash hit.");
    }
    else if (clickCount == 1)
    {
      this.introDialog.setText("With your mentorship, these musicals could take the world by storm and become part of history. Are you up for the challenge of making THE GREAT AMERICAN CIVICS MUSICAL?");
    }
    else if (this.clickCount == 2)
    {
      this.introDialog.setText("Hi! I’m Melody, your production assistant.The creators of these musicals know how to make an entertaining show, but historical accuracy is KEY to winning over the critics. That's where we come in! We'll help make this musical Broadway-bound by analyzing primary sources and working with the writers and creatives to make sure every aspect of the show is authentic, historically accurate, and of course, a ton of fun to watch!");
    }
    else
    {
      this.scene.start('topic-selection')
    }
  }

  createContinueButton(){
    const continueButton = this.add.text(960, 900, 'Continue', this.style2).setOrigin(.5);
    continueButton.setInteractive().on('pointerdown', () => {
      this.updateIntroDialog(++this.clickCount)})
   }

}

export default IntroScene
