$(function() {

//VARIABLES
var divClone = $('.container').clone();

	//event for switch/case
var dynamic = "pickPokemon",
	//variables to hold user and enemy pokemon stats
	yourPokemon,
	enemyPokemon;
//counter for button clicks
var attack = 1;
// Characters and Stats
var characters = {
	pikachu: {
	name: "Pikachu",
	health: 130,
	attack: 8,
	},
	squirtle: {
	name: "Squirtle",
	health: 100,
	attack: 5,
	},
	bulbasaur: {
	name: "Bulbasaur",
	health: 150,
	attack: 20,
	},
	charmander: {
	name: "Charmander",
	health: 160,
	attack: 25,
	}
};


//gameReset
	
function gameReset() {
	$('#reset').on('click', function() {
		var dynamic = "pickPokemon",
			yourPokemon,
			enemyPokemon,
			attack = 1;
			$('#battle').css("visibility", "hidden");
			$('.container').replaceWith(divClone);
	});
};

	//pick user Pokemon
function pickPokemon(user) {
	$(user).appendTo('.userPokemon');
	$(user).removeClass('charChoice');
		yourPokemon = characters[user.id]
	$(".userHP").html(yourPokemon.health + " HP");
	$("#message").html(yourPokemon.name + " is yours. Now pick a Pokemon to fight!!");
	};

	//pick enemy Pokemon
function pickEnemy(enemy) {
	$(enemy).appendTo('.currentEnemy');
	$(enemy).removeClass('charChoice');
		enemyPokemon = characters[enemy.id];
	$(".enemyHP").html(enemyPokemon.health + " HP");
	$("#message").html("You chose: " + enemyPokemon.name + "<p>Click Attack!! to begin Poke BATTLE!!!</p>");
	};

	//fighting calculatons
function pokeBattle() {
	var userMultipliedDmg;
		winLose();
			if (attack == 1) {
				userMultipliedDmg = yourPokemon.attack;
					enemyPokemon.health -= yourPokemon.attack;
					yourPokemon.health -= enemyPokemon.attack;
				battleMsg();		
			} else if (yourPokemon.health && enemyPokemon.health > 0) {
				userMultipliedDmg = (yourPokemon.attack * attack);
					enemyPokemon.health -= userMultipliedDmg;
					yourPokemon.health -= enemyPokemon.attack;
				battleMsg();
				winLose();
			}
		//fighting status
	function battleMsg() {
		$(".battleMsg").html(enemyPokemon.name + " hit " + yourPokemon.name + " for " + enemyPokemon.attack + " HP" +
						 "<p>" + yourPokemon.name + " hit " + enemyPokemon.name + " for " + userMultipliedDmg + " HP" + "</p>");
		$(".userHP").html(yourPokemon.health + " HP");
		$(".enemyHP").html(enemyPokemon.health + " HP");
	};
		//check if won or lose
	function winLose(){
		//check for empty div where list of enemies were
		if ( $('.charChoice').text().length == 0 && enemyPokemon.health <=0) {
			$(".battleMsg").html(yourPokemon.name + " is victorious.");
			$(".reset").append('<input class="button-primary" id="reset" type="button" value="Reset Game">');
			dynamic = "pickEnemy"
		} else if (yourPokemon.health <= 0) {
			$(".battleMsg").html(yourPokemon.name + " has fainted. Try Again");
			$(".reset").append('<input class="button-primary" id="reset" type="button" value="Reset Game">');
			dynamic = "pickEnemy"
		} else if (enemyPokemon.health <= 0) {
			$(".battleMsg").html(enemyPokemon.name + " has been defeated. <p>Pick your next enemy!</p>")
			$(".currentEnemy, .enemyHP").empty();
			dynamic = "pickEnemy"
		}
	};	
};


//on click functions
	$('.charChoice').on('click', function() {
		switch(dynamic) {
			case "pickPokemon":
				pickPokemon(this);
				dynamic = "pickEnemy";
				break;
			case "pickEnemy":
				pickEnemy(this);
				dynamic = "pokeBattle";
				$('#battle').css("visibility", "visible")
				break;
			} 
	});
	//for when attack button is ready
	$('#battle').on('click', function() {
		if (dynamic == "pokeBattle") {
			pokeBattle();
			attack++
		} 
		if (dynamic == "pickEnemy") {
			gameReset();
		}
	});
});




