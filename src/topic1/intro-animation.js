import { Scene } from 'phaser';

class Topic1IntroAnimationScene extends Scene {
  constructor(){
    super('topic1-intro-animation')
    this.style1 = { fontSize: '64px',
           fontFamily: 'Arial',
           color: '#ffffff',
           align: 'center',
           backgroundColor: '#003366',
           wordWrap: { width: 1000, useAdvancedWrap: true },
           padding: {
            x: 20,
            y: 20
        }
         }
    this.style = { font: "bold 50px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: { width: 1000, useAdvancedWrap: true } };
  }
  preload(){
    this.load.image('stage', '../../assets/stage.png');
  }
  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    const title = this.add.text(0, 0, 'Great choice—that pitch is going to make a beautiful musical someday!', this.style);
    const subtitle = this.add.text(960, 700, 'Placeholder for animation', this.style).setOrigin(.5);
    Phaser.Display.Align.In.Center(title, stage);
    this.createNextButton();
  }
  createNextButton(){
    const nextButton = this.add.text(960, 810, 'Next', this.style1).setOrigin(.5);
    nextButton.setInteractive().on('pointerdown', ()=> {
    this.scene.start('primary-sources')
    })
   }
}

export default Topic1IntroAnimationScene
