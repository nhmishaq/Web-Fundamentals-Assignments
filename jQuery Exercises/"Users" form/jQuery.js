$(function() {
//     $("button").on("click", "button", function(){
//     console.log($(serialize(".form1"))); 
//   });
$( "#button1" ).on( "click", "button", function() {
    console.log( $( "form" ).serialize() );
});

$('#button1').on( "click", "button", function() {
    $('#FN').append("#firstName");
    $("#LN").append("#lastName");
    $("#EA").append("#email");
    $("#CI").append("#contact");
    console.log ($(this).serialize('.form1'));
  });


});