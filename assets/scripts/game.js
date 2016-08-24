
//defining characters of game
var	pikachu =  {
	name: "Pikachu",
	hitpoints: 120,
	attackPower: 8,
},
	pikachuStats = $(".pikachu");
	pikachuStats.attr({name: pikachu.name}, {hitpoints: pikachu.hitpoints}, {attackPower: pikachu.attackPower});

var	squirtle = {
	name: "Squirtle",
	hitpoints: 100,
	attackPower: 5,
},
	squirtleStats = $(".squirtle");
	squirtleStats.attr({name: squirtle.name}, {hitpoints: squirtle.hitpoints}, {attackPower: squirtle.attackPower});

var	charmander = {
	name: "Charmander",
	hitpoints: 150,
	attackPower: 20,
},
	charmanderStats = $(".charmander");
	charmanderStats.attr({name: charmander.name}, {hitpoints: charmander.hitpoints}, {attackPower: charmander.attackPower});


var	bulbasaur = {
	name: "Bulbasaur",
	hitpoints: 180,
	attackPower: 25,
	},
	bulbasaurStats = $(".bulbasaur");
	bulbasaurStats.attr({name: bulbasaur.name}, {hitpoints: bulbasaur.hitpoints}, {attackPower: bulbasaur.attackPower});


		

$(function() {
	//pick Character to play and move to userChar div
	$('.charChoice').on('click', function() {
		//this allows only selected char to have class removed
		$(this).removeClass('nonCharChoice')
		$('.nonCharChoice').removeClass('charChoice')
			.appendTo('.enemies')
		$('.userPick').html("You chose " + $('.charChoice').attr('name') + " as your Pokemon.");
		
	});

	$(".nonCharChoice").on('click')
});

	
