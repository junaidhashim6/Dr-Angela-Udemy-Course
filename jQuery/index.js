$("h1").css("color","red");
$("h1").addClass("big-size");
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$(document).on("mouseover", function(){
    $("h1").css("color","grey");
});
//add new element 
$("h1").before("<button>new</button>");

//adding annimation using jQuery
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
