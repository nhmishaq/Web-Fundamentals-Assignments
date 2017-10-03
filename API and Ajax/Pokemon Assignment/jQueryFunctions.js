$(function() {
    var arrOfPokemon = [];
    for (var i = 1; i<=151; i++){
        arrOfPokemon.push(<img src="http://pokeapi.co/media/img/" + i + ".png">);   
    }
    $('div.pokemonImages').html(arrOfPokemon);
});