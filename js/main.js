// Game altering variables

var turnsAllowed = 3; // This is editable to suit, normal turns allowed is 3
var totalDice = 5; //Changing this will break the game as it currently is, variable in place for better code readability
var maxGameTurns = 13; // This value should be 13
var upperBonusRequirement = 63; // This is normally set to 63
var upperBonus = 35 // This is normally set to 35

// Active or inactive dice:

var dice1 = true;
var dice2 = true;
var dice3 = true;
var dice4 = true;
var dice5 = true;

// dice values
var d1val = 0;
var d2val = 0;
var d3val = 0;
var d4val = 0;
var d5val = 0;

// Score Checker Object
var ScoreChecker;

// Roll Object
var rollDice;

// Variables to keep log of game processes
var totalRolls = 0;
var gameTurns = 0;
var scoreClick = 2;
var gameOver = false;
var scoreTotal = 0;
var upperScore = 0;
var lowerScore = 0;
var bonusCheck = 0;
var bonusCheckPassed = false;


// The dice are true or false so that the function knows if to roll or not
function Roll() {

	this.showOne = function(diceNum) {
		$('#' + diceNum + ' .dot1').addClass('hidden');
		$('#' + diceNum + ' .dot2').addClass('hidden');
		$('#' + diceNum + ' .dot3').addClass('hidden');
		$('#' + diceNum + ' .dot4').removeClass('hidden');
		$('#' + diceNum + ' .dot5').addClass('hidden');
		$('#' + diceNum + ' .dot6').addClass('hidden');
		$('#' + diceNum + ' .dot7').addClass('hidden');
		return 1;
	};

	this.showTwo = function(diceNum) {
		$('#' + diceNum + ' .dot1').addClass('hidden');
		$('#' + diceNum + ' .dot2').removeClass('hidden');
		$('#' + diceNum + ' .dot3').addClass('hidden');
		$('#' + diceNum + ' .dot4').addClass('hidden');
		$('#' + diceNum + ' .dot5').addClass('hidden');
		$('#' + diceNum + ' .dot6').removeClass('hidden');
		$('#' + diceNum + ' .dot7').addClass('hidden');
		return 2;
	};

	this.showThree = function(diceNum) {
		$('#' + diceNum + ' .dot1').addClass('hidden');
		$('#' + diceNum + ' .dot2').removeClass('hidden');
		$('#' + diceNum + ' .dot3').addClass('hidden');
		$('#' + diceNum + ' .dot4').removeClass('hidden');
		$('#' + diceNum + ' .dot5').addClass('hidden');
		$('#' + diceNum + ' .dot6').removeClass('hidden');
		$('#' + diceNum + ' .dot7').addClass('hidden');
		return 3;
	};

	this.showFour = function(diceNum) {
		$('#' + diceNum + ' .dot1').removeClass('hidden');
		$('#' + diceNum + ' .dot2').removeClass('hidden');
		$('#' + diceNum + ' .dot3').addClass('hidden');
		$('#' + diceNum + ' .dot4').addClass('hidden');
		$('#' + diceNum + ' .dot5').addClass('hidden');
		$('#' + diceNum + ' .dot6').removeClass('hidden');
		$('#' + diceNum + ' .dot7').removeClass('hidden');
		return 4;
	};

	this.showFive = function(diceNum) {
		$('#' + diceNum + ' .dot1').removeClass('hidden');
		$('#' + diceNum + ' .dot2').removeClass('hidden');
		$('#' + diceNum + ' .dot3').addClass('hidden');
		$('#' + diceNum + ' .dot4').removeClass('hidden');
		$('#' + diceNum + ' .dot5').addClass('hidden');
		$('#' + diceNum + ' .dot6').removeClass('hidden');
		$('#' + diceNum + ' .dot7').removeClass('hidden');
		return 5;
	};

	this.showSix = function(diceNum) {
		$('#' + diceNum + ' .dot1').removeClass('hidden');
		$('#' + diceNum + ' .dot2').removeClass('hidden');
		$('#' + diceNum + ' .dot3').removeClass('hidden');
		$('#' + diceNum + ' .dot4').addClass('hidden');
		$('#' + diceNum + ' .dot5').removeClass('hidden');
		$('#' + diceNum + ' .dot6').removeClass('hidden');
		$('#' + diceNum + ' .dot7').removeClass('hidden');
		return 6;
	};

	this.showZero = function() {
		$('.dot').addClass('hidden');
		$('#console').text('Click Roll to take another turn!');
		d1val = 0;	
		return 0;
	}

	this.rollDice = function(roll, diceNum) {
		switch(roll) {
			case 1: this.showOne(diceNum); break;
			case 2: this.showTwo(diceNum); break;
			case 3: this.showThree(diceNum); break;
			case 4: this.showFour(diceNum); break;
			case 5: this.showFive(diceNum); break;
			case 6: this.showSix(diceNum); break;
			default: 'The rollDice function is not being used correctly, please check the roll input';
		}
	};

	this.roll = function() {
		if (dice1) {
			var roll = Math.floor((Math.random() * 6) + 1);
			this.rollDice(roll, 'dice1');
			d1val = roll;
		}
		if (dice2) {
			var roll = Math.floor((Math.random() * 6) + 1);
			this.rollDice(roll, 'dice2');
			d2val = roll;
		}
		if (dice3) {
			var roll = Math.floor((Math.random() * 6) + 1);
			this.rollDice(roll, 'dice3');
			d3val = roll;
		}
		if (dice4) {
			var roll = Math.floor((Math.random() * 6) + 1);
			this.rollDice(roll, 'dice4');
			d4val = roll;
		}
		if (dice5) {
			var roll = Math.floor((Math.random() * 6) + 1);
			this.rollDice(roll, 'dice5');
			d5val = roll;
		}
	};
}


