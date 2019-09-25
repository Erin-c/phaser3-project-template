import { Scene, GameObjects } from 'phaser'

class TopicSelectionScene extends Scene {
  constructor(){
    super('topic-selection')
    this.style1 = { fontSize: '48px',
           fontFamily: 'Arial',
           color: '#ffffff',
           align: 'center',
           backgroundColor: '#003366',
           wordWrap: { width: 1000, useAdvancedWrap: true },
           padding: {
            x: 20,
            y: 25
          }
         };
         this.style2 = { fontSize: '64px',
                fontFamily: 'Arial',
                color: '#010032',
                align: 'center',
                backgroundColor: '#FEFF99',
                wordWrap: { width: 1840, useAdvancedWrap: true },
                padding: {
                 x: 20,
                 y: 25
               }
              };
  }

  preload(){
    this.load.image('stage', '../assets/stage.png');
  }

  create(){
    const stage = this.add.image(0,0, 'stage').setOrigin(0,0);
    this.topicDialog = this.add.text(960, 57, 'We received a ton of musical pitches, but a few really stood out. Take a look and choose a historical topic worthy of your talents.', this.style2).setOrigin(0.5, 0);
    this.createTopics();
  }

  createTopics(){

    this.topic1 = this.add.text(960, (this.topicDialog.getBottomCenter(top)).y + 40, 'School Desegregation and the Moton High School Walk Out', this.style1).setOrigin(0.5, 0)
    .setInteractive().on('pointerdown', () => {
      this.scene.start('topic1-intro')});

    this.topic2 = this.add.text(960, (this.topic1.getBottomCenter(top)).y + 40, 'National Parks', this.style1).setOrigin(0.5, 0)
    .setInteractive().on('pointerdown', () => {
      this.scene.start('topic2-intro')});

    this.topic3 = this.add.text(960, (this.topic2.getBottomCenter(top)).y + 40, 'FDA', this.style1).setOrigin(0.5, 0)
    .setInteractive().on('pointerdown', () => {
      this.scene.start('topic3-intro')});

    this.topic4 = this.add.text(960, (this.topic3.getBottomCenter(top)).y + 40, 'Title 9', this.style1).setOrigin(0.5, 0)
    .setInteractive().on('pointerdown', () => {
      this.scene.start('topic4-intro')});

    this.topic5 = this.add.text(960, (this.topic4.getBottomCenter(top)).y + 40, 'Immigration', this.style1).setOrigin(0.5, 0)
    .setInteractive().on('pointerdown', () => {
      this.scene.start('topic5-intro')});
  }
}

  export default TopicSelectionScene
