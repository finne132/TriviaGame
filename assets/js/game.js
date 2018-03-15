"use strict";

$(document).ready(function() {
    var index = 0;
    let counter =0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 10;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			 counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				outOfTime();
				countdownTimer.reset();
				if (index < qArray.length) {
					initQ(index);
				} else {
					$(".answerchoice").hide();
					score();
				}
			}
		}
	};

let correct = 0;
let incorrect = 0;
const q1 = {
	question : 'What was used to create the tendons of the aliens jaws?',
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
    $('.question').append('<button id="startButton" style="margin-top:20px;">Start</button>');
    $('#buttonholder').hide();
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
         initQ(index);
         $('#buttonholder').show();
	});
}		

//loads and displays the question and answers
function initQ(q) {
	console.log(q);
	countdownTimer.reset();
  $(".question").html("<div>" + qArray[q].question + "<div>");
  $("#b1").text(qArray[q].possibleAnswers[0]).show();
  $("#b2").text(qArray[q].possibleAnswers[1]).show();
  $("#b3").text(qArray[q].possibleAnswers[2]).show();
  $("#b4").text(qArray[q].possibleAnswers[3]).show();
}

function answer() {
        $('.answerchoice').on('click', function() {
          console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#b1").text('');
            $("#b2").text('');
            $("#b3").text('');
            $("#b4").text('');
            initQ();
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

    function outOfTime() {
        incorrect++;
        alert(`You ran out of time! The correct answer was ${qArray[index-1].answer}`);
        console.log("incorrect");
    }

    function score() {
        $('.score').empty();
        $('.score').append("<h2><p>" + correct + " correct</p></h2>");
        $('.score').append("<h2><p>" + incorrect + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();
	    $('.question').append('<button id="startButton">Start</button>');
	    $('#startButton').on('click', function() {
        index = 0;
		$(this).hide();
		countdownTimer.start();
        initQ(index);
        incorrect=0;
        correct=0;
        $('.score').empty();
	});	

    }

    setup();

    $('.answerchoice').on('click', function() {
        console.log($(this));
        if(this.id == 'b1') {
            var answerChosen = 'A';
        } else if(this.id == 'b2') {
            answerChosen = 'B';
        } else if (this.id == 'b3') {
            answerChosen = 'C';
        } else if (this.id == 'b4') {
            answerChosen = 'D';
        } 
        if ((answerChosen == 'A') && (qArray[index].flags[0] == true)) {
            right();
        } else if (answerChosen == 'A') {
            wrong();
        }
        if ((answerChosen == 'B') && (qArray[index].flags[1] == true)) {
            right();
        } else if (answerChosen == 'B') {
            wrong();
        }
       if ((answerChosen == 'C') && (qArray[index].flags[2] == true)) {
            right();
        } else if (answerChosen == 'C') {
            wrong();
        }
       if ((answerChosen == 'D') && (qArray[index].flags[3] == true)) {
            right();
        } else if (answerChosen == 'D') {
            wrong();
        }
       
        $(".question").text('');
        $("#b1").text('');
        $("#b2").text('');
        $("#b3").text('');
        $("#b4").text('');
        index++;
        if (index < qArray.length) {
            initQ(index);
        } else {
            $(".answerchoice").hide();
            score();
        }
       });
       
       
       //	$('#start').click(countdownTimer.start);
       });