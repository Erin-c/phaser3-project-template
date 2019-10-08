import { Scene } from 'phaser';
import * as game from './game-state'

class NavScene extends Scene {
  constructor(){
    super({key:'nav', active:true});
  }

  preload(){
    this.load.html('score', '../assets/html/score.html');
    this.load.css('styles', '../assets/styles/main.css');
  }

  create(){
    this.score = this.add.dom(1860, 30).createFromCache('score').setOrigin(1 , 0);

  }
  update(){
    $(".score").html("Score: " + game.returnScore());
  }

}

export default NavScene