function cancelSelect() {
	if(d1val === 0) {
		$('#dice1').removeClass('selected');
		$('#dice2').removeClass('selected');
		$('#dice3').removeClass('selected');
		$('#dice4').removeClass('selected');
		$('#dice5').removeClass('selected');
		dice1 = true;
		dice2 = true;
		dice3 = true;
		dice4 = true;
		dice5 = true;
		return false;
	}
}


function select() {

	$('#dice1').on('click', function() {
		if(dice1) {
			$(this).addClass('selected');
			dice1 = false;
		} else {
			$(this).removeClass('selected');
			dice1 = true;
		}
		cancelSelect();
	});

	$('#dice2').on('click', function() {
		if(dice2) {
			$(this).addClass('selected');
			dice2 = false;
		} else {
			$(this).removeClass('selected');
			dice2 = true;
		}	
		cancelSelect();
	});

	$('#dice3').on('click', function() {
		if(dice3) {
			$(this).addClass('selected');
			dice3 = false;
		} else {
			$(this).removeClass('selected');
			dice3 = true;
		}
		cancelSelect();	
	});

	$('#dice4').on('click', function() {
		if(dice4) {
			$(this).addClass('selected');
			dice4 = false;
		} else {
			$(this).removeClass('selected');
			dice4 = true;
		}	
		cancelSelect();
	});

	$('#dice5').on('click', function() {
		if(dice5) {
			$(this).addClass('selected');
			dice5 = false;
		} else {
			$(this).removeClass('selected');
			dice5 = true;
		}	
		cancelSelect();
	});
}


