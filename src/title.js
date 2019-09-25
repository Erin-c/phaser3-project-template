import { Scene } from 'phaser';

class TitleScene extends Scene {
  constructor(){
    super('title')
    this.style1 = { fontSize: '64px',
           fontFamily: 'Arial',
           color: '#ffffff',
           align: 'center',
           backgroundColor: '#003366',
           padding: {
            x: 20,
            y: 20
        }
         }
    this.style = { font: "bold 100px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
  }
  preload(){
    this.load.image('stage', '../assets/stage.png');
  }
  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    const title = this.add.text(0, 0, 'Civics: An American Musical', this.style);
    Phaser.Display.Align.In.Center(title, stage);
    this.createStartButton();
  }
  createStartButton(){
    const startButton = this.add.text(960, 810, 'Start', this.style1).setOrigin(.5);
    startButton.setInteractive().on('pointerdown', ()=> {
    this.scene.start('intro')
    })
   }
}

export default TitleScene
