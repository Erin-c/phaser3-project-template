import { Scene } from 'phaser';

var clickCount = 0;

class PrimarySourcesScene extends Scene {
  constructor(){
    super('primary-sources');
  }

  init(data){
    this.topic = data.topic;
  }

  preload(){
    this.load.image('stage', '../../assets/backgrounds/stage.png');
    this.load.html('continue', '../../assets/html/continue.html');
    this.load.css('styles', '../../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0);
    this.title = this.add.dom(960, 40, 'div', null, 'What are Primary Sources?').setClassName('title').setOrigin(.5, 0);
    this.dialog = this.add.dom(960, 200, 'div', null, '').setClassName('text').setOrigin(.5, 0);
    this.updateDialog(clickCount);
    this.createContinueButton();
  }

  updateDialog(clickCount){
    if (clickCount == 0)
    {
      this.dialog.setText("Remember, you’re going to be looking at primary sources—the raw materials of history. Primary sources are original documents and objects created during the time period you're studying. They're different from secondary sources, which are accounts or interpretations of historical events created by someone, usually after the fact, without first-hand experience. So, a movie about the first moon landing or a history textbook about ancient Greece would be secondary sources. \n \n Here are just a few examples of primary sources. What do you notice about them?");
    }
    else if (clickCount == 1)
    {
      this.title.setVisible(false);
      this.dialog.setText("Now, it’s time to get to the theater and help the team!");
    }
    else
    {
      if (this.topic == 1)
      {
        this.scene.start('topic1-making-the-musical');
      }
      if (this.topic == 2)
      {
        this.scene.start('topic1-making-the-musical');
      }
      if (this.topic == 3)
      {
        this.scene.start('topic3-making-the-musical');
      }
      if (this.topic == 4)
      {
        this.scene.start('topic4-making-the-musical');
      }
      if (this.topic == 5)
      {
        this.scene.start('topic5-making-the-musical');
      }
    }
  }

  createContinueButton(){
    const continueButton =  this.add.dom(960, 900).createFromCache('continue')
      .addListener('click')
      .on('click', () => {
        this.updateDialog(++clickCount);
      });
   }
}

export default PrimarySourcesScene