function ScoreChecking() {

	this.diceArray = function() {
		return [d1val, d2val, d3val, d4val, d5val];
	};

	this.checkOnes = function() {
		var total = 0, i;
		var dicelist = this.diceArray();
		for(i = 0; i < totalDice; i++) {
			if(dicelist[i] === 1) {
				total++;
			}
		}
		return total;
	};

	this.checkTwos = function() {
		var total = 0, i;
		var dicelist = this.diceArray();
		for(i = 0; i < totalDice; i++) {
			if(dicelist[i] === 2) {
				total += 2;
			}
		}
		return total;
	};

	this.checkThrees = function() {
		var total = 0, i;
		var dicelist = this.diceArray();
		for(i = 0; i < totalDice; i++) {
			if(dicelist[i] === 3) {
				total += 3;
			}
		}
		return total;
	};

	this.checkFours = function() {
		var total = 0, i;
		var dicelist = this.diceArray();
		for(i = 0; i < totalDice; i++) {
			if(dicelist[i] === 4) {
				total += 4;
			}
		}
		return total;
	};

	this.checkFives = function() {
		var total = 0, i;
		var dicelist = this.diceArray();
		for(i = 0; i < totalDice; i++) {
			if(dicelist[i] === 5) {
				total += 5;
			}
		}
		return total;
	};

	this.checkSixes = function() {
		var total = 0, i;
		var dicelist = this.diceArray();
		for(i = 0; i < totalDice; i++) {
			if(dicelist[i] === 6) {
				total += 6;
			}
		}
		return total;
	};

	this.checkTOAK = function() {
		var count, maxkey, max, i, total, dicelist = this.diceArray();

		count = _.countBy(dicelist, _.identity);
		maxKey = _.max(Object.keys(count), function (key) { return count[key]; });
		total = d1val + d2val + d3val + d4val + d5val;

		max = 0;
		for(i = 0; i < Object.keys(count).length; i++) {
			if(Object.values(count)[i] > max) {
				max = Object.values(count)[i];
			}
		}

		if(max < 3) {
			return 0;
		} else {
			return total;
		} 
	};

	this.checkFOAK = function() {
		var count, maxkey, max, i, total, dicelist = this.diceArray();

		count = _.countBy(dicelist, _.identity);
		maxKey = _.max(Object.keys(count), function (key) { return count[key]; });
		total = d1val + d2val + d3val + d4val + d5val;

		max = 0;
		for(i = 0; i < Object.keys(count).length; i++) {
			if(Object.values(count)[i] > max) {
				max = Object.values(count)[i];
			}
		}

		if(max < 4) {
			return 0;
		} else {
			return total;
		} 
	};

	this.checkFH = function() {
		var count, maxkey, max, i, dicelist = this.diceArray();

		count = _.countBy(dicelist, _.identity);
		maxKey = _.max(Object.keys(count), function (key) { return count[key]; });

		max = 0;
		for(i = 0; i < Object.keys(count).length; i++) {
			if(Object.values(count)[i] > max) {
				max = Object.values(count)[i];
			}
		}

		if(max === 3 && Object.values(count).length === 2) {
			return 25;
		} 

		return 0;
	};

	this.checkSS = function() {
		var dicelist, set, diceArray = this.diceArray();
		diceArray.sort();
		set = new Set(diceArray);
		dicelist = Array.from(set);

		if (dicelist.length < 4) {
			return 0;
		}

		if (dicelist[0] === 1 && dicelist[1] === 2 && dicelist[2] === 3 && dicelist[3] === 4 ||
			dicelist[0] === 2 && dicelist[1] === 3 && dicelist[2] === 4 && dicelist[3] === 5 ||
			dicelist[0] === 3 && dicelist[1] === 4 && dicelist[2] === 5 && dicelist[3] === 6) {
			return 30;
		}

		return 0;
	};

	this.checkLS = function() {
		var dicelist, set, diceArray = this.diceArray();
		diceArray.sort();
		set = new Set(diceArray);
		dicelist = Array.from(set);

		if (dicelist.length != 5) {
			return 0;
		}

		if (dicelist[0] === 1 && dicelist[1] === 2 && dicelist[2] === 3 && dicelist[3] === 4 && dicelist[4] === 5 ||
			dicelist[0] === 2 && dicelist[1] === 3 && dicelist[2] === 4 && dicelist[3] === 5 && dicelist[4] === 6) {
			return 40;
		}
		
		return 0;
	};

	this.checkYahtzee= function() {
		var count, maxkey, max, i, dicelist = this.diceArray();

		count = _.countBy(dicelist, _.identity);
		maxKey = _.max(Object.keys(count), function (key) { return count[key]; });

		max = 0;
		for(i = 0; i < Object.keys(count).length; i++) {
			if(Object.values(count)[i] > max) {
				max = Object.values(count)[i];
			}
		}

		if(max === 5) {
			return 50;
		} 
		return 0;
	};

	this.checkChance = function() {
		return d1val + d2val + d3val + d4val + d5val;
	}
}


