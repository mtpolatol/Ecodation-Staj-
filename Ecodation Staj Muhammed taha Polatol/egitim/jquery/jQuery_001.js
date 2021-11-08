//jquery nedir?
// js kütüphanesidir.

//CDN: Content Delivery Network

/*

* ==> bütün
div,p{}
div>p{}
div~p{}
div+p{}

input[type="text"]{}

jQuery ==> $('') tavsiyem
jQuery ==> $("")

<p id="id44"></p>
<p></p>
<p class="class44"></p>

$('#id44').selectors();
$('p').selectors();
$('.class44').selectors();

*/

//$(document.ready(function () {}));
$(function (){
    $("p").css("color", "blue");
    $("#id44").css("color", "red");
    $(".class44").css("color", "yellow");
    
    $("h1").html("<b><i>Html</i></b>").css("color", "red").css("fontSize", ".5rem");
    
    $("h1").html("<b><i>Html</i></b>").css({
      color: "red",
      fontSize: "15px",
      margin: "25px",
      padding: "50px",
    });
    
    var objectCss = {
      color: "red",
      fontSize: "15px",
      margin: "25px",
      padding: "50px",
    };
    
    $("h1").html("<b><i>Html</i></b>").css(objectCss);
    
    $("h2").text("text").css(objectCss);
})


