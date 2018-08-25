var questions = {
    a: {
        question: "In 'The Note', Jerry's real-life nephew appears as Julianna's son. What is his name?",
        answers: ["Joshua", "Lawrence", "Michael", "Levi"],
        answer: ["Joshua",0],
        desc: "When Jerry keeps talking to Julianna, his physical therapist, about a kidnapping and how she should protect her son, she gets worried. Whenever Jerry tries to call her, her secretary says she isn't there when she is. Jerry finally sees her in her office one day with her son who has heard about Jerry and is terrified of him. This episode is the only one that uses music different from the regular 'Seinfeld' theme song. A vocalist is brought in for it, but it is never used again."
    },
    b: {
        question: "Who said, 'He falls ill, she falls in love'?",
        answers: ["Elaine", "Jerry", "Kramer", "George"],
        answer: ["George",3],
        desc: "George calls this 'Clara Nightingale Syndrome'. Jerry corrects him, 'you mean Florence Nightingale.'"
    },
    c: {
        question: "We all remember when George and an Andrea Doria survivor lost out to Elaine's boyfriend, Alan, for an apartment. When George confronts Alan about the apartment, Alan makes a comment about George's what?",
        answers: ["chin","hairline","ears","nose"],
        answer: ["chin", 0],
        desc: "Alan calls George chinless."
    },
    d: {
        question: "George's cousin worked for what restaurant?",
        answers: ["Bouchard's","Del Posto","Carmine's","Patsy's"],
        answer: ["Bouchard's", 0],
        desc: "George mentions this when he and Jerry visit Mr. Daurimple to talk about the script of their pilot called 'Jerry'. The NBC president had eaten some pasta primavera that Elaine sneezed on from Pfifer's."
    },
    e: {
        question: "In the episode 'The Stall', Elaine's rock climbing boyfriend Tony dislikes which kind of sandwiches?",
        answers: ["grilled cheese","bologna","pastrami","peanut butter"],
        answer: ["peanut butter", 3],
        desc: "George's willingness to provide Tony with something to eat during their rock climbing trip results in a nasty fall for Elaine's 'mimbo'.",
    },
    f: {
        question: "Which of the following is NOT a reason Jerry or George have broken up with a woman?",
        answers: ["She sucked on a peach pit","She kept paying for dinner","She 'shushed' them", "She beat them at chess"],
        answer: ["She kept paying for dinner",1],
        desc: "George thought his girlfriend was great until she sucked on a pit in 'The Doodle.'' Jerry and George talk about the other two problems in 'The Engagement.'",
    },
    g: {
        question: "In the episode when George buys women's glasses Kramer asks George for what, by calling George 'madam?'",
        answers: ["Altoids","gum","pretzels","water"],
        answer: ["pretzels",2],
        desc: "George buys ladies' glasses without knowing."
    },
    h: {
        question: "In the episode 'The Pothole', Elaine goes to great lengths to order a particular dish from a nearby Chinese restaurant. What is the name of the dish?",
        answers: ["mighty roasted duck","tangy tofu","sizzling spring rolls","supreme flounder"],
        answer: ["supreme flounder",3],
        desc: "The flounder was so good, Elaine maintained her cover as a janitor in order to continue eating it."
    },
    i: {
        question: "In the United States, the pilot episode of 'Seinfeld' aired in July of what year?",
        answers: ["1986","1991","1993","1989"],
        answer: ["1989",3],
        desc: "'Seinfeld' lasted for nine seasons, beginning in July of 1989 and ending in May of 1998."
    },
    j: {
        question: "How much was Peterman's historic English cake valued at?",
        answers: ["$2,900","$29,000","$129,000","$229,000"],
        answer: ["$29,000",1],
        desc: "Elaine saw the cake in Peterman's private office fridge and thought that it was just another office staff birthday cake or fare-well cake and she was caught on video eating the cake."
    },
    // 11: {
    //     question: "",
    //     answers: ["","","",""],
    //     answer: "",
    //     desc: ""
    // }
}

var t=30;
var correct=0;
var incorrect=0;
var unanswered=0;

function myTimer(){
    if (t>0){
    t--;
    $("#timer").html("<p>Time Remaining: " + t + " seconds</p>");
    }
    else{
        clearInterval(theTimer);
    }
}

$("#startButton").on("click",function(){
    $(".container").empty();
    //Adds the first two rows to the page
    $(".container").html('<div class="row" id="row1">');
    $(".container").append('<div class="row" id="row2">');
    //Add columns to row 1 and initial timer
    $("#row1").html('<div class="col-5 mainContentBox mt-5 mb-5 mx-auto" id="logo">');
    $("#logo").append("<p><img src='assets/images/seinfeldLogo3.png' id='quizLogo'></p>");
    $("#row1").append('<div class="col-5 mainContentBox mt-5 mb-5 mx-auto" id="timer">');

    //Add columns to row 2 and first question
    $("#row2").html('<div class="col-5 mainContentBox mt-2 mx-auto" id="question">');
    $('#question').append('<p>' + questions.a.question + '</p>');
    $("#row2").append('<div class="col-5 mainContentBox mt-2 mx-auto" id="answer">');

    $("#timer").append("<p>Time Remaining: 30 seconds</p>");
    
    var theTimer = setInterval(myTimer, 1000);

    $('#answer').append(
        "<p> A. " + questions.a.answers[0] + "<br>"+
        "B. " + questions.a.answers[1]+ "<br>"+
        "C. " + questions.a.answers[2]+ "<br>"+
        "D. " + questions.a.answers[3]+ "<br></p>"
    )

})

// for (var i=0; i<questions.length; i++){
    
// }



    


