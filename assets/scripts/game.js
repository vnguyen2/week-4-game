
//defining characters of game
var	pikachu =  {
		name: "Pikachu",
		hitpoints: 120,
		attackPower: 8,
};
var	pikachuStats = $(".pikachu");
	pikachuStats.attr({name: pikachu.name}, {hitpoints: pikachu.hitpoints});
	// pikachuStats.attr('hitpoints', pikachu.hitpoints);
	pikachuStats.attr('attackPower', pikachu.attackPower);	
	
	
var	character2 = {
		name: "Squirtle",
		hitpoints: 100,
		attackPower: 5,
	},
	character3 = {
		name: "Charmander",
		hitpoints: 150,
		attackPower: 20,
	},
	character4 = {
		name: "Bulbasaur",
		hitpoints: 180,
		attackPower: 25,
	};

		


$(function() {
	//pick Character to play and move to userChar div
	$(".charChoice").on('click', function() {
		//this allows only selected char to have class removed
		$(this).removeClass("nonCharChoice")
		$(".nonCharChoice").removeClass("charChoice")
			.appendTo(".enemies")
		$(".userPick").html("You chose " + $(".charChoice").attr('name') + " as your Pokemon.");
		
	});
});

	
