$(function() {
    console.log( "ready!" );
    var arrOfPokemon = [];
    for (var i = 1; i<=151; i++){
        arrOfPokemon.push("http://pokeapi.co/media/img/"+i+".png");   
    }
    $('div.pokemonImages').html(arrOfPokemon);
});

