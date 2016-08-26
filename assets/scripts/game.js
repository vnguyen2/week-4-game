
//defining characters of game and assigning attributes
// var	pikachu =  {
// 	name: "Pikachu",
// 	hitpoints: 120,
// 	attackPower: 8,
// },
// 	pikachuStats = $(".pikachu");
// 	pikachuStats.attr({name: pikachu.name}, {hitpoints: pikachu.hitpoints}, {attackPower: pikachu.attackPower});

// var	squirtle = {
// 	name: "Squirtle",
// 	hitpoints: 100,
// 	attackPower: 5,
// },
// 	squirtleStats = $(".squirtle");
// 	squirtleStats.attr({name: squirtle.name}, {hitpoints: squirtle.hitpoints}, {attackPower: squirtle.attackPower});

// var	charmander = {
// 	name: "Charmander",
// 	hitpoints: 150,
// 	attackPower: 20,
// },
// 	charmanderStats = $(".charmander");
// 	charmanderStats.attr({name: charmander.name}, {hitpoints: charmander.hitpoints}, {attackPower: charmander.attackPower});


// var	bulbasaur = {
// 	name: "Bulbasaur",
// 	hitpoints: 180,
// 	attackPower: 25,
// },
// 	bulbasaurStats = $(".bulbasaur");
// 	bulbasaurStats.attr({name: bulbasaur.name}, {hitpoints: bulbasaur.hitpoints}, {attackPower: bulbasaur.attackPower});
		

// $(function() {
// 	pick Character to play and move to userChar div
// 	if($('.userPick').is(":empty")){
// 	$('.charChoice').on('click', function() {
// 		this allows only selected char to have class removed
// 		$(this).removeClass('nonCharChoice');
// 		$(this).appendTo('.userFighter');
// 		$('.nonCharChoice').removeClass('charChoice')
// 			.addClass('enemyChoice')
// 			.appendTo('.enemies')
// 			.removeClass('nonCharChoice');
// 		$('.userPick').html("You chose " + $('.charChoice').attr('name') + " as your Pokemon.").css('background-color', '#3e50b4');
// 		$('.enemyMsgs').html("Choose a Pokemon below to fight!").css('padding-top', '15px');
// 	});
// }
// else
// {
// 	//pick an enemy to fight
// 	$(".enemyChoice").on('click', function(){
// 		$(this).removeClass('enemyChoice');
// 		$(this).appendTo('.currentEnemy');

// 		$('.defenderMsg').html("You chose " + $('.currentEnemy)').attr('name'));

// 	});
// }
	// function fight(){
	// 	var currentHealth = ($('.charChoice').attr('hitpoints') -= $('.currentEnemy').attr('attackPower'));
	// 	consoleLog(currentHealth);
	// }
	
	// fight();

// });

//VARIABLES
	//event for switch/case
var dynamic = "pickPokemon",
	//variables user and enemy pokemon stats
	yourPokemon,
	enemyPokemon;
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
$(function() {

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
		$('#battle').on('click', function() {
			if (dynamic == "pokeBattle") {
				fightTime();
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
});

// $(function() {
	//pokemon selection for user and enemy
	// function gameStart(){
		
	// }
	// gameStart();
	// });




