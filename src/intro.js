import { Scene } from 'phaser';
import RoundrRctanglePlugin from '../plugins/roundrectangle-plugin.js';

class IntroScene extends Scene {
  constructor(){
    super('intro')
    this.style1 = { fontSize: '64px',
           fontFamily: 'Arial',
           color: '#ffffff',
           align: 'center',
           backgroundColor: '#003366',
           shadow: {
               color: '#010032',
               fill: true,
               offsetX: 2,
               offsetY: 2,
               blur: 8
           }
         };
    this.style = { font: "bold 100px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  }
  preload(){
    this.load.image('stage', '../assets/stage.png');
  }
  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    this.createDialogText();
    // Phaser.Display.Align.In.Center(title, stage);
    this.createContinueButton();
    }

  createDialogText(){
    var introDialog = "As the producer of the biggest hit musical in history, your talent is in high demand. EVERYONE wants you to take on their project—you’ve got the golden touch. A few pitches have caught your eye, but their creators need your expertise to make it a smash hit."
    text = this.add.text(this.world.centerX, this.world.centerY, introDialog, this.style1);
  }

  createContinueButton(){
    const continueButton = this.add.text(960, 810, 'Continue', this.style1).setOrigin(.5);
    continueButton.setInteractive().on('pointerdown', ()=> {
    this.scene.start('game')
    })
   }
}

export default IntroScene
