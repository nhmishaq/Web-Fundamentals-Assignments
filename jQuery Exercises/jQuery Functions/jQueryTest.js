$(document).ready(function(){
    console.log("this guy is up and ready!!");
    $("p").addClass("h1");
    $("button").on(function(){
        $("p").prepend("<b>dude</b> lessgoooo");
    })

});