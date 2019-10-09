export var source = "../assets/primary-sources/topic1/african-american-school-children.png";

// tutorial
export var tutorials = {
  tutorial1:{
     speaker:"<span class = 'name'>Ruthie</span><span class = 'separator'> / </span><span class = 'role'>Costume Designer</span>",
     claim:"The girls in the photo are wearing dresses!",
     feedback:"See how the costume designer, Ruthie, identifies and notes details? She simply notes what she sees. That’s an <strong>Observation.</strong>",
     answer:"#observation",
     check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 995px; margin-top: 300px;'>"
  },
  tutorial2:{
    speaker:"<span class = 'name'>JVan</span><span class = 'separator'> / </span> <span class = 'role'>Set Designer</span>",
    claim:"Look at all those children! I think that they’re going to school.",
    feedback:"Set designer JVan is thinking a little more deeply and generating a hypothesis about the source. File that under <strong>Reflection</strong>!",
    answer:"#reflection",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1335px; margin-top: 300px;'>"
  },
  tutorial3:{
    speaker:"<span class = 'name'>Manuel</span><span class = 'separator'> / </span> <span class = 'role'>Writer</span>",
    claim:"What was a typical school day like for these students?",
    feedback:"Faye and Manuel are our writing team. They want to know more about the story. <br> Their <strong>Question</strong> will lead to more observations and reflections.",
    answer:"#question",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1675px; margin-top: 300px;'>"
  }
}

// start game
export var claims = {
  claim1:{
    speaker:"<span class = 'name'>Ruthie</span><span class = 'separator'> / </span><span class = 'role'>Costume Designer</span>",
    claim:"I think the people in the photo were students, <br> dressed nicely for the first day of school.",
    answer:"reflection",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1335px; margin-top: 400px;'>"
  },
  claim2:{
    speaker:"<span class = 'name'>JVan</span><span class = 'separator'> / </span><span class = 'role'>Set Designer</span>",
    claim:"I see a banner hanging over the door.",
    answer:"observation",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 995px; margin-top: 400px;'>"
  },
  claim3:{
    speaker:"<span class = 'name'>Faye</span><span class = 'separator'> / </span><span class = 'role'>Writer</span>",
    claim:"What else was happening when this photo was taken?",
    answer:"question",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1675px; margin-top: 400px;'>"
  },
  claim4:{
    speaker:"<span class = 'name'>Banks</span><span class = 'separator'> / </span><span class = 'role'>Director</span>",
    claim:"Who were the adults in the photo? Why were they there?",
    answer:"question",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1675px; margin-top: 500px;'>"
  },
  claim5:{
    speaker:"<span class = 'name'>Elle</span><span class = 'separator'> / </span><span class = 'role'>Actor</span>",
    claim:"The people in the photo are African American.",
    answer:"observation",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 995px; margin-top: 500px;'>"
  },
  claim6:{
    speaker:"<span class = 'name'>Ruthie</span><span class = 'separator'> / </span><span class = 'role'>Costume Designer</span>",
    claim:"I think the weather must have been cool that day.",
    answer:"reflection",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1335px; margin-top: 500px;'>"
  },
  claim7:{
    speaker:"<span class = 'name'>JVan</span><span class = 'separator'> / </span><span class = 'role'>Set Designer</span>",
    claim:"I think students would have enjoyed attending school in a building like this.",
    answer:"reflection",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1335px; margin-top: 600px;'>"
  },
  claim8:{
    speaker:"<span class = 'name'>Manuel</span><span class = 'separator'> / </span><span class = 'role'>Writer</span>",
    claim:"We think the man in the hat was a reporter!",
    answer:"reflection",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1335px; margin-top: 700px;'>"
  },
  claim9:{
    speaker:"<span class = 'name'>Banks</span><span class = 'separator'> / </span><span class = 'role'>Director</span>",
    claim:"Many of the people are facing away from the camera.",
    answer:"observation",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 995px; margin-top: 600px;'>"
  },
  claim10:{
    speaker:"<span class = 'name'>Elle</span><span class = 'separator'> / </span><span class = 'role'>Actor</span>",
    claim:"How old would the people in the photo be today?",
    answer:"question",
    check:"<img src='../assets/characters/2.png' alt='check' class='checks' style='margin-left: 1675px; margin-top: 600px;'>"
  }
}

export var correctFeedback = [
  "Nice!",
  "Great!",
  "You’ve got it!"
]

export var incorrectFeedback = {
  observation: "That’s an observation. They’re identifying details.",
  reflection: "Sorry, that’s a reflection.They’re making a hypothesis about the source.",
  question: "That’s actually a question. See how they’d need to keep analyzing to answer it?",
}

export function checkAnswer(clicked_id)
{
    console.log(clicked_id);
}
