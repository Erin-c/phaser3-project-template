import { Scene } from 'phaser';
import * as content from './topic1/get-sorted-content';
import * as game from './game-state'

var count = 0;
var item = 0;
var tutorialItem = 0;

class GetSortedScene extends Scene {
  constructor(){
    super('sorted');
  }

  preload(){
    this.load.image('stage', '../assets/backgrounds/stage.png');
    this.load.html('sortItTemplate', '../assets/html/get-sorted.html');
    this.load.html('continue', '../assets/html/continue.html');
    this.load.css('styles', '../assets/styles/main.css');
  }

  create(){
    const stage = this.add.image(0, 0, 'stage').setOrigin(0);
    this.template = this.add.dom(0, 0).createFromCache('sortItTemplate').setOrigin(0);
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
      if(tutorialItem==2){
        $("#feedback").css("margin-top","15px")
      }
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
      $(".buttons").removeClass("pulse");
      if (game.returnScore() > 7){
        $("#prompt").show().html("Excellent work! That got you " + game.returnScore() + " points!");
      }
      else if (game.returnScore() > 4 && game.returnScore() < 8){
        $("#prompt").show().html("OK -- you earned " + game.returnScore() + " points!");
      }
      else{
        $("#prompt").show().html(game.returnScore() + " points. You'll have to work on your primary source analysis skills if you're going to make it in show business.");
      }
    }
  }

  startGame(){
    var keys = Object.keys(content.claims);
    $(".container").addClass("pulse");
    // remove instructions and disable continue button
    $("#prompt").hide();
    $(".buttons").attr("disabled", true);
    // show first claim
    $("#speaker").show().html(content.claims[keys[item]].speaker);
    $("#speech-bubble").show().html(content.claims[keys[item]].claim);
    // listen for user click
    $("#observation, #reflection, #question").click(function(){
      $(".container").removeClass("pulse");
      $("#feedback").show().css({"margin-top":"30px"})
      // show feedback if correct
      if (event.target.id == content.claims[keys[item]].answer){
        var feedback = Math.floor(Math.random() * content.correctFeedback.length)
        $("#feedback").html(content.correctFeedback[feedback]);
        $("#game").prepend(content.claims[keys[item]].check);
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
          $("#game").prepend(content.claims[keys[item]].check);
      }
      // move on to next
      if(item < 9){
        ++item;
        $("#speaker").show().html(content.claims[keys[item]].speaker);
        $("#speech-bubble").show().html(content.claims[keys[item]].claim);
      }
      //end game
      else{
        $(".buttons").attr("disabled", false).addClass("pulse");
        $("#observation, #reflection, #question").unbind("click");
      }
    });
  }
}

export default GetSortedScene