function scoreSelect() {

	$('.scoreCard tr').on('click', function() {
		var value = $(this).find('td:eq(1)').text();
		var id = $(this).attr('id');

		if (gameOver) {
			alert('GAME OVER!');
			return false;
		} else if (scoreClick === 2) {
			$('#console').text('You need to Roll to start the game! You cannot select a score with no dice rolled!');
			return false;
		} else if (id === 'bonus' || id === 'total' || id === 'lTotal' || id === 'uTotal') {
			$('#console').text('This is not a score selector!');
			return false;
		} else if (scoreClick > 0) {
			$('#console').text('You have already selected a score for this turn, please roll again for your next turn!');
			return false;
		} else if (value != '-') {
			$('#console').text('You have already selected a score for this catorgory, please make another selection!');
			return false;			
		}
		
		switch(id) {
			case 'onesScore':
				var score = ScoreChecker.checkOnes();
				scoreUpdate(this, score, 'upper');
				break;
			case 'twosScore':
				var score = ScoreChecker.checkTwos();
				scoreUpdate(this, score, 'upper');
				break;
			case 'threesScore':
				var score = ScoreChecker.checkThrees();
				scoreUpdate(this, score, 'upper');
				break;
			case 'foursScore':
				var score = ScoreChecker.checkFours();
				scoreUpdate(this, score, 'upper');
				break;
			case 'fivesScore':
				var score = ScoreChecker.checkFives();
				scoreUpdate(this, score, 'upper');
				break;
			case 'sixesScore':
				var score = ScoreChecker.checkSixes();
				scoreUpdate(this, score, 'upper');
				break;
			case 'threeKindScore':
				var score = ScoreChecker.checkTOAK();
				scoreUpdate(this, score, 'lower');
				break;
			case 'fourKindScore':
				var score = ScoreChecker.checkFOAK();
				scoreUpdate(this, score, 'lower');
				break;
			case 'fullHouse':
				var score = ScoreChecker.checkFH();
				scoreUpdate(this, score, 'lower');
				break;
			case 'shortStraight':
				var score = ScoreChecker.checkSS();
				scoreUpdate(this, score, 'lower');
				break;
			case 'longStraight':
				var score = ScoreChecker.checkLS();
				scoreUpdate(this, score, 'lower');
				break;
			case 'yahtzee':
				var score = ScoreChecker.checkYahtzee();
				scoreUpdate(this, score, 'lower');
				break;
			case 'chance':
				var score = ScoreChecker.checkChance();
				scoreUpdate(this, score, 'lower');
				break;
			default:
				console.log('Error in switch function for scoreSelect(), id not recognised');
		}

		totalRolls = 0;
		gameTurns++;

		if(gameTurns < maxGameTurns) {
			$('#console').text('Your go has ended, click the Roll button to go again!');
		}
		else {
			endGame();
		}

		bonusChecker();
		rollDice.showZero();
		cancelSelect();
	});
}


function bonusChecker() {
	if(upperScore >= upperBonusRequirement && !bonusCheckPassed) {
		scoreTotal += upperBonus;
		upperScore += upperBonus;
		bonusCheckPassed = true;
		$('#bonus').find('td:eq(1)').text(upperBonus);
		$('#uTotal').find('td:eq(1)').text(upperScore);
		$('#total').find('td:eq(1)').text(scoreTotal);
	}
}


function scoreUpdate(id, score, level) {
	scoreTotal += parseInt(score);
	if(level === 'upper') {
		upperScore += score;
	} else if (level === 'lower') {
		lowerScore += score;
	} else {
		console.log('Scoreupdate() error, level not defined as upper or lower');
	}
	//Updates the score and the total
	$(id).find('td:eq(1)').text(score);
	$('#total').find('td:eq(1)').text(scoreTotal);
	$('#uTotal').find('td:eq(1)').text(upperScore);
	$('#lTotal').find('td:eq(1)').text(lowerScore);
	scoreClick++;
}


function initVariables() {
	// init Roll object
	rollDice = new Roll();
	//sets initial values to zero
	rollDice.showZero();

	// init scorechecker object
	ScoreChecker = new ScoreChecking();

	$('#console').text('Welcome to David Yahtzee, click Roll to start!');
}


function roll() {

	$('#rollButton').on('click', function() {

		if (gameOver) {
			alert('GAME OVER!');
			$('#console').text('Game Over!');
			return false;
		}
		if(totalRolls < turnsAllowed) {
			scoreClick = 0;
			rollDice.roll();
			totalRolls++;
			$('#console').text('Rolling roll ' + totalRolls);
		} else {
			$('#console').text('You have used up all ' + totalRolls + ' turns, please select where you want this turn scored');
			return false;
		}
	});

}


function endGame() {
	$('#console').text('Game Over!');
	gameOver = true;
}


function game() {
	initVariables();
	select();
	scoreSelect();
	roll();
}


$(document).ready(function() {
	game();
});




