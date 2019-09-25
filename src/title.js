import { Scene } from 'phaser'

class TitleScene extends Scene {
  constructor(){
    super('preloader')
  }
  preload(){
    this.load.image('stage', '../assets/stage.png');
  }
  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0, 0)
    var style = { font: "bold 100px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    var title = this.add.text(0, 0, 'Civics: An American Musical', style);
    Phaser.Display.Align.In.Center(title, stage);

  }
}

export default TitleScene
