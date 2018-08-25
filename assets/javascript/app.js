var questions = [
    {
        question: "In 'The Note', Jerry's real-life nephew appears as Julianna's son. What is his name?",
        answers: ["Joshua", "Lawrence", "Michael", "Levi"],
        answer: ["Joshua", 0],
        desc: "assets/images/seinfeld1.gif"
    },
    {
        question: "Who said, 'He falls ill, she falls in love'?",
        answers: ["Elaine", "Jerry", "Kramer", "George"],
        answer: ["George", 3],
        desc: "George calls this 'Clara Nightingale Syndrome'. Jerry corrects him, 'you mean Florence Nightingale.'"
    },
    {
        question: "We all remember when George and an Andrea Doria survivor lost out to Elaine's boyfriend, Alan, for an apartment. When George confronts Alan about the apartment, Alan makes a comment about George's what?",
        answers: ["chin", "hairline", "ears", "nose"],
        answer: ["chin", 0],
        desc: "Alan calls George chinless."
    },
    {
        question: "George's cousin worked for what restaurant?",
        answers: ["Bouchard's", "Del Posto", "Carmine's", "Patsy's"],
        answer: ["Bouchard's", 0],
        desc: "George mentions this when he and Jerry visit Mr. Daurimple to talk about the script of their pilot called 'Jerry'. The NBC president had eaten some pasta primavera that Elaine sneezed on from Pfifer's."
    },
    {
        question: "In the episode 'The Stall', Elaine's rock climbing boyfriend Tony dislikes which kind of sandwiches?",
        answers: ["grilled cheese", "bologna", "pastrami", "peanut butter"],
        answer: ["peanut butter", 3],
        desc: "George's willingness to provide Tony with something to eat during their rock climbing trip results in a nasty fall for Elaine's 'mimbo'.",
    },
    {
        question: "Which of the following is NOT a reason Jerry or George have broken up with a woman?",
        answers: ["She sucked on a peach pit", "She kept paying for dinner", "She 'shushed' them", "She beat them at chess"],
        answer: ["She kept paying for dinner", 1],
        desc: "George thought his girlfriend was great until she sucked on a pit in 'The Doodle.'' Jerry and George talk about the other two problems in 'The Engagement.'",
    },
    {
        question: "In the episode when George buys women's glasses Kramer asks George for what, by calling George 'madam?'",
        answers: ["Altoids", "gum", "pretzels", "water"],
        answer: ["pretzels", 2],
        desc: "George buys ladies' glasses without knowing."
    },
    {
        question: "In the episode 'The Pothole', Elaine goes to great lengths to order a particular dish from a nearby Chinese restaurant. What is the name of the dish?",
        answers: ["mighty roasted duck", "tangy tofu", "sizzling spring rolls", "supreme flounder"],
        answer: ["supreme flounder", 3],
        desc: "The flounder was so good, Elaine maintained her cover as a janitor in order to continue eating it."
    },
    {
        question: "In the United States, the pilot episode of 'Seinfeld' aired in July of what year?",
        answers: ["1986", "1991", "1993", "1989"],
        answer: ["1989", 3],
        desc: "'Seinfeld' lasted for nine seasons, beginning in July of 1989 and ending in May of 1998."
    },
    {
        question: "How much was Peterman's historic English cake valued at?",
        answers: ["$2,900", "$29,000", "$129,000", "$229,000"],
        answer: ["$29,000", 1],
        desc: "Elaine saw the cake in Peterman's private office fridge and thought that it was just another office staff birthday cake or fare-well cake and she was caught on video eating the cake."
    },
    // 11: {
    //     question: "",
    //     answers: ["","","",""],
    //     answer: "",
    //     desc: ""
    // }
]

$("#startButton").on("click", function () {
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
    $("#row2").append('<div class="col-5 mainContentBox mt-2 mx-auto" id="answer">');

    $("#timer").append("<p>Time Remaining: 30 seconds</p>");
    runGame();
})

function runQuestion() {
    //Game starts here
    $('#question').append('<p>' + questions[0].question + '</p>');
    var t = 5;
    var time = setInterval(function () {
        if (t > 0) {
            t--;
            $("#timer").html("<p>Time Remaining: " + t + " seconds</p>");
            if (t<=0){
                $("#timer").html("<p>Time Remaining: " + t + " seconds</p>");
                $("#answer").html("<p>You're out of time! <br> The correct answer is: " + questions[0].answer[0] + "</p>");

                setInterval(function(){
                    $("#answer").html("<img src=" + questions[0].desc +" style='max-width: 100%; height: auto; display: block; margin-top: 10px;'>");
                }, (1000*7))
            }
        };
        // console.log(t);
    }, 1000);


    $('#answer').append(
        "<p> A. " + questions[0].answers[0] + "<br>" +
        "B. " + questions[0].answers[1] + "<br>" +
        "C. " + questions[0].answers[2] + "<br>" +
        "D. " + questions[0].answers[3] + "<br></p>"
    )
};

function runGame(){
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    runQuestion();
}

// 

// }






