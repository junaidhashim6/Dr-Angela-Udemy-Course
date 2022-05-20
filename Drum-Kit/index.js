
var count = document.querySelectorAll("button").length;
for(var i=0; i<count; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        alert("I got clicked");
    })
}
