import { Scene } from 'phaser';
import * as content from './topic1/source-it-content';
import * as game from './game-state'

var count = 0;
var item = 0;
var tutorialItem = 0;

class SourceScene extends Scene {
  constructor(){
    super('source');
  }

  preload(){
    this.load.image('stage', '../assets/backgrounds/stage.png');
    this.load.html('sourceTemplate', '../assets/html/source-it.html');
    this.load.html('continue', '../assets/html/continue.html');
    this.load.css('styles', '../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0);
    this.template = this.add.dom(0, 0).createFromCache('sourceTemplate').setOrigin(0);
    this.createContinueButton();
    $("#game").hide();
    $("#prompt").show();
  }

  createContinueButton(){
    const continueButton =  this.add.dom(1900, 1050).createFromCache('continue').setOrigin(1)
      .addListener('click')
      .on('click', () => {
        this.updateState(++count);
      });
   }

  updateState(count){
    console.log(count)
    var keys = Object.keys(content.tutorials);
    if(count == 1){
      $("#game").show();
      $("#prompt, #speaker, #dialog").hide();
      $("#feedback").show().html("Can you help them <strong>Observe</strong>, <strong>Reflect</strong>, and <strong>Question</strong>? I’ll show you what I mean.");
      $("#primary-source").attr("src", content.source);
    }
    else if(count == 2){
      $("#feedback").hide();
      $("#dialog").show();
      $("#speaker").show().html(content.tutorials[keys[tutorialItem]].speaker);
      $("#speech-bubble").html(content.tutorials[keys[tutorialItem]].claim).addClass("player3");
    }
    else if(count < 9 && count % 2 == 1){
      $("#feedback").show().html(content.tutorials[keys[tutorialItem]].feedback);
      $(content.tutorials[keys[tutorialItem]].answer).addClass("pulse");
    }
    else if(count < 9 && count % 2 == 0){
      $(content.tutorials[keys[tutorialItem]].answer).removeClass("pulse");
      $("#feedback").hide();
      $("#game").prepend(content.tutorials[keys[tutorialItem]].check);
      ++tutorialItem;
      if (count < 7){
        $("#speaker").show().html(content.tutorials[keys[tutorialItem]].speaker);
        $("#speech-bubble").html(content.tutorials[keys[tutorialItem]].claim).addClass("player3");
      }
    }
    else if(count == 9){
      $("#speaker").hide();
      $("#speech-bubble").hide();
      $("#prompt").show().html("Let’s keep going! Select <strong>Observation</strong>, <strong>Reflection</strong>, or <strong>Question</strong> to sort the crew’s comments on the chart.").css({ "box-shadow":"0 0 0 1000px rgba(0, 0, 0, .5)"});
    }
    else if(count == 10){
      this.startGame();
    }
    else{
      $("#game").hide();
      $("#prompt").show().html("You got " + game.returnScore() + " points!");
    }
  }

  startGame(){
    var keys = Object.keys(content.claims);
    // remove instructions and disable continue button
    $("#prompt").hide();
    $(".buttons").attr("disabled", true);
    // show first claim
    $("#speaker").show().html(content.claims[keys[item]].speaker);
    $("#speech-bubble").show().html(content.claims[keys[item]].claim);
    // listen for user click
    $("#observation, #reflection, #question").click(function(){
      $("#feedback").show().css({"margin-top":"30px"})
      // show feedback if correct
      if (event.target.id == content.claims[keys[item]].answer){
        var feedback = Math.floor(Math.random() * content.correctFeedback.length)
        $("#feedback").html(content.correctFeedback[feedback]);
        game.updateScore();
      }
      // show feedback if incorrect
      else{
        if(content.claims[keys[item]].answer == "observation"){
          $("#feedback").html(content.incorrectFeedback.observation);
        }
        else if(content.claims[keys[item]].answer == "reflection"){
          $("#feedback").html(content.incorrectFeedback.reflection);
        }
        else{
          $("#feedback").html(content.incorrectFeedback.question);
        }
      }
      // move on to next
      if(item < 9){
        ++item;
        $("#speaker").show().html(content.claims[keys[item]].speaker);
        $("#speech-bubble").show().html(content.claims[keys[item]].claim);
      }
      //end game
      else{
        $(".buttons").attr("disabled", false);
        $("#observation, #reflection, #question").unbind("click");
      }
    });
  }
}

export default SourceScene
