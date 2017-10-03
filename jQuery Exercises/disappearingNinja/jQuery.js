$(function() {
    $("button").click(function(){
        $(".imagesOfNinjas img").show();
    });
    $("img").click(function(){
        $(this).hide();
    });
});