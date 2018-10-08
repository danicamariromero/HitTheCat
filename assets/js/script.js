$(document).ready(() => {
// Game proper & timer - moving of the dot
var gameScore = 0;
var previousScore = 0;
var currentScore = 0;
var bestGScore = 0;
// $('#circle').mouseover(() => {
$('#circle').click(() => {

	gameScore++;
	setScore(gameScore);

	let maxH = $(window).height();
	let maxW = $(window).width();
	let randomTop  = Math.floor(Math.random() * maxH);
	let randomLeft = Math.floor(Math.random() * maxW);
	// let top = `${randomTop}px`;
	// let left = `${randomLeft}px`;
	let top = randomTop;
	let left = randomLeft;

	console.log(randomTop);
	console.log(randomLeft);

	if (randomTop <= maxH-200 && randomLeft <= maxW-200) {
		// top  = `${randomTop}px`;
		// left = `${randomLeft}px`;
		$("#circle").css("top", top);
		$("#circle").css("left", left);
		console.log("passed IF");
	} else {
		while(randomTop > maxH-200 || randomLeft > maxW-200) {
			// randomTop = Math.floor(Math.random() * (960 - 1) + 1);
			// randomLeft = Math.floor(Math.random() * (1024 - 1) + 1);
			randomTop  = Math.floor(Math.random() * maxH);
			randomLeft = Math.floor(Math.random() * maxW);
		}
		// top  = `${randomTop}px`;
		// left = `${randomLeft}px`;
		// top  = randomTop
		// left = randomLeft
		$("#circle").css("top", randomTop);
		$("#circle").css("left", randomLeft);
		console.log("passed ELSE");
	}

	// Start game proper
	if(gameScore == 1) {
		timerFunction(29);
	}
});

	// Timer
	const timerFunction = (maxTime) => {
		let timer = maxTime;
		let stopTime = setInterval(() => {
			if(timer >= 0) {
				$('#timer').html(`Timer: ${timer--}`);
			} else {
				alert(`Time's up! Your score is ${gameScore}. Try again!`);
				clearInterval(stopTime);

				currentBest();
				$('#timer').html(`Timer: 30`);
				setScore(0)
			}
		}, 1000);
	}; 

	// Set the score
	const setScore = (setScore) => {
		$('#score').html(`Score: ${setScore}`);
		gameScore = setScore;
	};

	// Publish current best
	const currentBest = () => {
		// Set previous and current score
		previousScore = currentScore;
		currentScore  = gameScore;

		if(currentScore > bestGScore) {
			bestGScore = currentScore 
		};
		
		$('#best').html(`Current best is ${bestGScore}`);
	};
});