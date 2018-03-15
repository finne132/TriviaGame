"use strict";

let correct = 0;
let incorrect = 0;
const q1 = {
	question : 'What was used to create tendons of the aliens jaws?',
	possibleAnswers : ['A. Silk Fabric',
				 'B. Plastic Shopping Bags',
				 'C. Shredded Condoms',
				 'D. Real animal parts'],
	flags : [false, false, true, false],
	answer : 'C. Shredded Condoms'
};

const q2 = {
	question: 'What exactly is the Nostromo?',
	possibleAnswers: ['A. A tugboat',
				 'B. A Mining Facility',
				 'C. A Prison',
				 'D. An exploration vessel'],
	flags : [true, false, false, false],
	answer : 'A. A tugboat'
};

const q3 = {
	question : 'What is the transmission that causes Mother to wake up the crew?',
	possibleAnswers : ['A. A distress signal',
				 'B. A warning',
				 'C. An invitation',
				 'D. Music'],
	flags : [false, true, false, false],
	answer : 'B. A warning'
};

const q4 = {
	question : 'What is the name of the captain of the Nostromo?',
	possibleAnswers : ['A. Dallas',
				 'B. Austin',
				 'C. Antonio',
				 'D. Tex'],
	flags : [true, false, false, false],
	answer : 'A. Dallas'
};

const q5 = {
	question : 'Who was the ship Science Officer?',
	possibleAnswers : ['A. David',
				 'B. Deckard',
				 'C. Android',
				 'D. Ash'],
	flags : [false, false, false, true],
	answer : 'D. Ash'
};

// load all of the questions into their own array
const qArray = [q1, q2, q3, q4, q5,];

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

//loads and displays the question and answers
function loadQuestion(q) {
	console.log(q);
	countdownTimer.reset();
  $(".question").html("<h3>" + qArray[q].question + "</h3>");
  $("#b1").text(qArray[q].possibleAnswers[0]).show();
  $("#b2").text(qArray[q].possibleAnswers[1]).show();
  $("#b3").text(qArray[q].possibleAnswers[2]).show();
  $("#b4").text(qArray[q].possibleAnswers[3]).show();
//  answer();  
//  nextQuestion(index);
}

function answer() {
    //  nextQuestion();
        $('.answerchoice').on('click', function() {
          console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }

    function right() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }

    function wrong() {
        incorrect++;
        alert("Incorrect!");
        console.log("incorrect");
    }

    function score() {
        $('.score').empty();
        $('.score').append("<h2><p>" + correct + " correct</p></h2>");
        $('.score').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();
    }