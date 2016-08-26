$(function() {

//VARIABLES
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
	hp: 120,
	attack: 8,
	},
	squirtle: {
	name: "Squirtle",
	hp: 100,
	attack: 5,
	},
	bulbasaur: {
	name: "Bulbasaur",
	hp: 150,
	attack: 20,
	},
	charmander: {
	name: "Charmander",
	hp: 180,
	attack: 25,
	}
};

	//switch case for handling selection of pokemon
	$('.charChoice').on('click', function() {
		switch(dynamic) {
			case "pickPokemon":
				console.log(this.id);
				selectPokemon(this);
				dynamic = "pickEnemy";
				break;
			case "pickEnemy":
				selectEnemy(this);
				dynamic = "pokeBattle";
				break;
			} 
	});
	//for when attack button is ready
	$('#battle').on('click', function() {
		if (dynamic == "pokeBattle") {
			pokeBattle();
			attack++
		} 
	});

	//select user Pokemon
	function selectPokemon(user) {
			$(user).appendTo('.userPokemon');
			$(user).removeClass('charChoice');
		yourPokemon = characters[user.id]
		$(".hp").html(yourPokemon.hp + " HP");
		$("#message").html(yourPokemon.name + " is yours. Now pick a Pokemon to fight!!");
	}

	//select enemy Pokemon
	function selectEnemy(enemy) {
			$(enemy).appendTo('.currentEnemy');
			$(enemy).removeClass('charChoice');
		enemyPokemon = characters[enemy.id];
		$(".enemyHP").html(enemyPokemon.hp + " HP");
		$("#message").html("You chose: " + enemyPokemon.name + "<p>Click Attack!! to begin Poke BATTLE!!!</p>");
	}

	//check if you win or lose
	function checkWinLose() {
		if(yourPokemon.hp <= 0) {
			$(".battleMsg").html(yourPokemon.name + "has fainted. Try Again");
		}
		if(enemyPokemon.hp <= 0){
			$(".battleMsg").html(enemyPokemon.name + "has been defeated. <p>Pick your next enemy!")
		}
	}

	//fighting calculatons
	function pokeBattle() {
		//user Pokemon taking damage
		yourPokemon.hp -= enemyPokemon.attack;
		//enemy pokemon taking damage
		var userMultipliedDmg;
		if(attack == 1){
			userMultipliedDmg = yourPokemon.attack;
			enemyPokemon.hp -= yourPokemon.attack;
			checkWinLose();
		} else {
			userMultipliedDmg = (yourPokemon.attack * attack);
			enemyPokemon.hp -= (userMultipliedDmg);
			checkWinLose();
		}
		//battle msg
		$(".battleMsg").html(enemyPokemon.name + " hit " + yourPokemon.name + " for " + enemyPokemon.attack + " HP" +
							 "<p>" + yourPokemon.name + " hit " + enemyPokemon.name + " for " + userMultipliedDmg + " HP" + "</p>");
		$(".hp").html(yourPokemon.hp + " HP");
		$(".enemyHP").html(enemyPokemon.hp + " HP");
	}

	


});





