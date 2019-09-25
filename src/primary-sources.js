import { Scene } from 'phaser';

class PrimarySourcesScene extends Scene {
  constructor(){
    super('primary-sources')
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
    const title = this.add.text(0, 0, 'What are Primary Sources?', this.style);
    Phaser.Display.Align.In.Center(title, stage);
    this.createStartButton();
  }
  createStartButton(){
    const startButton = this.add.text(960, 810, 'Start', this.style1).setOrigin(.5);
    startButton.setInteractive().on('pointerdown', ()=> {
    this.scene.start('topic-selection')
    })
   }
}

export default PrimarySourcesScene
