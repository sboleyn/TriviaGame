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
        desc: "assets/images/seinfeld2.gif"
    },
    {
        question: "We all remember when George and an Andrea Doria survivor lost out to Elaine's boyfriend, Alan, for an apartment. When George confronts Alan about the apartment, Alan makes a comment about George's what?",
        answers: ["chin", "hairline", "ears", "nose"],
        answer: ["chin", 0],
        desc: "assets/images/seinfeld3.gif"
    },
    {
        question: "George's cousin worked for what restaurant?",
        answers: ["Bouchard's", "Del Posto", "Carmine's", "Patsy's"],
        answer: ["Bouchard's", 0],
        desc: "assets/images/seinfeld4.gif"
    },
    {
        question: "In the episode 'The Stall', Elaine's rock climbing boyfriend Tony dislikes which kind of sandwiches?",
        answers: ["grilled cheese", "bologna", "pastrami", "peanut butter"],
        answer: ["peanut butter", 3],
        desc: "assets/images/seinfeld5.gif"
    },
    {
        question: "Which of the following is NOT a reason Jerry or George have broken up with a woman?",
        answers: ["She sucked on a peach pit", "She kept paying for dinner", "She 'shushed' them", "She beat them at chess"],
        answer: ["She kept paying for dinner", 1],
        desc: "assets/images/seinfeld6.gif"
    },
    {
        question: "In the episode when George buys women's glasses Kramer asks George for what, by calling George 'madam?'",
        answers: ["Altoids", "gum", "pretzels", "water"],
        answer: ["pretzels", 2],
        desc: "assets/images/seinfeld7.gif"
    },
    {
        question: "In the episode 'The Pothole', Elaine goes to great lengths to order a particular dish from a nearby Chinese restaurant. What is the name of the dish?",
        answers: ["mighty roasted duck", "tangy tofu", "sizzling spring rolls", "supreme flounder"],
        answer: ["supreme flounder", 3],
        desc: "assets/images/seinfeld8.gif"
    },
    {
        question: "In the United States, the pilot episode of 'Seinfeld' aired in July of what year?",
        answers: ["1986", "1991", "1993", "1989"],
        answer: ["1989", 3],
        desc: "assets/images/seinfeld9.gif"
    },
    {
        question: "How much was Peterman's historic English cake valued at?",
        answers: ["$2,900", "$29,000", "$129,000", "$229,000"],
        answer: ["$29,000", 1],
        desc: "assets/images/seinfeld10.gif"
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

function runGame() {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var qi = 0;

    runQuestion();

    function runQuestion() {
        $("#question").empty();
        if (qi === 10) {
            console.log("i freaking equate");
            $('#question').append("<p>All done. Here's how you did..<br>Correct answers: "+correct+"<br>Incorrect answers: "+incorrect+"<br>Unanswered questions: "+unanswered+"</p>");
            // var reportCorrect = $("<p>").text(correct);
            // var reportIncorrect = $("<p>").text(incorrect);
            // var reportUnanswered = $("<p>").text(unanswered);
            // $('#answer').empty();
            // $('#question').append("<p>All done. Here's how you did..</p>");
            // $('#question').append("<p>Correct answers: "+correct+"</p>");
            // $('#question').append("<p>Incorrect answers: "+incorrect+"</p>");
            // $('#question').append("<p>Unanswered questions: "+unanswered+"</p>");
            // $('#answer').append(reportIncorrect);
            // $('#answer').append(reportUnanswered);
            $('#answer').html("<br><p>Start Again?</p>");
            // $(".startAgainButton").click(runGame());
        };
        var answerChosen = false;
        //Game starts here
        if (qi < questions.length) {
            $('#question').append('<p>' + questions[qi].question + '</p>');
            $('#answer').html(
                "<p> A. <span class='mulChoice'>" + questions[qi].answers[0] + "</span><br>" +
                "B. <span class='mulChoice'>" + questions[qi].answers[1] + "</span><br>" +
                "C. <span class='mulChoice'>" + questions[qi].answers[2] + "</span><br>" +
                "D. <span class='mulChoice'>" + questions[qi].answers[3] + "</span><br></p>"
            );
            var t = 3;
            var time = setInterval(function () {
                //Stop question when user clicks answer and handles right/wrong answers

                if (answerChosen) {
                    // console.log("answerIsChosen");
                    if ($("#clicked").text().toLowerCase() === questions[qi].answer[0].toLowerCase()) {
                        // console.log("correct");
                        $("#answer").html("<p>Right! <br> The correct answer is: " + questions[qi].answer[0] + "</p>");

                        var gitInt = setTimeout(function () {
                            $("#answer").html("<p><img src=" + questions[qi].desc + " class='gifImage img-responsive mx-auto';></p>");
                            qi += 1;
                            correct += 1;
                            setTimeout(runQuestion, 3000);

                        }, (1000 * 4))
                            ;
                    }
                    else {
                        // console.log("incorrect");
                        $("#answer").html("<p>Wrong! <br> The correct answer is: " + questions[qi].answer[0] + "</p>");

                        var gitInt = setTimeout(function () {
                            $("#answer").html("<p><img src=" + questions[qi].desc + " class='gifImage img-responsive mx-auto';></p>");
                            qi += 1;
                            incorrect += 1;
                            setTimeout(runQuestion, 3000);
                        }, (1000 * 4))

                    };
                    ;
                    clearInterval(time);
                    return;
                }
                //Timer is counting down

                if (t > 0 && !answerChosen) {
                    t--;
                    // console.log(t);
                    $("#timer").html("<p>Time Remaining: " + t + " seconds</p>");

                    $(".mulChoice").off("click");
                    $(".mulChoice").click(function () {
                        //stops timer
                        $(this).attr("id", "clicked");
                        answerChosen = true;
                        return;
                    })

                    //if timer reaches 0, then do this
                    if (t <= 0) {
                        clearInterval(time);
                        $("#timer").html("<p>Time Remaining: " + t + " seconds</p>");
                        $("#answer").html("<p>You're out of time! <br> The correct answer is: " + questions[qi].answer[0] + "</p>");
                        // console.log(qi);
                        var gitInt = setTimeout(function () {
                            $("#answer").html("<p><img src=" + questions[qi].desc + " class='gifImage img-responsive mx-auto';></p>");
                            qi += 1;
                            unanswered += 1;
                            setTimeout(runQuestion, 3000);
                        }, (1000 * 4))
                    }
                };
            }, 1000);
        };

        // if (qi === 10) {
        //     var reportCorrect = $("<p>").text(correct);
        //     var reportIncorrect = $("<p>").text(incorrect);
        //     var reportUnanswered = $("<p>").text(unanswered);
        //     $('#answer').empty();
        //     $('#answer').append(reportCorrect);
        //     $('#answer').append(reportIncorrect);
        //     $('#answer').append(reportUnanswered);
        //     $('#answer').append("<p class='startAgainButton'>Start Again?</p>");
        //     $(".startAgainButton").click(runGame());
        // }
        console.log(qi==10);
    }



};