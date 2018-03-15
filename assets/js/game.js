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
const questionArray = [q1, q2, q3, q4, q5,];


