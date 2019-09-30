import { Scene, GameObjects } from 'phaser'

var nextScene = '';

class TopicSelectionScene extends Scene {
  constructor(){
    super('topic-selection')
  }

  preload(){
    this.load.image('stage', '../assets/backgrounds/stage.png');
    this.load.html('topics', '../assets/html/topics.html');
    this.load.css('styles', '../assets/styles/main.css');
  }

  create(){
    nextScene = '';
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0);
    this.dialog = this.add.dom(960, 25, 'div', null, 'We received a ton of musical pitches, but a few really stood out. Take a look and choose a historical topic worthy of your talents.').setClassName('text').setOrigin(.5, 0);
    this.routeTopics();
  }

  update(){
    if (nextScene !== '')
    {
      this.scene.start(nextScene);
    }
  }

  routeTopics(){
    const topics = this.add.dom(960, 200).createFromCache('topics').setOrigin(0.5, 0)
    .addListener('click')
    .on('click', function (event) {
      if (event.target.name === 'topic1Button')
      {
        nextScene = 'topic1-intro';
      }
      if (event.target.name === 'topic2Button')
      {
        nextScene = 'topic2-intro';
      }
      if (event.target.name === 'topic3Button')
      {
        nextScene = 'topic3-intro';
      }
      if (event.target.name === 'topic4Button')
      {
        nextScene = 'topic4-intro';
      }
      if (event.target.name === 'topic5Button')
      {
        nextScene = 'topic5-intro';
      }
    });
  }
}

export default TopicSelectionScene
