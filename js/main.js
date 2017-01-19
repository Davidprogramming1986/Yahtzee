// Game altering variables

var turnsAllowed = 3;
var totalDice = 5; //Changing this will break the game as it currently is, variable in place for better code readability

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

var rollTheDice;
var ScoreChecker = new ScoreChecking();

var totalRolls = 0;
var gameTurns = 0;
var gameInPlay = false;


// The dice are true or false so that the dunction knows if to roll or not
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

	this.startDicePos = function() {
		this.showSix('dice1');
		this.showSix('dice2');
		this.showSix('dice3');
		this.showSix('dice4');
		this.showSix('dice5');
	};

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
	});

	$('#dice2').on('click', function() {
		if(dice2) {
			$(this).addClass('selected');
			dice2 = false;
		} else {
			$(this).removeClass('selected');
			dice2 = true;
		}	
	});

	$('#dice3').on('click', function() {
		if(dice3) {
			$(this).addClass('selected');
			dice3 = false;
		} else {
			$(this).removeClass('selected');
			dice3 = true;
		}	
	});

	$('#dice4').on('click', function() {
		if(dice4) {
			$(this).addClass('selected');
			dice4 = false;
		} else {
			$(this).removeClass('selected');
			dice4 = true;
		}	
	});

	$('#dice5').on('click', function() {
		if(dice5) {
			$(this).addClass('selected');
			dice5 = false;
		} else {
			$(this).removeClass('selected');
			dice5 = true;
		}	
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
		var count, maxkey, max, i, dicelist = this.diceArray();

		count = _.countBy(dicelist, _.identity);
		maxKey = _.max(Object.keys(count), function (key) { return count[key]; });

		max = 0;
		for(i = 0; i < Object.keys(count).length; i++) {
			if(Object.values(count)[i] > max) {
				max = Object.values(count)[i];
			}
		}

		if(max < 3) {
			return 0;
		} else if(max === 3) {
			return maxKey * 3;
		} else if(max === 4) {
			return maxKey * 4;
		} else {
			return maxKey * 5;
		}
	};

	this.checkFOAK = function() {
		var count, maxkey, max, i, dicelist = this.diceArray();

		count = _.countBy(dicelist, _.identity);
		maxKey = _.max(Object.keys(count), function (key) { return count[key]; });

		max = 0;
		for(i = 0; i < Object.keys(count).length; i++) {
			if(Object.values(count)[i] > max) {
				max = Object.values(count)[i];
			}
		}

		if(max < 4) {
			return 0;
		} else if(max === 4) {
			return maxKey * 4;
		} else {
			return maxKey * 5;
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

function resetTurn() {
	gameInPlay = false;
	totalRolls = 0;
	updateRoll();

	if(gameTurns < 13) {
		$('#console').text('Your go has ended, click the Roll button to go again!');
	}
	else {
		$('#console').text('Game Over!');
	}
}


function scoreSelect() {

	$('#onesScore').on('click', function() {
		var score = ScoreChecker.checkOnes();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});
	$('#twosScore').on('click', function() {
		var score = ScoreChecker.checkTwos();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});
	$('#threesScore').on('click', function() {
		var score = ScoreChecker.checkThrees();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});
	$('#foursScore').on('click', function() {
		var score = ScoreChecker.checkFours();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});
	$('#fivesScore').on('click', function() {
		var score = ScoreChecker.checkFives();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});
	$('#sixesScore').on('click', function() {
		var score = ScoreChecker.checkSixes();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});
	$('#threeKindScore').on('click', function() {
		var score = ScoreChecker.checkTOAK();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});
	$('#fourKindScore').on('click', function() {
		var score = ScoreChecker.checkFOAK();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});
	$('#fullHouse').on('click', function() {
		var score = ScoreChecker.checkFH();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});	
	$('#shortStraight').on('click', function() {
		var score = ScoreChecker.checkSS();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});	
	$('#longStraight').on('click', function() {
		var score = ScoreChecker.checkLS();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});	
	$('#yahtzee').on('click', function() {
		var score = ScoreChecker.checkYahtzee();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});	
	$('#chance').on('click', function() {
		var score = ScoreChecker.checkChance();
		$(this).find('td:eq(1)').text(score);
		resetTurn();
	});	
}

function updateRoll() {
	// Updates the number of rolls
	$('#totalRollsNumber').text(totalRolls);
}

function initVariables() {
	rollDice = new Roll();
	rollDice.startDicePos();
}

function game() {
	initVariables();

	$('#rollButton').on('click', function() {

		if (!gameInPlay) {
			select();
			scoreSelect();
		}

		gameInPlay = true;

		if(totalRolls < turnsAllowed) {
			rollDice.roll();
			totalRolls++;
			updateRoll();
		} else {
			$('#console').text('You have used up all ' + totalRolls + ' turns, please select where you want this turn scored');
		}
	});
}



$(document).ready(function() {
	game();

});