import { Scene } from 'phaser';

class Topic2Scene extends Scene {
  constructor(){
    super('topic2-intro')
    this.style1 = { fontSize: '64px',
           fontFamily: 'Arial',
           color: '#ffffff',
           align: 'center',
           padding: {
            x: 20,
            y: 20
        }
      }
  }
  preload(){
    this.load.image('stage', '../../assets/stage.png');
  }
  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    const title = this.add.text(0, 0, 'Topic2', this.style1);
    Phaser.Display.Align.In.Center(title, stage);
    this.createCancelButton();
    this.createProduceItButton();
  }
  createCancelButton(){
    const cancelButton = this.add.text(500, 810, 'Cancel', this.style1).setOrigin(0, 0)
    .setOrigin(.5).setInteractive().on('pointerdown', () => {
      this.scene.start('topic-selection');
    })
  }
  createProduceItButton(){
    const produceItButton = this.add.text(1420, 810, 'Get the show on the road!', this.style1).setOrigin(1, 0)
    .setOrigin(.5).setInteractive().on('pointerdown', () => {
      this.scene.start('topic-selection');
    })
  }
}

export default Topic2Scene
