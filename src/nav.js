import { Scene } from 'phaser';
import * as game from './game-state'

class NavScene extends Scene {
  constructor(){
    super({key:'nav', active:true});
  }

  preload(){
    this.load.html('nav', '../assets/html/nav.html');
    this.load.css('styles', '../assets/styles/main.css');
  }

  create(){
    this.nav = this.add.dom(0, 0).createFromCache('nav').setOrigin(0);
  }
  update(){
    $(".score").html("Score: " + game.returnScore());
  }

}

export default NavScene
