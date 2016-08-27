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
	health: 120,
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
	attack: 15,
	},
	charmander: {
	name: "Charmander",
	health: 180,
	attack: 20,
	}
};

var characterReset = '<div class="pikachu charChoice" id="pikachu" >' +
						'<img src="assets/images/pikachu.png" class="pokemon charChoice">' +
					'</div>' +
					'<div class="squirtle charChoice" id="squirtle">' +
						'<img src="assets/images/squirtle.png" class="pokemon">' +
					'</div>' +
					'<div class="charmander charChoice" id="charmander">' +
						'<img src="assets/images/charmander.png" class="pokemon">' +
					'</div>' +
					'<div class="bulbasaur charChoice" id="bulbasaur">' +
						'<img src="assets/images/bulbasaur.png" class="pokemon">' +
					'</div>';		

//bg music volume
$("#bgMusic").prop("volume", 0.3);
$("#bgMusic").get(0).play();


//gameReset	
function gameReset() {
	$('#reset').on('click', function() {
		var dynamic = "pickPokemon",
			yourPokemon,
			enemyPokemon,
			attack = 1;
			$('#message').html("!! Choose your pokemon !!");
			$('#characterHolder').html(characterReset);
			$('.userPokemon, .userHP, .battleMsg, .currentEnemy, .enemyHP').empty();
			$('#reset').css("visibility", "hidden");
			document.querySelector('#recover').play();	
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
	$("#message").html("You chose " + enemyPokemon.name + " to attack." + "<p>Click Attack!! to begin Poke BATTLE!!!</p>");
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
	});

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
			$('#reset').css("visibility", "visible");
				document.querySelector('#win').play();
			$(".currentEnemy, .enemyHP, .userHP").empty();	
			$('#battle').css("visibility", "hidden");
				gameReset();
		} else if (yourPokemon.health <= 0) {
			$(".battleMsg").html(yourPokemon.name + " has fainted. Try Again");
			$('#reset').css("visibility", "visible");
			$('#battle').css("visibility", "hidden");
			$(".userHP").empty();
				gameReset();
		} else if (enemyPokemon.health <= 0) {
			$(".battleMsg").html(enemyPokemon.name + " has been defeated. <p>Pick your next enemy!</p>")
			$(".currentEnemy, .enemyHP").empty();
				dynamic = "pickEnemy"
		}
	};	
};

});




